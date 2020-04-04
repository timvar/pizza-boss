<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="150px"
    ></v-img>

    <v-card-title>
      {{menuItem.name}}
    </v-card-title>

    <v-card-subtitle>
      {{menuItem.description}}
    </v-card-subtitle>
    <v-card-text>
      <div>Standard: {{menuItem.prices.standard}}</div>
      <div>Family: {{menuItem.prices.family}}</div>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="purple"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
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


