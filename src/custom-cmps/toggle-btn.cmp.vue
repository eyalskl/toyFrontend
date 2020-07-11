<template>
  <label class="switch">
    <input type="checkbox" @click="toggle" :checked="isOn" />
    <div></div>
  </label>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return { isOn: this.value };
  },
  methods: {
    toggle() {
      this.isOn = !this.isOn;
      this.$emit("input", this.isOn);
    }
  }
};
</script>