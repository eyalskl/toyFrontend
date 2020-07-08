<template>
  <div class="color-picker flex column">
      <h2>Pick your favorite color</h2>
      <div class="colors-container flex wrap">
        <span :class="{picked : color === pickedColor}" v-for="(color, idx) in colors" :key="idx" @click="setColor(color)" :style="{backgroundColor : color}"> </span>
      </div>
  </div>
</template>

<script>

const colors = require('nice-color-palettes');
const _ = require('lodash')

export default {
    data() {
        return {
            colors: _.flatten(colors).slice(0,20),
            pickedColor: '69d2e7'
        }
    },
    methods: {
        setColor(color) {
            this.pickedColor = color
            this.$emit('input', color)
        }
    }
}
</script>

<style scoped>
    .color-picker h2 {
        text-transform: capitalize;
        margin-top: 0;
        text-decoration: underline;
    }
    .color-picker {
        background-color: #fff;
        border-radius: .33rem;
        border: 1px solid black;
        padding: 1rem;
        width: 18.5rem;
        margin: 1rem;
    }
    .color-picker span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.75rem;
        color: white;
        font-weight: bold;
        margin: 0.1rem;
        cursor: pointer;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
    }
    .picked::after {
        content: '✔';
    }
</style>