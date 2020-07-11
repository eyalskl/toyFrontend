<template>
  <div class="about-us toy-main flex column align-center">
    <div class="details flex column align-center">
      <h1><i class="fas fa-info-circle"></i> About the - misterToy Company -</h1>
      <p>We were founded in 1729, by Albert Teddybear in West Bearginia. <br>
      We currently have 3 branches: Tel Aviv, Paris and Berlin. <br>
      Proud owners of 20 toys...</p>
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
