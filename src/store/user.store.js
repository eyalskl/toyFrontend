import { userService } from '@/services/user.service.js';

export const userStore = {
    strict: true,
    state: {
        user: null,
    },
    getters: {
        user(state) {
            return state.user;
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user
        },
    },
    actions: {
        loadUser({ commit }) {
            return userService.query()
                .then(user => {
                    commit({ type: 'setUser', user })
                    return user
                })
        },
        saveUser({ commit }, { user }) {
            return userService.save(user)
                .then((savedUser) => {
                    commit({ type: 'setUser', user: savedUser })
                    return savedUser;
                })
        }
    }
}