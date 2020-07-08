<template>
  <el-select @change="setFilter" v-model="value" clearable :placeholder="type">
    <el-option v-for="(item, idx) in options" :key="idx" :label="item" :value="item"></el-option>
  </el-select>
</template>

<script>
export default {
  props: ['type', 'options1'],
  data() {
    return {
      options: this.options1,
      value: ''
    };
  },
  methods: {
    setFilter() {
      this.$emit('input', this.value);
    }
  }
};
</script>