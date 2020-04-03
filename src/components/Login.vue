<template>
  <div>
    <div>

    <p v-if="!currUser">Please login</p>
    <p v-else>Logged in as: {{currUser}}</p>
    </div>

<v-form>
  <v-row>
    <v-col cols="12" xs4>
      <v-text-field id="email"  v-model="email" outlined label="Email"></v-text-field>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" xs="4">
      <v-text-field id="password" v-model="password" outlined label="Password"></v-text-field>
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
import { mapGetters, mapActions } from 'vuex';

firebase.auth().onAuthStateChanged(user => {
  console.log('logged user', user);
  if (user) {
    store.dispatch('users/setUser', user);
  } else {
    store.dispatch('users/setUser', null);
  }
});

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    ...mapActions('users', ['setUser']),
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(err => {
        console.log('Firebase auth error: ', err.message);
      });
    },
    logout() {
      firebase.auth().signOut().then(() => console.log('logged out')).catch(err => console.log(err.message));
    }
  },
  computed: {
    ...mapGetters('users', ['currentUser']),
    currUser() {
      return this.currentUser;
    }
  }

};
</script>
