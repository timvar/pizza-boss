<template>
  <div class="about">
    <h1>About Us</h1>
    <v-row
      justify="start"
    >
    <div v-for="link in links" :key="link.name">

    <router-link class="mx-3 grey--text text--darken-1 headline" :to=link.link tag="li">

      {{link.name}}
       </router-link>
    </div>
    </v-row>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'Our History',
          link: '/history'
        },
        {
          name: 'Contact Us',
          link: '/contact'
        },
        {
          name: 'How to Order',
          link: '/ordering-guide'
        },
        {
          name: 'Delivery',
          link: '/delivery'
        }
      ]
    };
  }
};
</script>
<style>
li {
    text-decoration: none;
    list-style-type:none;
}

</style>
