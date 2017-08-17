/**
 * Created by ww on 2017/8/17.
 */
import Vue from 'vue'
import App from '@/components/Hello'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)})
