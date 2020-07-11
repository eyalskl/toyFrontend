<template>
  <div v-if="toy" class="toy-details toy-main">
    <button class="back-btn" title="Back" @click="$router.back()">
      <i class="fas fa-arrow-left"></i>
    </button>
    <h1 class="toy-details-header">{{ toy.name }} - ${{ toy.price }}</h1>
    <div class="toy-details-tag flex justify-center align-center">
      <p class="toy-details-type">{{toy.type}}</p>
      <h5 class="toy-details-stock" :class="inStock">{{ (toy.inStock) ? 'In Stock' : 'Out of Stock' }}</h5>
    </div>
    <img :src="`https://robohash.org/${toy._id}.png`">
    <p class="toy-details-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex assumenda amet similique culpa nam! Quae sed quam dolor libero, corporis nesciunt nemo ut, aspernatur architecto veritatis, modi delectus dignissimos corrupti doloremque quis ipsum a vitae? Facere facilis quasi natus itaque explicabo ad, quisquam nam non labore hic voluptas iure rerum magni, maiores amet quos sunt dolor dolore dignissimos placeat reprehenderit. Soluta nam eaque necessitatibus similique deleniti iste aspernatur earum recusandae quos odit. Commodi, esse aspernatur! Dolorum rerum odit at? Commodi voluptas reprehenderit sapiente voluptatem! Ratione non exercitationem ut quia iure, et minima aliquam ducimus reprehenderit magni corrupti? Tenetur, doloremque cumque? </p>
    <div class="toy-details-controls">
      <button @click="remove(toy._id)"> Delete Toy </button>
      <button @click="$router.push('/toy/edit/' + toy._id)"> Edit Toy </button>
    </div>
  </div>
</template>


<script>
import { toyService } from "@/services/toy.service.js";
import { eventBus, SHOW_MSG } from '@/services/event-bus.service.js'

export default {
  name: "toy-details",
  data() {
    return {
      toy: null
    };
  },
  computed: {
    inStock() {
      return this.toy.inStock ? "instock" : "offstock";
    }
  },
  methods: {
    loadToy() {
      const toyId = this.$route.params.id;
      toyService.getById(toyId).then(toy => {
        this.toy = toy;
      });
    },
    remove(id) {
       this.$store.dispatch({ type: 'removeToy', id })
                .then(() => {
                    eventBus.$emit(SHOW_MSG, { txt: 'Toy removed successfully!', type: 'danger' });
                    this.$router.push('/toy')
                })
    }
  },
  created() {
    this.loadToy();
  }
};
</script>