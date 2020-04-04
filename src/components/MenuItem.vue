<template>
  <v-card
    class="mx-auto"
    max-width="250"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="150px"
    ></v-img>

    <v-card-title>
      {{item.name}}
    </v-card-title>

    <v-card-subtitle>
      {{item.description}}
    </v-card-subtitle>
    <v-card-text>
        <table>
      <thead>
      </thead>
      <tbody>
        <tr>
          <td class="text-right">Standard:</td>
          <td class="text-right">{{menuItem.prices.standard | currency}} </td>
          <td>
            <v-btn x-large icon color="green darken-3" @click="addToBasket(pizza, option)">
              <v-icon>mdi-plus-circle</v-icon>
            </v-btn>
          </td>
        </tr>
        <tr>
          <td class="text-right">Family:</td>
          <td class="text-right">{{menuItem.prices.family | currency}} </td>
          <td>
            <v-btn x-large icon color="green darken-3" @click="addToBasket(pizza, option)">
              <v-icon>mdi-plus-circle</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
  </table>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
      }
  },
  data() {
    return {
      menuItem: {
              name: 'Hawaii',
              description: 'Ham and pineapple',
              prices: {
                standard: 6.95,
                family: 10.95
              }
            }
    };
  },
};
</script>


