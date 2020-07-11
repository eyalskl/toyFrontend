<template>
  <section class="google-map flex column align-center">
      <h1 class="map-header"><i class="fas fa-store"></i> Our Branches</h1>
    <div class="branch-controls">   
        <button @click="setTelAviv"> Tel-Aviv </button>
        <button @click="setParis"> Paris </button>
        <button @click="setBerlin"> Berlin </button>
    </div>
    <GmapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>

  </section>
</template>

<script>
export default {
  data() {
    return {
      markers: [
        { position: { lat: 32.085300, lng: 34.781769 } },
        { position: { lat: 48.856613, lng: 2.352222 } },
        { position: { lat: 52.520008, lng: 13.404954 } }
      ],
      center: { lat: 32.085300, lng: 34.781769 }
    };
  },
  methods: {
      setParis() {
          this.center = { lat: 48.856613, lng: 2.352222 }
      },
      setBerlin() {
          this.center = { lat: 52.520008, lng: 13.404954 }
      },
      setTelAviv() {
          this.center = { lat: 32.085300, lng: 34.781769 }
      },
  }
};
</script>

<style>
  .vue-map-container {
    width: 500px;
    height: 300px;
  }
.google-map h1.map-header {
  margin-block-start: 2rem;
  border-bottom: 1px solid #717171;
}
.google-map >*:nth-child(3) {
    border: 1px solid rgb(165, 165, 165);
    margin: 1rem auto;
}
.branch-controls {
  margin-block-start: 1rem;
}
.google-map button {
    font-family: 'Righteous', cursive;
    border: 1px solid rgb(185, 185, 185);
    border-radius: .33rem;
    margin: .25rem;
    font-size: 1.15rem;
    background-color: #00b8ec;
    color: white;
    transition: .3s;
}
.google-map button:hover {
    background-color: #0099c3;
}

@media (max-width: 620px) {
  .vue-map-container {
    width: 400px;
    height: 300px;
  }
}
@media (max-width: 475px) {
  .vue-map-container {
    width: 270px;
    height: 200px;
  }
}

</style>