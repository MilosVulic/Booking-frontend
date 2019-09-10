<template>
  <div class="overall">
    <div id="background-slika-home"></div>
    <CustomerInfo/>
    <ReservableApartment/>
    <ReservedApartments/>
    <faq/>
  </div>
</template>

<script>
import CustomerInfo from "./customer-info/CustomerInfo.vue";
import Apartments from "../home/apartments/Apartments.vue";
import ReservableApartment from "./reservable-apartments/ReservableApartment.vue";
import Faq from "../home/faq/Faq.vue";
import ReservedApartments from "./reserved-apartments/ReservedApartments.vue";

export default {
  name: "HomeCustomer",
  components: {
    CustomerInfo,
    Apartments,
    ReservedApartments,
    Faq,
    ReservableApartment
  }
};
</script>

<style scoped>
@import "homeCustomer.css";
</style>
