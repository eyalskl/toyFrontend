<template>
  <div v-if="isShown" class="nice-popup">
      <div class="header">
        <slot name="header"> Welcome to the chat: </slot>
      </div>
      <slot name="main">
        <chat-app />   
      </slot>
      <slot name="footer"> </slot>
  </div>
</template>

<script>

import chatApp from '@/components/chat-app.cmp.vue'

export default {
    computed: {
        isShown() {
            return this.$store.getters.popupShown
        }
    },
    components: {
        chatApp
    }
}
</script>
