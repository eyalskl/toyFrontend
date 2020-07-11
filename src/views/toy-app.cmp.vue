<template>
  <div class="toy-app toy-main flex column">
    <h2> Our Toys </h2>
    <toy-filter @filter="setFilter" />
    <toy-list v-if="!isLoading" :toys="toys" @toyRemoved="remove" />
    <img v-else src="https://i.pinimg.com/originals/58/4b/60/584b607f5c2ff075429dc0e7b8d142ef.gif" alt="Loading...">
    <button @click="togglePopup(true)" title="Open Chat" class="chat-btn"> <i class="far fa-comment-dots"></i> </button>
  </div>
</template>


<script>

import toyList from '@/components/toy-list.cmp.vue';
import toyFilter from '@/components/toy-filter.cmp.vue';
import { eventBus, SHOW_MSG } from '@/services/event-bus.service.js'
const _ = require('lodash');

export default {
  name: 'toy-app',
  computed: {
    toys() {
      return this.$store.getters.toys
    },
    isLoading() {
      return this.$store.getters.isLoading
    }
  },
  methods: {
    remove(id) {
       this.$store.dispatch({ type: 'removeToy', id })
                .then(() => {
                    eventBus.$emit(SHOW_MSG, { txt: 'Toy removed successfully!', type: 'danger' });
                })
    },
    setFilter(filterBy) {
        this.$store.commit({ type: 'setFilter', filterBy: _.cloneDeep(filterBy) })
        this.$store.dispatch({ type: 'loadToys' })
    },
    togglePopup(show) {
        this.$store.commit({ type: 'togglePopup', show})
    }
  },
  created() {
      this.$store.dispatch({ type: 'loadToys' })
      this.setFilter = _.debounce(this.setFilter, 500);
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.togglePopup(false)
      })
  },
  destroyed() {
      document.removeEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.togglePopup(false)
      })
      this.setFilter({
        name: "",
        inStock: "",
        type: "",
        sort: "",
      })
  },
  components: {
    toyList,
    toyFilter
  }
}

</script>