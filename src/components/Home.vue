<template>
<v-content>
      <v-container
        class="fill-height"
        fluid
      >
      <v-img src="../assets/pizza.jpg">
        <v-row
          align="center"
          justify="center"
        >
          <v-col align="center" class="text-center">
             <h1 class="pa-12 white--text display-4">Welcome to PizzaBoss</h1>
            <v-btn x-large color="success" dark @click="goToMenu">tilaa
              <v-icon large>mdi-arrow-right-bold-circle-outline
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-img>
      </v-container>
      </v-content>
</template>
<script>
export default {
  data() {
    return {
      test: 'value'
    };
  },
  computed: {
    name() {
      return 'foo';
    }
  },
  methods: {
    goToMenu() {
      this.$router.push({ name: 'menuLink' });
    }
  }
};
</script>
