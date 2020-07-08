<template>
  <div class="about-us">
    <div class="details">
      <h1>About the "misterToy. Company"</h1>
      <p>We were founded in 1729, by Albert Teddybear in West Bearginia.</p>
      <p>We currently have 3 branches: Tel Aviv, Paris and Berlin.</p>
      <p>Proud owners of 20 toys...</p>
      <h3>Enjoy and play around!</h3>
    </div>
    <google-map />
  </div>
</template>

<script>

import googleMap from '@/custom-cmps/google-map.cmp.vue';

export default {
  components: {
    googleMap
  }
}
</script>

<style scoped>
.about-us {
  text-align: center;
}
</style>
