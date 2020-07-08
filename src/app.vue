<template>
  <div class="main-app">
    <user-msg />
    <nice-popup />
    <nav-bar />
    <router-view />
  </div>
</template>

<script>

import navBar from '@/components/nav-bar.cmp.vue';
import userMsg from '@/components/user-msg.cmp.vue';
import nicePopup from '@/components/nice-popup.cmp.vue';

export default {
  name: 'main-app',
  components: {
    navBar,
    nicePopup,
    userMsg
  }
}

</script>
