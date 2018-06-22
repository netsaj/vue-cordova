require('bootstrap')
window.Vue = require('vue');

import 'babel-polyfill'

var VueResource = require('vue-resource');
Vue.use(VueResource);
import Vuex from 'vuex'
Vue.use(Vuex)
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import Vuesax from 'vuesax'
Vue.use(Vuesax)
import Puex from 'puex'
Vue.use(Puex)
import store from './store'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/es'
Vue.use(ElementUI, {locale})
import VueCordova from 'vue-cordova'
Vue.use(VueCordova)

import App from './components/App'

import router from './routes'

/// MAIN VUE APP
const app = new Vue({
    el: '#app',
    store,
    data: {
        url: ''
    },
    components: {App},
    created() {
        this.menu = 'dashboard';
    },
    methods: {
        hello(){

        }
    },
    mounted(){
        this.url = window.location;
        Vue.cordova.on('deviceready', () => {
            console.log('Cordova : device is ready !');
        });
    },
    router
});