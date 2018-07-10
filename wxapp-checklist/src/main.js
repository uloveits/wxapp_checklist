import Vue from 'vue'
import App from './App'
import asyncRequestMethod from './utils/asyncRequestMethod'

import mptoastRegistry from 'mptoast/registry'
mptoastRegistry(Vue)

Vue.config.productionTip = false
App.mpType = 'app'

// 把 异步请求的方法挂载到this.$post上
Vue.prototype.$post = asyncRequestMethod.post

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main',
             'pages/ControlsList/main'
            ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#495060',
      navigationBarTitleText: '单体测试助手',
      navigationBarTextStyle: '#fff'
    }
  }
}
