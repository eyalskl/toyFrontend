<template>
  <nav class="nav-bar flex align-center space-between">
    <div class="logo flex align-center">
        <img @click="$router.push('/')" src="../assets/logo.png" alt="toy logo"> mister<span>Toy.</span>
    </div>
    <div class="main-nav">
      <router-link to="/"> Home </router-link>
      <router-link to="/toy"> Toys </router-link>
      <router-link to="/toy/edit"> Add Toy </router-link>
      <router-link to="/user"> Profile </router-link>
      <router-link to="/about"> About </router-link>
    </div>
  </nav>
</template>

