<template>
  <div class="toy-preview flex column align-center">
      <h3 class="toy-preview-header"> {{ toy.name }} - ${{ toy.price }} </h3>
      <p class="toy-preview-type"> {{toy.type}} </p>
      <h5 class="toy-preview-stock" :class="inStock">  {{ (toy.inStock) ? 'In Stock' : 'Out of Stock' }} </h5>
      <h5 class="toy-preview-created"> Added {{ toy.createdAt | relativeTime }} </h5>
  </div>
</template>


<script>
export default {
  name: "toy-preview",
  props: {
    toy: {
      type: Object,
      required: true
    }
  },
  computed: {
      inStock() {
          return (this.toy.inStock) ? 'instock' : 'offstock';
      }
  },
  methods: {

  }
};
</script>