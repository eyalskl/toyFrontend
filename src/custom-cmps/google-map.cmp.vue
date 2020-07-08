<template>
  <section class="google-map">
      <h1>Our Branches</h1>
    <GmapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
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
    <div class="branch-controls">   
        <button @click="setTelAviv"> Tel-Aviv </button>
        <button @click="setParis"> Paris </button>
        <button @click="setBerlin"> Berlin </button>
    </div>
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
.google-map >*:nth-child(2) {
    border: 1px solid rgb(165, 165, 165);
    margin: 1rem auto;
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

</style>