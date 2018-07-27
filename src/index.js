import './css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

import routes from './routes'
import stores from '@stores'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Vuetify, {
  iconfont: 'fa',
  theme: {
    primary: colors.lime.darken1
  }
})

const router = new VueRouter({ routes, mode: 'history' })
const store = new Vuex.Store(stores)

const app = new Vue({ router, store })
app.$mount('#main-app')
