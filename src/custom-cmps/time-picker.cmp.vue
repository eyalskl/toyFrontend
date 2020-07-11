<template>
  <div class="time-picker flex column">
    <h4>Set a Time Remainder</h4>
    <div class="flex align-center justify-center">
      <div class="hours-container">
        <button @click="changeHours(1)">
          <i class="fas fa-chevron-up"></i>
        </button>
        <div class="hours flex align-center justify-center"> {{ time.hours }} </div>
        <button @click="changeHours(-1)">
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
      <div class="seperator">:</div>
      <div class="minutes-container">
        <button @click="changeMinutes(1)">
          <i class="fas fa-chevron-up"></i>
        </button>
        <div class="minutes flex align-center justify-center"> {{ time.minutes }} </div>
        <button @click="changeMinutes(-1)">
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
      <div class="format-container">
        <button @click="toggleFormat">
          <i class="fas fa-chevron-up"></i>
        </button>
        <div class="format flex align-center justify-center"> {{ time.format }} </div>
        <button @click="toggleFormat">
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: {
        hours: 7,
        minutes: 55,
        format: 'AM'
      }
    };
  },
  methods: {
    setTime(time) {
      this.time = time;
      let hours = time.hours;
      if (time.format === 'PM' && hours < 12) hours += 12;
      if (hours < 10) hours = '0' + hours;
      let minutes = time.minutes;
      if (minutes < 10) minutes = '0' + minutes;
      const foramttedTime = hours + ':' + minutes + ' ' + time.format;
      this.$emit("input", foramttedTime);
    },
    toggleFormat() {
      if (this.time.format === 'AM') this.time.format = 'PM'
      else this.time.format = 'AM'
      this.setTime(this.time)
    },
    changeMinutes(diff) {
      if (this.time.minutes === 0 && diff < 0) return this.time.minutes = 59
      else if (this.time.minutes === 59 && diff > 0) return this.time.minutes = 0
      else this.time.minutes += diff
      this.setTime(this.time)

    },
    changeHours(diff) {
      if (this.time.hours === 0 && diff < 0) return this.time.hours = 12
      else if (this.time.hours === 12 && diff > 0) return this.time.hours = 0
      else this.time.hours += diff
      this.setTime(this.time)

    }
  }
};
</script>

<style scoped>
    .time-picker {
      text-align: center;
      border: 1px solid #717171;
      width: 15rem;
      padding: 0.5rem;
      background-color: #fff;
      margin: 1rem;
      font-size: 1.2rem;
    }
    button {
        background-color: transparent;
        border: none;
    }
</style>