import Vue from 'vue'
import App from './ctrlCaseList'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '控件Case一览',
  }
}
