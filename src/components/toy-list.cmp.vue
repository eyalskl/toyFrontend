<template>
  <div class="toy-list flex wrap justify-center">
      <div title="Add New Toy" @click="$router.push('/toy/edit')" class="toy-container toy-add flex align-center justify-center"> <i class="fas fa-plus"></i> </div>
      <div class="toy-container" @click.stop="$router.push('/toy/details/' + toy._id)" v-for="toy in toys" :key="toy._id">
          <button title="Delete Toy" @click.stop="remove(toy._id)"> <i class="fas fa-trash"></i> </button>
          <button title="Edit Toy" @click.stop="$router.push('/toy/edit/' + toy._id)"> <i class="fas fa-edit"></i> </button>
          <toy-preview :toy="toy" />
      </div>
  </div>
</template>


<script>

import toyPreview from '@/components/toy-preview.cmp.vue';

export default {
  name: 'toy-list',
  props: {
      toys: {
          type: Array,
          required: true
      }
  },
  methods: {
      remove(id) {
          this.$emit('toyRemoved', id);
      }
  },
  components: {
    toyPreview
  }
}

</script>
