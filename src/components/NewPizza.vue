<template>
  <v-form>
    <h3>Add new pizza:</h3>
    <v-row>
    <v-col cols="12" sm="12" md="6">
        <v-text-field label='Name' v-model="newPizza.name"
        dense
        outlined>
        </v-text-field>
        <v-textarea label='Description'
        outlined dense v-model="newPizza.description">
        </v-textarea>
      <p><strong>Option 1:</strong></p>
        <v-text-field label='Size (")'
        outlined
        v-model="newPizza.options[0].size">
        </v-text-field>
        <v-text-field label='Price'
        outlined
        v-model="newPizza.options[0].price">
        </v-text-field>
        <p><strong>Option 2:</strong></p>
        <v-text-field label='Size (")'
        outlined
        v-model="newPizza.options[1].size">
        </v-text-field>
        <v-text-field label='Price'
        outlined=""
        v-model="newPizza.options[1].price">
        </v-text-field>
      <v-btn class="success" block @click="addMenuItem">Add</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
export default {
  data() {
    return {
      newPizza: {
        name: 'Eg. Pepperoni',
        description: 'Eg. Tasty sausage pizza',
        options: [{
          size: 9,
          price: 6.95
        }, {
          size: 12,
          price: 10.95
        }
        ]
      }
    }
  },
  methods: {
    addMenuItem() {
      console.log(this.newPizza);
    }
  }
}
</script>

