<template>
  <nav class="flex nav-bar toy-all justify-center">
    <div class="nav-bar flex align-center space-between">
      <div class="logo flex align-center">
        <img
          @click="$router.push('/')"
          src="../assets/logo.png"
          alt="toy logo"
          title="Don't touch this..."
        />
        mister
        <span>Toy.</span>
      </div>
      <div class="main-nav flex">
        <router-link title="Home Page" to="/">
          <i class="fas fa-home"></i>
        </router-link>
        <router-link title="Toys" to="/toy">Toys</router-link>
        <router-link title="Dasboard" to="/dashboard">
          <i class="fas fa-chart-line"></i>
        </router-link>
        <router-link title="Profile" to="/user">
          <i class="fas fa-user"></i>
        </router-link>
        <router-link title="About" to="/about">
          <i class="fas fa-info"></i>
        </router-link>
      </div>
      <button class="btn-menu" @click="toggleMenu">☰</button>
    </div>
  </nav>
</template>


<script>
export default {
  methods: {
    toggleMenu() {
      document.body.classList.toggle("menu-open");
    }
  }
};
</script>