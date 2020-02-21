<template>
  <div>
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
    <tbody >
      <tr >
        <td>Pepperoni</td>
        <td><v-btn>x</v-btn></td>
      </tr>
    </tbody>
  </v-simple-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>Current orders:</h3>
        <v-simple-table
    fixed-header
  >
    <thead>
      <tr>
        <th>Item</th>
        <th class="text-left">Size </th>
        <th>Qty</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody >
      <div class="order-number"><strong><em>
        Order Number: 1</em></strong></div>
      <tr >
        <td>Pepperoni</td>
        <td>9"</td>
        <td>1</td>
        <td>6.95</td>
      </tr>
    </tbody>
  </v-simple-table>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import NewPizza from './NewPizza'
export default {
  components: {
    NewPizza
  }
}
</script>
