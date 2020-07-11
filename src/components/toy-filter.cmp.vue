<template>
  <div class="toy-filter flex column">
    <div class="search-bar">
      <button @click="setFilter" > <i class="fas fa-search"></i> </button>
      <input
        @input="setFilter"
        v-model="filterBy.name"
        type="search"
        placeholder="Search toys"
      />
    </div>
    <div class="in-stock-filter">
      <button @click="setInStockFilter('')" :class="allSelected">All</button>
      <button @click="setInStockFilter('true')" :class="inStockSelected">
        In Stock
      </button>
      <button @click="setInStockFilter('false')" :class="offStockSelected">
        Out of Stock
      </button>
    </div>
    <div class="select-boxes flex">

    <select-box
      @input="setFilter"
      type="Filter by type"
      :options1="toysType"
      v-model="filterBy.type"
    />
    <select-box
      @input="setFilter"
      type="Sort by"
      :options1="sort"
      v-model="filterBy.sort"
    />
    </div>
  </div>
</template>

<script>
import selectBox from "@/custom-cmps/select-box.cmp.vue";

export default {
  name: 'toy-filter',
  data() {
    return {
      filterBy: {
        name: '',
        inStock: '',
        type: '',
        sort: '',
      },
      sort: ['Name', 'Price', 'Recently Added'],
      toysType: ['Adult', 'Programming', 'Funny', 'Sleepy', 'Educational', 'Teenagers'],
    };
  },
  computed: {
    allSelected() {
      if (this.filterBy.inStock === '') return 'selected';
    },
    offStockSelected() {
      if (this.filterBy.inStock === 'false') return 'selected';
    },
    inStockSelected() {
      if (this.filterBy.inStock === 'true') return 'selected';
    },
    toys() {
      return this.$store.getters.toys;
    },
    // toysType() {
    //   return this.toys.reduce((acc, toy) => {
    //     if (!acc.includes(toy.type)) acc.push(toy.type);
    //     return acc;
    //   }, []);
    // },
  },
  methods: {
    setInStockFilter(inStock) {
      this.filterBy.inStock = inStock;
      this.setFilter();
    },
    setFilter() {
      this.$emit("filter", this.filterBy);
    },
  },
  components: {
    selectBox,
  },
};
</script>