<template>
  <div>
<p>Logged in as: {{currentUser}}</p>
<v-form>
<v-textfield v-model="email" label="Email"></v-textfield>
<v-textfield v-model="password" label="Password"></v-textfield>
<v-btn class="primary mr-1" @click.prevent="login">Log in</v-btn>
<v-btn class="warning ml-1" @click.prevent="logout">Log out</v-btn>

</v-form>
  </div>
</template>
<script>
import firebase from 'firebase';
import {store} from '@/store';

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('setUser', user);
  } else {
    store.dispatch('setUser', null);
  }
});

export default {
methods: {
  login() {
    
  },
  logout() {
    
  }
},
  computed: {
    currentUser() {
      return this.$store.getters.currentUser 
    }
  },
  
}
</script>
