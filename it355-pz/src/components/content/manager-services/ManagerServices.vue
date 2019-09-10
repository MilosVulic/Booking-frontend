<template>
  <div>
    <div id="background-slika-home-manager"></div>
    <ManagerInfo/>
    <ManagersApartments/>
  </div>
</template>

<script>
import ManagerInfo from "./manager-info/ManagerInfo.vue";
import ManagersApartments from "./managers-apartments/ManagersApartments.vue";

export default {
  name: "ManagerServices",
  components: {
    ManagerInfo,
    ManagersApartments
  }
};
</script>

<style scoped>
</style>
