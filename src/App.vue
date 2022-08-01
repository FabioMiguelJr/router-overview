<template>
  <h1>Router Overview</h1>

  <div class="div-router">
    <button @click="goToPage('/PageA')">Go To Page A</button>
    <button @click="goToPage('/PageB')">Go To Page B</button>
    <button @click="goToPage('/PageC')">Go To Page C</button>
  </div>

  <div class="div-router">
    <button @click="replacePage('/PageA')">Replace Page A</button>
    <button @click="replacePage('/PageB')">Replace Page B</button>
    <button @click="replacePage('/PageC')">Replace Page C</button>
  </div>

  <div class="div-router">
    <button @click="goToUser">Go To User</button>
  </div>

  <div class="div-router">
    <router-link to="/PageA">Page A</router-link>
    <router-link to="/PageB">Page B</router-link>
    <router-link to="/PageC">Page C</router-link>
    <router-link :to="{ name: 'user', params: { userId: 1 } }"
      >User</router-link
    >
  </div>

  <router-view class="div-router"></router-view>
</template>

<script>
export default {
  name: "App",
  methods: {
    goToPage(route) {
      this.$router.push(route);
    },
    replacePage(route) {
      this.$router.replace(route);
    },
    goToUser() {
      this.$router.push({ name: "user", params: { userId: 2 } });
    },
  },
};
</script>
<style>
.div-router {
  display: flex;
  justify-content: space-around;
}
</style>
