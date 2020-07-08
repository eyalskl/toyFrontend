<template>
  <section class="dashboard flex column">
    <h1>DASHBOARD</h1>
    <div class="flex wrap">
      <div class="doughnut-container">
        <h2>Average Prices per toy type</h2>
        <doughnut
          v-if="toys"
          style="display: block; width:400px; height: 400px;"
          :labels="toysType"
          :data="avgPricesByType"
        />
      </div>
      <div class="bar-container">
        <h2>Toys per year</h2>
        <bar
          v-if="toys"
          style="display: block; width:400px; height: 400px;"
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
  components: {
    doughnut,
    bar
  },
  created() {
    this.$store.dispatch({ type: "loadToys" });
    console.log(this.toysAmountByYears);
  }
};
</script>

<style>
h1 {
  text-decoration: underline;
  font-size: 2rem;
  text-shadow: 2px 2px 2px #b4b4b4;
}
.dashboard {
  text-align: center;
  text-transform: capitalize;
}
.doughnut-container,
.bar-container {
  background-color: rgba(255, 255, 255, 0.808);
  width: 450px;
  margin: 1rem auto;
  border: 3px solid black;
  padding: 1rem;
  transition: 0.3s;
  border-radius: 1rem;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149);
}
</style>