import Vue from 'vue'
const moment = require('moment')

Vue.filter('formatNum', (val) => {
    return Number(val).toLocaleString()
})
Vue.filter('relativeTime', (val) => {
    return moment(val).fromNow()
})