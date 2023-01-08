import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import HighchartsVue from 'highcharts-vue'
import Highcharts from "highcharts";
import Stock from "highcharts/modules/stock";
Vue.use(HighchartsVue)
Stock(Highcharts)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
