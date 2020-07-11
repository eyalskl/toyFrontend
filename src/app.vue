<template>
  <div class="main-app">
    <div class="screen" @click.stop="toggleMenu"></div>
    <user-msg />
    <nice-popup />
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import navBar from "@/components/nav-bar.cmp.vue";
import userMsg from "@/components/user-msg.cmp.vue";
import nicePopup from "@/components/nice-popup.cmp.vue";

export default {
  name: "main-app",
  methods: {
    toggleMenu() {
      document.body.classList.toggle("menu-open");
    }
  },
  components: {
    navBar,
    nicePopup,
    userMsg
  }
};
</script>
