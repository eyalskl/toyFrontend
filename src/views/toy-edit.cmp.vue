<template>
  <section v-if="toyToEdit" class="toy-edit toy-main">
    <button class="back-btn" title="Back" @click="$router.push('/toy')">
      <i class="fas fa-arrow-left"></i>
    </button>
    <h2>{{ (toyToEdit._id) ? 'Edit' : 'Add New' }} Toy</h2>
    <form class="flex column" v-if="toyToEdit" @submit.prevent="saveToy">
      <div class="input-container">
        <label>
          Name:
          <input
            ref="nameInput"
            type="text"
            v-model="toyToEdit.name"
            placeholder="Toy name..."
          />
        </label>
      </div>
      <div class="input-container">
        <label>
          Type:
          <input type="text" v-model="toyToEdit.type" placeholder="Insert type..." />
        </label>
      </div>
      <div class="input-container">
        <label>
          Price:
          <input type="number" v-model.number="toyToEdit.price" placeholder="Insert price..." />
        </label>
      </div>
      <div class="stock-container">
        <label class="flex align-center space-between">
          In stock?
          <toggle-btn v-model="toyToEdit.inStock" />
        </label>
      </div>
      <button> Save </button>
    </form>
  </section>
</template>

<script>
import toggleBtn from "@/custom-cmps/toggle-btn.cmp.vue";

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
  },
  components: {
    toggleBtn
  }
};
</script>

