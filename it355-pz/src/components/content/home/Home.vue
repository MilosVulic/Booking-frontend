<template>
  <div class="overall">
    <div id="background-slika-home">
      <Forms/>
    </div>
    <Apartments/>
    <Faq/>
  </div>
</template>

<script>
import Forms from "./forms/Forms.vue";
import Apartments from "./apartments/Apartments.vue";
import Faq from "./faq/Faq.vue";

export default {
  name: "Home",
  components: {
    Forms,
    Apartments,
    Faq
  }
};
</script>

<style scoped>
@import "home.css";
</style>

