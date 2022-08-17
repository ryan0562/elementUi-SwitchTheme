<template>
  <div id="app">
    <nav>
      <el-button type="primary" @click="switchTheme">切换</el-button>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: "light",
    };
  },
  created() {
    // this.switchTheme();
  },
  methods: {
    switchTheme() {
      window._theme = window._theme === "light" ? "dark" : "light";
    },
  },
};
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-primary);
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
