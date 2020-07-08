import { toyService } from '@/services/toy.service.js';

export const toyStore = {
    strict: true,
    state: {
        isLoading: false,
        toys: [],
        filterBy: {
            name: '',
            inStock: '',
            type: '',
            sort: ''
        }
    },
    getters: {
        toys(state) {
            return state.toys;
        },
        isLoading(state) {
            return state.isLoading;
        },
    },
    mutations: {
        setIsLoading(state, { isLoading }) {
            state.isLoading = isLoading
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy
        },
        setToys(state, { toys }) {
            state.toys = toys
        },
        removeToy(state, { id }) {
            const toyIdx = state.toys.findIndex(toy => toy._id === id);
            state.toys.splice(toyIdx, 1)
        },
        addToy(state, { savedToy }) {
            state.toys.unshift(savedToy)
        },
        updateToy(state, { savedToy }) {
            const idx = state.toys.findIndex(toy => toy._id === savedToy._id)
            state.toys.splice(idx, 1, savedToy)
        }
    },
    actions: {
        loadToys({ commit, state }) {
            commit({ type: 'setIsLoading', isLoading: true })
            return toyService.query(state.filterBy)
                .then(toys => {
                    commit({ type: 'setToys', toys })
                    commit({ type: 'setIsLoading', isLoading: false })
                    return toys
                })
        },
        removeToy({ commit }, { id }) {
            return toyService.remove(id)
                .then(() => {
                    commit({ type: 'removeToy', id })
                })
        },
        saveToy({ commit }, { toy }) {
            const type = (toy._id) ? 'updateToy' : 'addToy';
            if (!toy._id) toy.createdAt = Date.now();
            return toyService.save(toy)
                .then((savedToy) => {
                    commit({ type, savedToy })
                    return savedToy;
                })
        }
    }
}