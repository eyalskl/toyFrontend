<template>
  <section v-if="toys" class="dashboard toy-main flex column">
    <h1>DASHBOARD</h1>
    <div class="flex wrap">
      <div class="doughnut-container flex column align-center justify-center">
      <h2>Average prices per toy type</h2>
        <doughnut
          v-if="toys"
          style="display: block; width:350px; height: 350px;"
          :labels="toysType"
          :data="avgPricesByType"
        />
      </div>
      <div class="bar-container flex column align-center justify-center">
        <h2>Toys per year</h2>
        <bar
          v-if="toys"
          style="display: block; width:350px; height: 350px;"
          :labels="toysYears"
          :data="toysAmountByYears"
        />
      </div>
    </div>
  </section>
</template>

<script>
import doughnut from "@/custom-cmps/doughnut.cmp.vue";
import bar from "@/custom-cmps/bar.cmp.vue";

export default {
  computed: {
    toys() {
      return this.$store.getters.toys;
    },
    toysType() {
      return this.toys.reduce((acc, toy) => {
        if (!acc.includes(toy.type)) acc.push(toy.type);
        return acc;
      }, []);
    },
    avgPricesByType() {
      return this.toysType.map(type => {
        var count = 0;
        return this.toys.reduce((acc, toy, idx) => {
          if (toy.type === type) {
            acc += toy.price;
            count++;
          }
          if (idx === this.toys.length - 1) return acc / count;
          else return acc;
        }, 0);
      });
    },
    toysYears() {
      return this.toys.reduce((acc, toy) => {
        let toyYear =
          typeof toy.createdAt === "number"
            ? new Date(toy.createdAt).getFullYear()
            : toy.createdAt.slice(0, 4);
        toyYear = parseInt(toyYear);
        if (!acc.includes(toyYear)) acc.push(toyYear);
        return acc;
      }, []);
    },
    toysAmountByYears() {
      return this.toysYears.map(year => {
        return this.toys.reduce((acc, toy) => {
          let toyYear =
            typeof toy.createdAt === "number"
              ? new Date(toy.createdAt).getFullYear()
              : toy.createdAt.slice(0, 4);
          toyYear = parseInt(toyYear);
          if (toyYear === year) acc++;
          return acc;
        }, 0);
      });
    }
  },
  created() {
      this.$store.dispatch({ type: 'loadToys' })
  },
  components: {
    doughnut,
    bar
  }
};
</script>