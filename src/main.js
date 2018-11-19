import 'cbp-theme/dist/cbp-theme.min.css'

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')