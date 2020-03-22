<template>
<div>
  <v-row>
    <v-col>
  <v-simple-table
    :dense="dense"
    fixed-header
  >
    <thead>
      <tr>
        <th class="text-left">Size </th>
        <th class="text-left">Price </th>
        <th class="text-left">Add to basket </th>
      </tr>
    </thead>
    <tbody v-for="pizza in pizzas" :key="pizza['.key']">
      <tr>
        <td>{{pizza.name}}</td>
      </tr>
      <tr v-for="option in pizza.options" :key="option.size">
        <td>{{option.size}}</td>
        <td>{{option.price}}</td>
        <td>
          <v-btn @click="addToBasket(pizza, option)">
            +
          </v-btn>
        </td>
      </tr>
    </tbody>
  </v-simple-table>
  </v-col>
  <v-col>
    <!-- Shopping basket -->
    <div v-if="basket.length > 0">
  <v-simple-table
    :dense="dense"
    fixed-header
  >
    <thead>
      <tr>
        <th class="text-left">Quantity </th>
        <th class="text-left">Item </th>
        <th class="text-left">Total </th>
      </tr>
    </thead>
    <tbody v-for="item in basket" :key="item.name">
      <tr>
      <td>
        <v-btn small outlined color="green" @click="decreaseQty(item)">
          -
        </v-btn>
        <span>
          {{item.quantity}}
        </span>
        <v-btn small outlined color="green" @click="increaseQty(item)">
          +
        </v-btn>
      </td>
      <td>
        {{item.name}} {{item.size}}
      </td>
      <td>
        {{item.price * item.quantity}}
      </td>
      </tr>
      <tr>

      </tr>
    </tbody>
  </v-simple-table>
  <p>Order total: {{total}}</p>
  <v-btn class="success" @click="addNewOrder">Order</v-btn>
  </div>
  <div v-else>
    <p>{{basketText}}</p>
    {{this.$store.state.orders}}
  </div>
  </v-col>
  </v-row>
  {{ basket}}
  </div>
</template>
<script>
import { dbOrdersRef } from '../firebaseConfig';
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    dense: false,
    fixedHeader: false,
    height: 300,
    basket: [],
    basketText: 'Empty basket'

  }),
  computed: {
    ...mapGetters(['pizzas']),
    total() {
      let totalCost = 0;
      this.basket.forEach(item => {
        totalCost += item.quantity * item.price;
      });
      return totalCost;
    }

  },
  methods: {
    addToBasket(item, option) {
      this.basket.push({
        name: item.name,
        price: option.price,
        size: option.size,
        quantity: 1
      });
    },
    increaseQty(item) {
      item.quantity += 1;
    },
    decreaseQty(item) {
      item.quantity -= 1;
      if (item.quantity < 1) {
        this.removeFromBasket(item);
      }
    },
    removeFromBasket(item) {
      this.basket.splice(this.basket.indexOf(item), 1);
    },
    addNewOrder() {
    // this.$store.commit('addOrder', this.basket);
      dbOrdersRef.push(this.basket);
      this.basket = [];
      this.basketText = 'Thanks for the order';
    }
  }
};
</script>
