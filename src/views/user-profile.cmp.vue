<template>
  <section class="user-profile">
      <h2 v-if="user"> Welcome {{ user }} </h2>
      <gender-picker v-model="userToEdit.gender" />
      <color-picker v-model="userToEdit.favColor" />
      <time-picker v-model="userToEdit.reminderTime" />
  </section>
</template>

<script>

import genderPicker from '@/custom-cmps/gender-picker.cmp.vue'
import colorPicker from '@/custom-cmps/color-picker.cmp.vue'
import timePicker from '@/custom-cmps/time-picker.cmp.vue'

export default {
    name: 'user-profile',
    data() {
        return {
            userToEdit: {
                favColor: '',
                gender: '',
                reminderTime: ''
            }
        }
    },
    computed: {
        user() {
            return this.$store.getters.user
        }
    },
    created() {
      this.$store.dispatch({ type: 'loadUser' })
    },
    components: {
        genderPicker,
        colorPicker,
        timePicker
    }
}
</script>

<style>

</style>