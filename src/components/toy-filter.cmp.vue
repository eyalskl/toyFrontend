<template>
  <div class="toy-filter flex">
    <div class="search-bar">
      <input @input="setFilter" v-model="filterBy.name" type="search" placeholder="Search toys" />
    </div>
    <div class="in-stock-filter">
      <button @click="setInStockFilter('')" :class="allSelected">All</button>
      <button @click="setInStockFilter('true')" :class="inStockSelected">In Stock</button>
      <button @click="setInStockFilter('false')" :class="offStockSelected">Out of Stock</button>
    </div>
    <select @change="setFilter" v-model="filterBy.type">
      <option value>All</option>
      <option value="educational">Educational</option>
      <option value="children">Children</option>
      <option value="funny">Funny</option>
      <option value="adult">Adult</option>
    </select>
    <select @change="setFilter" v-model="filterBy.sort">
      <option value>Sort By</option>
      <option value="name">Name</option>
      <option value="price">Price</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "toy-filter",
  data() {
    return {
      filterBy: {
        name: "",
        inStock: "",
        type: "",
        sort: ""
      }
    };
  },
  computed: {
    allSelected() {
      if (this.filterBy.inStock === "") return "selected";
    },
    offStockSelected() {
      if (this.filterBy.inStock === "false") return "selected";
    },
    inStockSelected() {
      if (this.filterBy.inStock === "true") return "selected";
    }
  },
  methods: {
    setInStockFilter(inStock) {
      this.filterBy.inStock = inStock;
      this.setFilter();
    },
    setFilter() {
      this.$emit("filter", this.filterBy);
    }
  }
};
</script>

<style>
</style>