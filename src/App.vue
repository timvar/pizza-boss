<template>
  <v-app>
    <pb-header />
    <v-content>
      <v-container fluid>

      <router-view></router-view>
      <v-row>
        <v-col cols="12" sm="12" md="4">
          <router-view name="ordering-guide"></router-view>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <router-view name="delivery"></router-view>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <router-view name="history"></router-view>
        </v-col>
      </v-row>
      </v-container>
    </v-content>

    <pb-footer />
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
// import { dbMenuRef, dbOrdersRef } from './firebaseConfig';
import { mapActions } from 'vuex';

export default {
  components: {
    pbHeader: Header,
    pbFooter: Footer
  },
  async created() {
    // this.$store.dispatch('setMenuRef', dbMenuRef);
    // this.$store.dispatch('setOrdersRef', dbOrdersRef);
    try {
      await this.bindPizzas();
      await this.bindOrders();
    } catch (err) {
      console.error(`${err.name}: ${err.message}`);
    } finally {
      console.log('state', this.$store.state);
    }
  },
  methods: {
    ...mapActions('menu', [
      'bindPizzas']),
    ...mapActions('orders', [
      'bindOrders'])
  }
};
</script>
