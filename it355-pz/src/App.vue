<template>
  <div id="app">
    <Header/>
          <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";
import Footer from "./components/footer/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
#app {
  padding-top: 90px;
}
</style>
