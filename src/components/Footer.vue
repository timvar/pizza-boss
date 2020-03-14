<template>
  <v-footer
  color="grey lighten-3"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
    <div v-for="link in links"
        :key="link">
        
      <router-link :to="link.path" tag="span">
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
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      links: [
        {
          path: '/menu',
          name: 'Menu',
        },
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'About Us',
          path: '/about'
        },
        {
          name: 'Admin',
          path: '/admin'
        },
        {
          name: 'Contact',
          path: '/contact'
        }
      ],
    }),
  }
</script>
<style >
span {
    text-decoration: none;
}


</style>
