<template>
  <div>
    <h3 class="text-center naslov">Search for accomodation</h3>
    <form id="form" class="form">
      <div class="row pocetak">
        <div class="col-lg-2"></div>
        <div class="col-lg-3">
          <div class="form-group">
            <label for="datumPocetka" class="text-info">Datum pocetka:</label>
            <input
              type="date"
              id="datumPocetka"
              class="form-control"
              placeholder="Datum pocetka"
              required="required"
              v-model="resDates.datumPocetka"
            >
          </div>
        </div>
        <div class="col-lg-3">
          <div class="form-group">
            <label for="datumIsteka" class="text-info">Datum isteka:</label>
            <input
              type="date"
              id="datumIsteka"
              class="form-control"
              placeholder="Datum isteka"
              required="required"
              v-model="resDates.datumIsteka"
            >
          </div>
        </div>
        <div id="login-column" class="col-lg-2">
          <div class="form-group">
            <br>
            <input type="submit" class="btn btn-info btn-md dugme">
          </div>
        </div>
        <div class="col-lg-3"></div>
      </div>
    </form>
    <div class="row">
      <div class="col-lg-1"></div>
      <div class="col-lg-10">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="lista-hotela">List of available hotels</h3>
          </div>
          <div class="panel-body">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th class="idtabela">#Id</th>
                    <th>Apartment name</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Street address</th>
                    <th>Number of beds</th>
                    <th>Apartment type</th>
                    <th>Manager username</th>
                    <th class="idtabela">id-person</th>
                    <th>Price per night</th>
                    <th>Reserve</th>
                  </tr>
                </thead>
                <tbody v-if="flag">
                  <tr v-for="apartment in apartments" :key="apartment.id">
                    <td class="iddata">{{apartment.apartmentId}}</td>
                    <td>{{apartment.nazivObjekta}}</td>
                    <td>{{apartment.address.country}}</td>
                    <td>{{apartment.address.city}}</td>
                    <td>{{apartment.address.streetAddress}}</td>
                    <td>{{apartment.apartmentBeds.naziv}}</td>
                    <td>{{apartment.apartmentType.nazivApartmentType}}</td>
                    <td>{{apartment.manager.username}}</td>
                    <td class="iddata">{{apartment.manager.managerId}}</td>
                    <td>{{apartment.pricePerNight}}</td>
                    <td>
                      <button
                        class="btn btn-success"
                        @click="reserve(apartment.apartmentId)"
                      >Reserve</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="error" v-if="showFail">
                <p>{{failDatumi}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-1"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ReservableApartment",

  data() {
    return {
      apartments: {
        address: {
          city: "",
          country: "",
          idAddress: "",
          streetAddress: ""
        },

        apartmentBeds: {
          naziv: ""
        },

        apartmentId: "",

        apartmentType: {
          nazivApartmentType: ""
        },

        manager: {
          username: "",
          managerId: ""
        },

        nazivObjekta: "",
        pricePerNight: ""
      },

      flag: false,

      resDates: {
        datumPocetka: "",
        datumIsteka: ""
      },

      failDatumi: "",
      showFail: false
    };
  },

  mounted() {
    axios.get("http://localhost:8090/apartment/showAll").then(response => {
      this.apartments = response.data;
      this.flag = true;
    });
  },

  methods: {
    reserve: function(apId) {
      var reservationRequest = {
        apartmentId: apId,
        customerId: localStorage.getItem("customerId"),
        datumPocetka: this.resDates.datumPocetka,
        datumIsteka: this.resDates.datumIsteka
      };

      console.log("evo " + apId);
      axios
        .post("http://localhost:8090/reservation/add", reservationRequest)
        .then(response => {
          this.showFail = true;
          this.failDatumi = response.data.odgovor;
          this.$root.$emit("refreshData", true);
        });
    }
  }
};
</script>

<style scoped>
@import "reservableApartment.css";
</style>
