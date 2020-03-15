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
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  components: {
    pbHeader: Header,
    pbFooter: Footer,
  }

};
</script>
