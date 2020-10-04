// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuePageDesigner from 'vue-page-designer'
import widgets from 'vue-page-designer-widgets'
import 'vue-page-designer/dist/vue-page-designer.css'

Vue.use(vuePageDesigner)
Vue.use(widgets)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
