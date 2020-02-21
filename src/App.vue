<template>
  <v-app>
    <v-container>
    <pb-header />
      <router-view></router-view>
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
