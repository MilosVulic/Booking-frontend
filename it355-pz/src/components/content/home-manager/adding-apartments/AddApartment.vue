<template>
  <div id="add-apartment">
    <div class="container">
      <div id="add-apartment-row" class="row justify-content-center align-items-center">
        <div id="add-apartment-column" class="col-md-12">
          <div id="add-apartment-box" class="col-md-12">
            <form id="add-apartment-form" class="form">
              <h3 class="text-center text">Create new apartment</h3>

              <div id="add-apartment-row" class="row justify-content-center align-items-center">
                <div id="add-apartment-column" class="col-md-4">
                  <div class="form-group">
                    <label for="country" class="text">Country:</label>
                    <br>
                    <input type="text" name="country" id="country" class="form-control" required v-model="address.country">
                  </div>
                </div>
                <div id="add-apartment-column" class="col-md-4">
                  <div class="form-group">
                    <label for="city" class="text">City:</label>
                    <br>
                    <input type="text" name="city" id="city" class="form-control" required v-model="address.city">
                  </div>
                </div>
                <div id="add-apartment-column" class="col-md-4">
                  <div class="form-group">
                    <label for="street_name" class="text">Street address:</label>
                    <br>
                    <input type="text" name="street_name" id="street_name" class="form-control" required v-model="address.streetAddress">
                  </div>
                </div>
              </div>

              <div id="add-apartment-row" class="row justify-content-center align-items-center">
                <div id="add-apartment-column" class="col-md-3">
                  <div class="form-group">
                    <label for="apart_type" class="text">Apartment type:</label>
                    <br>
                    <select class="form-control" required v-model="apartmentType1.nazivApartmentType">
                      <option
                        v-for="option in apartmentType"
                        v-bind:key="option.idApartmentType"
                      >{{ option.nazivApartmentType }}</option>
                    </select>
                  </div>
                </div>
                <div id="add-apartment-column" class="col-md-3">
                  <div class="form-group">
                    <label for="naziv_objekta" class="text">Naziv objekta:</label>
                    <br>
                    <input type="text" name="naziv_objekta" id="naziv_objekta" class="form-control" 
                    required v-model="nazivObjekta">
                  </div>
                </div>
                <div id="add-apartment-column" class="col-md-3">
                  <div class="form-group">
                    <label for="number_of_beds" class="text">Number of beds:</label>
                    <br>
                    <select class="form-control" required v-model="apartmentBeds.naziv">
                      <option
                        v-for="option in numberBeds"
                        v-bind:key="option.idApartmentBeds"
                      >{{ option.naziv }}</option>
                    </select>
                  </div>
                </div>
                <div id="add-apartment-column" class="col-md-3">
                  <div class="form-group">
                    <label for="price_per_night" class="text">Price per night:</label>
                    <br>
                    <input
                      type="text"
                      name="price_per_night"
                      id="price_per_night"
                      class="form-control"
                      required
                        v-model="pricePerNight"
                    >
                  </div>
                </div>
              </div>
              <div id="add-apartment-row" class="row justify-content-center align-items-center">
                <div id="add-apartment-column" class="col-md-12">
                  <div class="form-group">
                    <br>
                    <button type="button" class="btn btn-info btn-md dugme" @click="insertApartment">
                      <span>Submit</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddApartment",

  data() {
    return {
      numberBeds: null,
      apartmentType: null,
      address: {
        country: "",
        city: "",
        streetAddress: ""
      },
      nazivObjekta: "",
      pricePerNight: "",
      apartmentBeds: {
        naziv: ""
      },
      apartmentType1: {
        nazivApartmentType: ""
      }
    };
  },

  mounted() {
    axios
      .get("http://localhost:8090/apartmentBeds/showAll")
      .then(response => (this.numberBeds = response.data));

    axios
      .get("http://localhost:8090/apartmentTypes/showAll")
      .then(response => (this.apartmentType = response.data));
  },

  methods: {
    insertApartment: function() {
      console.log(localStorage.getItem("token"));
      console.log(localStorage.getItem("rola"));
      console.log(localStorage.getItem("username"));
      var apartmentRequest = {
        address: this.address,
        managerId: localStorage.getItem("managerId"),
        apartmentBeds: this.apartmentBeds,
        apartmentType: this.apartmentType1,
        nazivObjekta: this.nazivObjekta,
        pricePerNight: this.pricePerNight
      };

      axios
        .post("http://localhost:8090/apartment/add", apartmentRequest)
        .then(response => {});
    }
  }
};
</script>


<style scoped>
@import "addApartment.css";
</style>
