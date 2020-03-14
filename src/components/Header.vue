<template>
<div>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Menu</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar
      app
      color="grey lighten-3"
      dark
    >
      <v-app-bar-nav-icon color="grey"  
      @click.stop="drawer = !drawer" />
      <v-toolbar-title class="text-uppercase grey--text darken-3">
        <span class="font-weight-light">Pizza</span>
        <span>Boss</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row
      justify="start"
    >
    <div v-for="link in links" :key="link.name">
        
    <router-link :to=link.link tag="li">

      <v-btn
        
        color="grey darken-3"
        text
        rounded
        class="my-2"
      >
        {{ link.name }}
      </v-btn>
       </router-link>
    </div>
    </v-row>
    </v-app-bar>

    </div>
    
</template>

<script>
  export default {
    props: {
      source: String,
    },

    data: () => ({
      drawer: null,
      links: [
        {
          name: 'Menu',
          link: '/menu'
        },
        {
          name: 'Home',
          link: '/'
        }
      ],
    }),
  }
</script>
<style>
li {
    text-decoration: none;
}

</style>

