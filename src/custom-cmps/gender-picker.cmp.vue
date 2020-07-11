<template>
  <div class="gender-picker flex column">
      <button :class="{selected : genderPicked === 'male'}" @click="setGender('male')"> <i class="fas fa-mars"></i> Male </button>
      <button :class="{selected : genderPicked === 'female'}" @click="setGender('female')"> <i class="fas fa-venus"></i> Female </button>
      <button :class="{selected : genderPicked === 'unknown'}" @click="setGender('unknown')"> <i class="fas fa-question"></i> I'd rather not say </button>
  </div>
</template>

<script>
export default {
    props: ['gender'],
    data() {
        return {
            genderPicked: this.gender,
        }
    },
    methods: {
        setGender(gender) {
            this.genderPicked = gender
            this.$emit('input', gender)
        }
    }
}
</script>

<style scoped>
    .gender-picker {
        width: 15rem;
        text-align: left;
        margin: 1rem;
        border: 1px solid #717171;
    }
    i {
        margin-inline-end: .5rem;
    }
    button {
        font-size: 1.1rem;
        text-align: left;
        border: none;
    }
    .selected {
        background-color: rgb(124, 124, 124);
        color: white;
    }

</style>