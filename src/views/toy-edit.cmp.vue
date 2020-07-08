<template>
  <section class="toy-edit">
    <button class="back-btn" title="Back" @click="$router.push('/toy')">
      <i class="fas fa-arrow-left"></i>
    </button>
    <h2>{{ (toyToEdit._id) ? 'Edit' : 'Add New' }} Toy -</h2>
    <form class="flex column" v-if="toyToEdit" @submit.prevent="saveToy">
      <label>
        Name:
        <input type="text" v-model="toyToEdit.name" placeholder="Toy name..." />
      </label>
      <label>
        Type:
        <input type="text" v-model="toyToEdit.type" placeholder="Insert type..." />
      </label>
      <label>
        Price:
        <input type="number" v-model="toyToEdit.price" placeholder="Insert price..." />
      </label>
      <label>
        In stock?
        <input type="checkbox" v-model="toyToEdit.inStock" />
      </label>
      <button>Save</button>
    </form>
  </section>
</template>

<script>
import { toyService } from "@/services/toy.service.js";
import { eventBus, SHOW_MSG } from "@/services/event-bus.service.js";
const _ = require("lodash");

export default {
  name: "toy-edit",
  data() {
    return {
      toyToEdit: null
    };
  },
  methods: {
    loadToy() {
      const toyId = this.$route.params.id;
      if (toyId) {
        toyService.getById(toyId).then(toy => {
          this.toyToEdit = _.cloneDeep(toy);
        });
      } else this.toyToEdit = toyService.getEmptyToy();
    },
    saveToy() {
      this.$store
        .dispatch({ type: "saveToy", toy: this.toyToEdit })
        .then(toy => {
          eventBus.$emit(SHOW_MSG, {
            txt: `The toy "${this.toyToEdit.name}" was updated successfully!`,
            type: "success"
          });
          this.$router.push("/toy");
        });
    }
  },
  watch: {
    "$route.params.id"() {
      this.loadToy();
    }
  },
  created() {
    this.loadToy();
  }
};
</script>

