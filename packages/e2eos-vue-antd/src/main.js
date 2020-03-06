import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';

import CommonComponents from './components'

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(CommonComponents);

new Vue({
  render: h => h(App),
}).$mount('#app')
