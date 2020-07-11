<template>
  <div class="chat-app">
    <button class="close-chat" @click="togglePopup(false)"> <i class="fas fa-times"></i> </button>
    <div class="chat-container">
    <p v-show="chats.length > 0" v-for="(chat,idx) in chats" :key="idx"> {{ chat.txt }} <span> {{ chat.createdAt | relativeTime }} </span> </p>
    <p v-show="!chats.length"> Support: Hello my name is Muki, How can I help you today? </p>
    </div>
    <div class="send">
        <input ref="startChat" @keydown.enter="addChat" v-model="chat.txt" type="text" placeholder="What can we do for you..." />
        <button @click="addChat"> <i class="fas fa-paper-plane"></i> </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chats: [],
      chat: {
          txt: '',
          createdAt: ''
      }
    };
  },
  methods: {
    addChat() {
      if (!this.chat) return;
      this.chat.createdAt = Date.now()
      this.chat.txt = 'Me: ' + this.chat.txt
      this.chats.unshift(this.chat);
      this.chat = {
          txt: '',
          createdAt: ''
      }
      setTimeout(() => {
          this.chats.unshift({txt :'Support: Sure thing honey.', createdAt: Date.now()})
      }, 1000);
    },
    togglePopup(show) {
        this.$store.commit({ type: 'togglePopup', show})
    }
  },
  mounted() {
      this.$refs.startChat.focus();
  }
};
</script>