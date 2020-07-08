<template>
  <div class="gender-picker flex column">
      <h2>Gender</h2>
      <button :class="{selected : gender === 'male'}" @click="setGender('male')"> <i class="fas fa-mars"></i> Male </button>
      <button :class="{selected : gender === 'female'}" @click="setGender('female')"> <i class="fas fa-venus"></i> Female </button>
      <button :class="{selected : gender === 'unknown'}" @click="setGender('unknown')"> <i class="fas fa-question"></i> I'd rather not say </button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            gender: ''
        }
    },
    methods: {
        setGender(gender) {
            this.gender = gender
            this.$emit('input', gender)
        }
    }
}
</script>

<style scoped>
    h2 {
        text-decoration: underline;
    }
    .gender-picker {
        width: 12.5rem;
        text-align: left;
        margin: 1rem;
    }
    i {
        margin-inline-end: .5rem;
    }
    button {
        font-size: 1.1rem;
        text-align: left;
    }
    .selected {
        background-color: rgb(124, 124, 124);
        color: white;
    }

</style>