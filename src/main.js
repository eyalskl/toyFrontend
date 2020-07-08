import Vue from 'vue'
import app from './app.vue'
import router from './router'
import store from './store'
import '@/filters/filters.js'
import '@/assets/css/main.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyB6VnvgD2vcWlBcPoKJUvF1bAdMbdQo25M',
        libraries: 'places',
    },
})

// Add the required rule
extend('required', {
    ...required,
    message: 'This field is required'
});


new Vue({
    router,
    store,
    render: h => h(app)
}).$mount('#app')