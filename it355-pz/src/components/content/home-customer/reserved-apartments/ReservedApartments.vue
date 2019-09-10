<template>
  <div class="row reserved-apartments">
    <div class="col-lg-1"></div>
    <div class="col-lg-10">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3>List of my reservations</h3>
        </div>
        <div class="panel-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th class="idtabela">#Id</th>
                  <th>Naziv apartmana</th>
                  <th>Tip apartmana</th>
                  <th>Datum pocetka</th>
                  <th>Datum isteka</th>
                  <th>Ukupna cena</th>
                  <th>Ponisti rezervaciju</th>
                </tr>
              </thead>
              <tbody v-if="flag1">
                <tr v-for="res in reservations" v-bind:key="res.id">
                  <td class="iddata">{{res.reservationId}}</td>
                  <td>{{res.apartment.nazivObjekta}}</td>
                  <td>{{res.apartment.apartmentType.nazivApartmentType}}</td>
                  <td>{{res.datumPocetka}}</td>
                  <td>{{res.datumIsteka}}</td>
                  <td>{{res.ukupnaCena}}</td>
                  <td>
                    <button
                      class="btn btn-danger"
                      @click="cancelReservation(res.reservationId)"
                    >Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-1"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ReservedApartments",

  data() {
    return {
      showEditor: false,
      text: "Edit",
      flag: true,

      reservations: {
        reservationId: "",
        apartment: {
          nazivObjekta: "",
          apartmentType: {
            nazivApartmentType: ""
          }
        },
        datumPocetka: "",
        datumIsteka: "",
        ukupnaCena: ""
      },

      flag1: false,
      ucitan: false,
      potvrda: false
    };
  },

  mounted() {
    if (this.ucitan == false) {
      axios
        .get(
          "http://localhost:8090/reservation/showAll/" +
            localStorage.getItem("customerId")
        )
        .then(response => {
          this.reservations = response.data;
          this.flag1 = true;
          console.log("ucitavanje");
          this.ucitan = true;
        });

      this.$root.$on("refreshData", value => {
        console.log("unutar refresha");
        (this.datumPocetka = ""), (this.datumIsteka = ""), this.refresh();

        console.log("evo ga refresh se poziva");
      });
    }
  },

  methods: {
    refresh: function() {
      axios
        .get(
          "http://localhost:8090/reservation/showAll/" +
            localStorage.getItem("customerId")
        )
        .then(response => {
          this.reservations = response.data;
          this.flag1 = true;
        });
    },

    cancelReservation: function(idReservacije) {
      axios
        .delete("http://localhost:8090/reservation/delete/" + idReservacije)
        .then(response => {
          this.refresh();
        });
    }
  }
};
</script>

<style scoped>
@import "reservedApartments.css";
</style>
