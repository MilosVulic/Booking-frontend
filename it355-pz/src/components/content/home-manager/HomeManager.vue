<template>
  <div>
    <div id="background-slika-home-manager"></div>
    <AddApartment/>
  </div>
</template>
 
 <script>
import AddApartment from "./adding-apartments/AddApartment.vue";

export default {
  name: "HomeManager",
  components: {
    AddApartment
  }
};
</script>
 
 <style scoped>
@import "homeManager.css";
</style>
 