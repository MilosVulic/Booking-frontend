<template>
  <div>
    <div id="customer-info-edit">
      <div class="container">
        <div id="customer-info-edit-row" class="row justify-content-center align-items-center">
          <div id="customer-info-edit-column" class="col-md-12">
            <div id="customer-info-edit-box" class="col-md-12">
              <form id="customer-info-edit-form" class="form">
                <h3 class="text-center text">Edit forma</h3>

                <div
                  id="customer-info-edit-row"
                  class="row justify-content-center align-items-center"
                >
                  <div id="customer-info-edit-column" class="col-md-4">
                    <div class="form-group">
                      <label for="username" class="text">Username:</label>
                      <br>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        class="form-control"
                        required
                        v-model="customer.username"
                      >
                    </div>
                  </div>
                  <div id="customer-info-edit-column" class="col-md-4">
                    <div class="form-group">
                      <label for="password" class="text">Password:</label>
                      <br>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        class="form-control"
                        required
                        v-model="customer.password"
                      >
                    </div>
                  </div>
                  <div id="customer-info-edit-column" class="col-md-4">
                    <div class="form-group">
                      <label for="repPassword" class="text">Repeat Password:</label>
                      <br>
                      <input
                        type="password"
                        name="repPassword"
                        id="repPassword"
                        class="form-control"
                        v-model="repPassword"
                      >
                    </div>
                  </div>
                </div>

                <div
                  id="customer-info-edit-row"
                  class="row justify-content-center align-items-center"
                >
                  <div id="customer-info-edit-column" class="col-md-4">
                    <div class="form-group">
                      <label for="firstName" class="text">First name:</label>
                      <br>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        class="form-control"
                        required
                        v-model="customer.firstName"
                      >
                    </div>
                  </div>
                  <div id="customer-info-edit-column" class="col-md-4">
                    <div class="form-group">
                      <label for="phoneNumbe" class="text">Phone Number:</label>
                      <br>
                      <input
                        type="text"
                        name="phoneNumbe"
                        id="phoneNumbe"
                        class="form-control"
                        required
                        v-model="customer.phoneNumber"
                      >
                    </div>
                  </div>
                  <div id="customer-info-edit-column" class="col-md-4">
                    <div class="form-group">
                      <label for="lastName" class="text">Last name:</label>
                      <br>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        class="form-control"
                        required
                        v-model="customer.lastName"
                      >
                    </div>
                  </div>
                </div>

                <div
                  id="customer-info-edit-row"
                  class="row justify-content-center align-items-center"
                >
                  <div id="customer-info-edit-column" class="col-md-6">
                    <div class="form-group">
                      <label for="email" class="text">Email:</label>
                      <br>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        class="form-control"
                        placeholder="something@gmail.com"
                        required
                        v-model="customer.email"
                      >
                    </div>
                  </div>
                  <div id="customer-info-edit-column" class="col-md-6">
                    <div class="form-group">
                      <br>
                      <button class="btn btn-info" @click="editCustomer">Edit customer</button>
                    </div>
                  </div>
                </div>
              </form>
              <div class="error">
                <p>{{error}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CustomerInfoEdit",

  data() {
    return {
      showEditor: false,
      text: "Edit",
      flag: true,
      customer: {
        customerId: "",
        email: "",
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        phoneNumber: ""
      },
      error: "",
      repPassword: ""
    };
  },
  methods: {
    editCustomer: function() {
      if (
        !this.customer.username ||
        !this.customer.email ||
        !this.customer.password ||
        !this.customer.firstName ||
        !this.customer.lastName ||
        !this.customer.phoneNumber
      ) {
        this.error = "Niste popunili sva obavezna polja";
      } else if (!this.isNumeric(this.customer.phoneNumber)) {
        this.error = "vrednost za polje broja telefona mora biti numericko";
        this.customer.phoneNumber = "";
      } else if (this.customer.password != this.repPassword) {
        this.error = "Repeat password se ne poklapa sa passwordom";
      } else {
        axios
          .put(
            "http://localhost:8090/customer/edit/" +
              localStorage.getItem("customerId")
          )
          .then(response => {
            localStorage.clear();
            this.$router.push("/");
          });
      }
    }
  }
};
</script>

<style scoped>
@import "customerInfoEdit.css";
</style>


