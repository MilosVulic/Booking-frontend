<template>
  <div>
    <div id="register-customer" v-if="registerCustomer">
      <div class="container">
        <div id="register-customer-row" class="row justify-content-center align-items-center">
          <div id="register-customer-column" class="col-md-12">
            <div id="register-customer-box" class="col-md-12">
              <form id="register-customer-form" class="form">
                <h3 class="text-center text-info">Register as customer</h3>

                <div
                  id="register-customer-row"
                  class="row justify-content-center align-items-center"
                >
                  <div id="register-customer-column" class="col-md-4">
                    <div class="form-group">
                      <label for="username" class="text-info">Username:</label>
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
                  <div id="register-customer-column" class="col-md-4">
                    <div class="form-group">
                      <label for="password" class="text-info">Password:</label>
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
                  <div id="register-customer-column" class="col-md-4">
                    <div class="form-group">
                      <label for="repPassword" class="text-info">Repeat password:</label>
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
                  id="register-customer-row"
                  class="row justify-content-center align-items-center"
                >
                  <div id="register-customer-column" class="col-md-4">
                    <div class="form-group">
                      <label for="phoneNumber" class="text-info">Phone number:</label>
                      <br>
                      <input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        class="form-control"
                        required
                        v-model="customer.phoneNumber"
                      >
                    </div>
                  </div>
                  <div id="register-customer-column" class="col-md-4">
                    <div class="form-group">
                      <label for="firstName" class="text-info">First name:</label>
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
                  <div id="register-customer-column" class="col-md-4">
                    <div class="form-group">
                      <label for="lastName" class="text-info">Last name:</label>
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
                  id="register-customer-row"
                  class="row justify-content-center align-items-center"
                >
                  <div id="register-customer-column" class="col-md-4">
                    <div class="form-group">
                      <label for="email" class="text-info">Email:</label>
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

                  <div id="register-customer-column" class="col-md-2">
                    <div class="form-group">
                      <br>
                      <button
                        type="button"
                        class="btn btn-info btn-md dugme"
                        @click="insertCustomer"
                      >
                        <span>Submit</span>
                      </button>
                    </div>
                  </div>
                  <div id="register-customer-column" class="col-md-4">
                    <div class="form-group">
                      <br>
                      <button type="button" class="btn btn-info dugme" @click="swapRegisterForms">
                        <span>Switch to manager</span>
                      </button>
                    </div>
                  </div>
                  <div id="register-customer-column" class="col-md-2">
                    <div id="register-link" class="text-right form-group">
                      <br>
                      <a href="#" class="text-info linkic" @click="swapForms">Back to login</a>
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
    <Forms v-if="loginShow"/>
    <RegisterManager v-if="registerManager"/>
  </div>
</template>

<script>
import Forms from "../Forms.vue";
import RegisterManager from "../register-manager/RegisterManager.vue";
import axios from "axios";

export default {
  name: "RegisterCustomer",

  components: {
    Forms,
    RegisterManager
  },

  data() {
    return {
      registerCustomer: true,
      loginShow: false,
      registerManager: false,
      customer: {
        email: "",
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        phoneNumber: ""
      },
      repPassword: "",
      error: ""
    };
  },

  methods: {
    swapForms: function() {
      this.loginShow = !this.loginShow;
      this.registerCustomer = !this.registerCustomer;
      this.$root.$emit("myEvent", true);
    },

    swapRegisterForms: function() {
      this.registerManager = !this.registerManager;
      this.registerCustomer = !this.registerCustomer;
    },

    insertCustomer: function() {
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
          .post("http://localhost:8090/customer/add", this.customer)
          .then(response => {
            this.swapForms();
          })
          .catch(e => {
            this.error = "Trenutno nije moguce izvrsiti registraciju";
            this.clearFields();
          });
      }
    },

    clearFields: function() {
      this.customer.email = "";
      this.customer.username = "";
      this.customer.password = "";
      this.customer.firstName = "";
      this.customer.lastName = "";
      this.customer.phoneNumber = "";
    },

    isNumeric: function(number) {
      return !isNaN(parseFloat(number)) && isFinite(number);
    }
  },

  mounted: function() {
    this.$root.$on("changeRForms", value => {
      this.registerCustomer = value;
      this.registerManager = false;
    });
  }
};
</script>

<style scoped>
@import "registerCustomer.css";
</style>
