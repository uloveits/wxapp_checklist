import Vue from 'vue'
import App from './CtrlCaseList'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '控件每Case一览',
  }
}
