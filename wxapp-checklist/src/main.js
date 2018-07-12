import Vue from 'vue'
import App from './App'
import asyncRequestMethod from './utils/asyncRequestMethod'
import uuid from  './utils/uuidUtil'


import mptoastRegistry from 'mptoast/registry'
mptoastRegistry(Vue);

Vue.config.productionTip = false;
App.mpType = 'app';

// 配置 一个页面初次加载多少条数据
Vue.prototype.$firstCount = 6;
// 配置 后端统一的请求路径
Vue.prototype.$server = 'http://localhost:3000/api/';
// 把 异步请求的方法挂载到this.$post上
Vue.prototype.$post = asyncRequestMethod.post;
//配置一个取得UUid的方法
Vue.prototype.$uuid = uuid.getUuid;

const app = new Vue(App);
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main',
             'pages/controlsList/main',
             'pages/ctrlCaseList/main'
            ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#495060',
      navigationBarTitleText: '单体测试助手',
      navigationBarTextStyle: '#fff'
    }
  }
}
