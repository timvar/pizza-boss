<template>
  <v-app>
    <v-container>
    <pb-header />
    </v-container>
    <v-container>
      <router-view></router-view>
    </v-container>
    <v-container>
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

<v-container>
    <pb-footer />
    </v-container>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
//import Home from './components/Home'
//import Menu from './components/Menu'
//import Admin from './components/Admin'

export default {
  components: {
    pbHeader: Header,
    pbFooter: Footer,
    //pbHome: Home,
    //pbMenu: Menu,
    //pbAdmin: Admin
  }

};
</script>
