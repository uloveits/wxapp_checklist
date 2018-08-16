import Vue from 'vue'
import App from './appList'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: 'App一览',
  }
}
