import Vue from 'vue'
import Vuex from 'vuex'
import { toyStore } from './toy.store.js'
import { userStore } from './user.store.js'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        popupShown: false,
    },
    getters: {
        popupShown(state) {
            return state.popupShown
        }
    },
    mutations: {
        togglePopup(state, { show }) {
            state.popupShown = show
        }
    },
    actions: {},
    modules: {
        toyStore,
        userStore
    }
})