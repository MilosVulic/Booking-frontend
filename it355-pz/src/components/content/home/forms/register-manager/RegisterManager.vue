<template>
  <div>
    <div id="register-manager" v-if="registerManager">
      <div class="container">
        <div id="register-manager-row" class="row justify-content-center align-items-center">
          <div id="register-manager-column" class="col-md-12">
            <div id="register-manager-box" class="col-md-12">
              <form id="register-manager-form" class="form">
                <h3 class="text-center text-info">Register as manager</h3>

                <div
                  id="register-manager-row"
                  class="row justify-content-center align-items-center"
                >
                  <div id="register-manager-column" class="col-md-4">
                    <div class="form-group">
                      <label for="username" class="text-info">Username:</label>
                      <br>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        class="form-control"
                        required
                        v-model="manager.username"
                      >
                    </div>
                  </div>
                  <div id="register-manager-column" class="col-md-4">
                    <div class="form-group">
                      <label for="password" class="text-info">Password:</label>
                      <br>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        class="form-control"
                        required
                        v-model="manager.password"
                      >
                    </div>
                  </div>
                  <div id="register-manager-column" class="col-md-4">
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
                  id="register-manager-row"
                  class="row justify-content-center align-items-center"
                >
                  <div id="register-manager-column" class="col-md-4">
                    <div class="form-group">
                      <label for="firstName" class="text-info">First name:</label>
                      <br>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        class="form-control"
                        required
                        v-model="manager.firstName"
                      >
                    </div>
                  </div>
                  <div id="register-manager-column" class="col-md-4">
                    <div class="form-group">
                      <label for="lastName" class="text-info">Last name:</label>
                      <br>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        class="form-control"
                        required
                        v-model="manager.lastName"
                      >
                    </div>
                  </div>
                  <div id="register-manager-column" class="col-md-4">
                    <div class="form-group">
                      <label for="phoneNumber" class="text-info">Phone number:</label>
                      <br>
                      <input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        class="form-control"
                        required
                        v-model="manager.phoneNumber"
                      >
                    </div>
                  </div>
                </div>

                <div
                  id="register-manager-row"
                  class="row justify-content-center align-items-center"
                >
                  <div id="register-manager-column" class="col-md-3">
                    <div class="form-group">
                      <label for="ppUsername" class="text-info">Paypal Username:</label>
                      <br>
                      <input
                        type="text"
                        name="ppUsername"
                        id="ppUsername"
                        class="form-control"
                        required
                        v-model="manager.ppUsername"
                      >
                    </div>
                  </div>
                  <div id="register-manager-column" class="col-md-3">
                    <div class="form-group">
                      <label for="ppPassword" class="text-info">Paypal password:</label>
                      <br>
                      <input
                        type="password"
                        name="ppPassword"
                        id="ppPassword"
                        class="form-control"
                        required
                        v-model="manager.ppPassword"
                      >
                    </div>
                  </div>
                  <div id="register-manager-column" class="col-md-1">
                    <div class="form-group">
                      <br>
                      <button
                        type="button"
                        class="btn btn-info btn-md dugme1"
                        @click="insertManager"
                      >
                        <span>Submit</span>
                      </button>
                    </div>
                  </div>
                  <div id="register-manager-column" class="col-md-3">
                    <div class="form-group">
                      <br>
                      <button
                        type="button"
                        class="btn btn-info btn-md dugme1"
                        @click="swapRegisterForms"
                      >
                        <span>Switch to customer</span>
                      </button>
                    </div>
                  </div>
                  <div id="register-manager-column" class="col-md-2">
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
    <RegisterCustomer v-if="registerCustomer"/>
  </div>
</template>

<script>
import RegisterCustomer from "../register-customer/RegisterCustomer.vue";
import Forms from "../Forms.vue";
import axios from "axios";

export default {
  name: "RegisterManager",

  components: {
    RegisterCustomer,
    Forms
  },

  data() {
    return {
      registerManager: true,
      registerCustomer: false,
      loginShow: false,
      manager: {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        ppUsername: "",
        ppPassword: "",
        phoneNumber: ""
      },
      repPassword: "",
      error: ""
    };
  },

  methods: {
    swapRegisterForms: function() {
      this.registerManager = !this.registerManager;
      this.registerCustomer = !this.registerCustomer;
      this.$root.$emit("changeRForms", true);
    },

    swapForms: function() {
      this.loginShow = !this.loginShow;
      this.registerCustomer = !this.registerCustomer;
      this.$root.$emit("myEvent", true);
    },

    insertManager: function() {
      if (
        !this.manager.username ||
        !this.manager.ppUsername ||
        !this.manager.ppPassword ||
        !this.manager.password ||
        !this.manager.firstName ||
        !this.manager.lastName ||
        !this.manager.phoneNumber
      ) {
        this.error = "Niste popunili sva obavezna polja";
      } else if (!this.isNumeric(this.manager.phoneNumber)) {
        this.error = "vrednost za polje broja telefona mora biti numericko";
        this.manager.phoneNumber = "";
      } else if (this.manager.password != this.repPassword) {
        this.error = "Repeat password se ne poklapa sa passwordom";
      } else {
        axios
          .post("http://localhost:8090/manager/add", this.manager)
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
      this.manager.username = "";
      this.manager.password = "";
      this.manager.ppUsername = "";
      this.manager.ppPassword = "";
      this.manager.firstName = "";
      this.manager.lastName = "";
      this.manager.phoneNumber = "";
    },

    isNumeric: function(number) {
      return !isNaN(parseFloat(number)) && isFinite(number);
    }
  }
};
</script>

<style scoped>
@import "registerManager.css";
</style>
