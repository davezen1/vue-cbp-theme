<template>
  <div id="app">
    <Header appName="My App" />

    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="alert alert-info" role="alert">
  <button type="button" class="close">
  <span aria-hidden="true">&times;</span>
  <span class="sr-only">Close</span>
  </button>
  <i class="fa fa-info-circle" aria-hidden="true"></i> Press the <strong>'A'</strong> key to automatically assign a case.
</div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header,
    HelloWorld
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
