require('./css/style.scss');

import _ from 'lodash';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const app = new Vue({
    data: {

    },
    methods: {

    },
    mounted: function () {

    },
    router: new VueRouter({
        routes: [
            { path: '/', component: require('./components/view-home') }
        ],
        linkActiveClass: 'is-danger'
    })
})

app.$mount('#app');
