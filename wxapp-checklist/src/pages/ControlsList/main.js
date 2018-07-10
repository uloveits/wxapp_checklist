import Vue from 'vue'
import App from './ControlsList'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '控件一览',
  }
}
