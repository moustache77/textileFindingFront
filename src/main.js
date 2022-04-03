// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts';
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";
import scroll from 'vue-seamless-scroll'
// import bootstrap from 'bootstrap';
// import "node_modules/less";
// import 'element-ui/lib/default-chalk/index.css'
// import { Button, Select } from 'element-ui';

//引入路由
import router from '@/router'
new Vue({
  // el: '#app',
  render: h => h(App),
  //注册路由：底下的写法KV一致省略V【router小写的】
  router
}).$mount('#app')
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
Vue.use(scroll)

// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
createApp(App).use(Axios,VueAxios).mount('#app')

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
