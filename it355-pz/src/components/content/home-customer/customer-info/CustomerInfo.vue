<template>
  <div>
    <div class="row customer-info">
      <div class="col-lg-1"></div>
      <div class="col-lg-10">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3>Personal info</h3>
          </div>
          <div class="panel-body">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th class="idtabela">#Id</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Delete</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="detail in customerInfo" v-bind:key="detail.id">
                    <td class="iddata">{{detail.customerId}}</td>
                    <td>{{detail.username}}</td>
                    <td>{{unCryptedPass}}</td>
                    <td>{{detail.firstName}}</td>
                    <td>{{detail.lastName}}</td>
                    <td>{{detail.phoneNumber}}</td>
                    <td>{{detail.email}}</td>
                    <td>
                      <button
                        class="btn btn-danger"
                        @click="deleteCustomer(detail.customerId)"
                      >Delete</button>
                    </td>
                    <td>
                      <button class="btn btn-success" @click="showEditForm">{{text}}</button>
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
    <CustomerInfoEdit v-if="showEditor"/>
  </div>
</template>

<script>
import CustomerInfoEdit from "../customer-info-edit/CustomerInfoEdit.vue";
import axios from "axios";

export default {
  name: "CustomerInfo",

  components: {
    CustomerInfoEdit
  },

  data() {
    return {
      showEditor: false,
      text: "Edit",
      flag: true,
      customerInfo: {
        customerId: "",
        email: "",
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        phoneNumber: ""
      },
      unCryptedPass: localStorage.getItem("password")
    };
  },

  mounted() {
    axios
      .get("http://localhost:8090/customer/info")
      .then(response => (this.customerInfo = response.data));
  },

  methods: {
    showEditForm: function() {
      this.showEditor = !this.showEditor;
      this.flag = !this.flag;

      if (this.flag == false) this.text = "Hide";
      else if (this.flag) this.text = "Edit";
    },

    deleteCustomer: function(customerId) {
      axios
        .delete("http://localhost:8090/customer/delete/" + customerId)
        .then(response => {
          localStorage.clear();
          this.$router.push("/");
        });
    },

    editCustomer: function(customerId) {
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
          .put("http://localhost:8090/customer/edit/" + customerId)
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
@import "customerInfo.css";
</style>
