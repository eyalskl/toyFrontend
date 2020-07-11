import Vue from 'vue'
import app from './app.vue'
import router from './router'
import store from './store'
import '@/filters/filters.js'
import '@/assets/styles/main.scss';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyB6VnvgD2vcWlBcPoKJUvF1bAdMbdQo25M',
        libraries: 'places',
    },
})

new Vue({
    router,
    store,
    render: h => h(app)
}).$mount('#app')