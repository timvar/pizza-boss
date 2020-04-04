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
    <tbody v-for="(pizza, index) in pizzas" :key="`pizza-${index}`">
      <tr>
        <td>{{pizza.name}}</td>
      </tr>
      <tr v-for="option in pizza.options" :key="option.size">
        <td>{{option.size}}</td>
        <td>{{option.price | currency}}</td>
        <td>
          <v-btn x-large icon color="green darken-3" @click="addToBasket(pizza, option)">
                    <v-icon>mdi-plus-circle</v-icon>

          </v-btn>
        </td>
      </tr>
    </tbody>
  </v-simple-table>
  <menu-item></menu-item>
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
    <tbody v-for="(item,index) in basket" :key="`item-${index}`">
      <tr>
      <td>
        <v-btn icon color="red darken-3" @click="decreaseQty(item)">
          <v-icon>mdi-minus-circle-outline</v-icon>
        </v-btn>
        <span>
          {{item.quantity}}
        </span>
        <v-btn icon color="green darken-3" @click="increaseQty(item)">
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </td>
      <td>
        {{item.name}} {{item.size}}
      </td>
      <td>
        {{item.price * item.quantity | currency}}
      </td>
      </tr>
      <tr>

      </tr>
    </tbody>
  </v-simple-table>
  <p>Order total: {{total | currency}}</p>
  <v-btn class="green darken-3 white--text" @click="addNewOrder">Order
    <v-icon class="ml-3">mdi-send</v-icon>
  </v-btn>
  </div>
  <div v-else>
    <p>{{basketText}}</p>
  </div>
  </v-col>
  </v-row>
  </div>
</template>
<script>
// import { dbOrdersRef } from '../firebaseConfig';
import { mapGetters, mapActions } from 'vuex';
import MenuItem from './MenuItem';

export default {components: {
  MenuItem
},
  data: () => ({
    dense: false,
    fixedHeader: false,
    height: 300,
    basket: [],
    basketText: 'Empty basket'

  }),
  computed: {
    ...mapGetters('menu', ['pizzas']),
    total() {
      let totalCost = 0;
      this.basket.forEach(item => {
        totalCost += item.quantity * item.price;
      });
      return totalCost;
    }

  },
  methods: {
    ...mapActions('orders', ['addOrder']),
    ...mapActions('menu', ['bindPizzas']),
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
      this.addOrder(this.basket);
      // dbOrdersRef.push(this.basket);
      this.basket = [];
      this.basketText = 'Thanks for the order';
    }
  }
};
</script>
