import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import Accounting from 'accounting';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  console.log('to:', to);
  next();
});

Vue.filter('currency', val => Accounting.formatMoney(val));

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
