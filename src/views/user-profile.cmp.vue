<template>
  <section v-if="userToEdit" class="user-profile toy-main">
    <div v-if="!editMode" class="user-details">
      <h1 :style="'color: ' + userToEdit.favColor">Welcome {{ userToEdit.name }}</h1>
      <p class="gender">Gender: {{ userToEdit.gender }}.</p>
      <p class="fav-color">
        Favorite Color:
        <span :style="'background-color: ' + userToEdit.favColor"> </span>
      </p>
      <p class="reminder-time">Youv'e set a reminder for: <span> {{ userToEdit.reminderTime }} </span> </p>
      <button
        class="edit-btn"
        @click.stop="toggleEdit"
        :style="'background-color: ' + userToEdit.favColor + '; color: ' + userToEdit.favColor">
        Edit Profile
      </button>
    </div>
    <div v-else class="user-edit flex column align-center">
      <button class="back-btn" title="Back" @click="toggleEdit"> <i class="fas fa-arrow-left"></i> </button>
      <h4> Update profile: </h4>
      <label> Name: <input type="text" v-model="userToEdit.name"> </label>
      <gender-picker :gender="userToEdit.gender" v-model="userToEdit.gender" />
      <color-picker v-model="userToEdit.favColor" />
      <time-picker v-model="userToEdit.reminderTime" />
      <button @click.stop="saveUser"
      class="save-btn"
      :style="'background-color: ' + userToEdit.favColor + '; color: ' + userToEdit.favColor">
      Save Changes
      </button>
    </div>
  </section>
</template>

<script>
import genderPicker from "@/custom-cmps/gender-picker.cmp.vue";
import colorPicker from "@/custom-cmps/color-picker.cmp.vue";
import timePicker from "@/custom-cmps/time-picker.cmp.vue";
import { eventBus, SHOW_MSG } from "@/services/event-bus.service.js";
import { userService } from '@/services/user.service.js';
const _ = require('lodash');

export default {
  name: "user-profile",
  data() {
    return {
      editMode: false,
      userToEdit: null
    };
  },
  methods: {
    toggleEdit() {
      this.editMode = !this.editMode;
    },
    saveUser() {
      this.$store
        .dispatch({ type: "saveUser", user: this.userToEdit })
        .then((user) => {
          eventBus.$emit(SHOW_MSG, {
            txt: `The user "${this.userToEdit.name}" was updated successfully!`,
            type: "success",
          });
          this.editMode = false;
        });
    },
  },
  created() {
    userService.query()
        .then(user => this.userToEdit = _.cloneDeep(user));
  },
  components: {
    genderPicker,
    colorPicker,
    timePicker,
  },
};
</script>

<style></style>
