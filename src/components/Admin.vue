<template>
  <div>
    <section v-if="currentUser">
    <v-row>
      <v-col cols="12" sm="12" md="6">
        <new-pizza></new-pizza>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <h3>Menu:</h3>
        <v-simple-table
    fixed-header
  >
    <thead>
      <tr>
        <th>Item</th>
        <th class="text-left">Remove from menu </th>
      </tr>
    </thead>
    <tbody v-for="pizza in pizzas" :key="pizza.name">
      <tr>
        <td>{{pizza.name}}</td>
        <td><v-btn @click="deleteMenuItem(item['.key'])">x</v-btn></td>
      </tr>
    </tbody>
  </v-simple-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>Current orders: {{numberOfOrders}}</h3>
        <v-simple-table
    fixed-header
    v-for="(orders, index) in getOrders['value']" :key="orders['.key']"
  >
    <thead>
      <tr>
        <th>Item</th>
        <th class="text-left">Size </th>
        <th>Qty</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <div class="order-number"><strong><em>
        Order Number: {{index + 1}}</em></strong><v-btn @click="deleteOrderItem(orders['.key'])">x</v-btn></div>
      <tr v-for="orderItems in orders['value']" :key="orderItems['.key']">
        <td>{{orderItems.name}}</td>
        <td>{{orderItems.size}}"</td>
        <td>{{orderItems.quantity}}</td>
        <td>{{orderItems.price}}</td>
      </tr>
    </tbody>
  </v-simple-table>
      </v-col>
    </v-row>
    </section>
    <v-row>
      <v-col cols="12" sm="12">
        <login-page></login-page>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import NewPizza from './NewPizza.vue';
import Login from './Login.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    NewPizza,
    LoginPage: Login
  },
  computed: {
    ...mapGetters('users', [
      'currentUser'
    ]),
    ...mapGetters('menu', [
      'pizzas'
    ]),
    ...mapGetters('orders', [
      'numberOfOrders',
      'getOrders'
    ]),
    pizzas() {
      return this.$store.state.pizzas;
    },
    numberOfOrders() {
      return this.$store.getters.numberOfOrders;
    }
  },
  methods: {
    ...mapActions('orders', ['removeOrderItem']),
    ...mapActions('menu', ['removeMenuItem']),
    deleteMenuItem(menuId) {
      this.removeMenuItem(menuId);
    },
    deleteOrderItem(orderId) {
      this.removeOrderItem(orderId);
    }
  }
};
</script>
<style scoped>

</style>
