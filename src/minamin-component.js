import 'es6-promise/auto'

// Libraries
import Vue from 'vue'

import { store } from './store/store'

// Main Page
import App from './components/App.vue'

new Vue({
  store,
  render: h => h(App)
}).$mount('#appMinamin')
