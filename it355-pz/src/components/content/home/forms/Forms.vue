<template>
  <div>
    <div id="login" v-if="loginShow">
      <div class="container">
        <div id="login-row" class="row justify-content-center align-items-center">
          <div id="login-column" class="col-md-6">
            <div id="login-box" class="col-md-12">
              <form id="login-form" class="form">
                <h3 class="text-center text-info">Login</h3>
                <div class="form-group">
                  <label for="username" class="text-info">Username:</label>
                  <br>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    class="form-control"
                    v-model="loginReq.username"
                  >
                </div>
                <div class="form-group">
                  <label for="password" class="text-info">Password:</label>
                  <br>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="form-control"
                    v-model="loginReq.password"
                  >
                </div>

                <div class="form-group">
                  <br>
                  <button type="button" class="btn btn-info btn-md" @click="login">
                    <span>Submit</span>
                  </button>
                </div>

                <div id="register-link" class="text-right">
                  <br>
                  <br>
                  <a href="#" class="text-info" @click="swapForms">Register here</a>
                </div>
                <br>
                <div class="error text-left">
                  <p>{{error}}</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RegisterCustomer v-if="registerCustomer"/>
  </div>
</template>

<script>
import RegisterCustomer from "./register-customer/RegisterCustomer.vue";
import axios from "axios";
import * as JWT from "jwt-decode";

export default {
  name: "Forms",

  components: {
    RegisterCustomer
  },

  data() {
    return {
      loginShow: true,
      registerCustomer: false,
      loginReq: {
        username: "",
        password: ""
      },
      error: ""
    };
  },

  methods: {
    swapForms: function() {
      this.loginShow = !this.loginShow;
      this.registerCustomer = !this.registerCustomer;
      this.error = "";
    },

    login: function() {
      axios
        .post("http://localhost:8090/auth/signin", this.loginReq)
        .then(response => {
          var t = JWT(response.data.token);

          localStorage.setItem("token", response.data.token);
          localStorage.setItem("password", this.loginReq.password);
          localStorage.setItem("rola", t.rola[0]);
          localStorage.setItem("username", t.sub);

          const token = localStorage.getItem("token");

          if (token) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
          }
          this.$root.$emit("rolaEvent", localStorage.getItem("rola"));
          this.injectUsersId();
        })
        .catch(e => {
          this.error = "Invalid credentials";
          this.clearFields();
        });
    },

    injectUsersId: function() {
      if (localStorage.getItem("rola") === "MANAGER") {
        axios.get("http://localhost:8090/manager/info").then(response => {
          localStorage.setItem("managerId", response.data.manager.managerId);
          this.$router.push("/home-manager");
        });
      } else if (localStorage.getItem("rola") === "CUSTOMER") {
        axios.get("http://localhost:8090/customer/info").then(response => {
          localStorage.setItem("customerId", response.data.customer.customerId);
          this.$router.push("/home-customer");
        });
      }
    },

    clearFields: function() {
      this.loginReq.username = "";
      this.loginReq.password = "";
    }
  },

  mounted: function() {
    this.$root.$on("myEvent", value => {
      this.loginShow = value;
      this.registerCustomer = false;
    });
  }
};
</script>

<style scoped>
@import "forms.css";
</style>
