<template>
  <div>
<p>Logged in as: {{currentUser}}</p>
<v-form>
  <v-row>
    <v-col cols="12" xs4>
<v-text-field v-model="email" outlined label="Email"></v-text-field>

    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" xs="4">
<v-text-field v-model="password" outlined label="Password"></v-text-field>
      
    </v-col>
  </v-row>
<v-btn class="primary mr-1" @click.prevent="login">Log in</v-btn>
<v-btn class="warning ml-1" @click.prevent="logout">Log out</v-btn>

</v-form>
  </div>
</template>
<script>
import firebase from 'firebase';
import store from '@/store';

firebase.auth().onAuthStateChanged(user => {
  console.log('logged user', user);
  if (user) {
    store.dispatch('setUser', user);
  } else {
    store.dispatch('setUser', null);
  }
});

export default {
  data() {
    return {
    email: '',
    password:''
    }
  },
methods: {
  login() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(err => {
      console.log('Firebase auth error: ', err.message);
    });
    
  },
  logout() {
    firebase.auth().signOut().then(() => console.log('logged out')).catch(err => console.log(err.message))
  }
},
  computed: {
    currentUser() {
      return this.$store.getters.currentUser
    }
  },
  
}
</script>
