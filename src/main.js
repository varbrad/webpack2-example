require('./css/style.scss')

// import _ from 'lodash'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const app = new Vue({
  data: {

  },
  methods: {

  },
  mounted: function () {

  },
  router: new VueRouter({
    routes: [
      { path: '/', component: require('./components/view-home') },
      { path: '/video', component: require('./components/view-video') },
      { path: '/form', component: require('./components/view-form') },
      { path: '/league', component: require('./components/view-league') },
      { path: '/flip', component: require('./components/view-flip') },
      { path: '/animation', component: require('./components/view-animation') },
      { path: '/maths', component: require('./components/view-maths') }
    ],
    linkActiveClass: 'is-warning'
  })
})

app.$mount('#app')
