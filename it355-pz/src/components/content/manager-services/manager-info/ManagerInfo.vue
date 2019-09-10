<template>
  <div class="row manager-info">
    <div class="col-lg-1"></div>
    <div class="col-lg-10">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4>Manager info</h4>
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
                  <th>Paypall username</th>
                  <th>Paypall password</th>
                  <th>Phone number</th>
                  <th>Delete</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="detail in managerInfo" v-bind:key="detail.id">
                  <td class="iddata">{{detail.managerId}}</td>
                  <td>{{detail.username}}</td>
                  <td>{{unCryptedPass}}</td>
                  <td>{{detail.firstName}}</td>
                  <td>{{detail.lastName}}</td>
                  <td>{{detail.ppUsername}}</td>
                  <td>{{detail.ppPassword}}</td>
                  <td>{{detail.phoneNumber}}</td>
                  <td>
                    <button class="btn btn-danger" @click="deleteManager(detail.managerId)">Delete</button>
                  </td>
                  <td>
                    <button class="btn btn-success">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="error">
                <p>{{error}}</p>
              </div>
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
  name: "ManagerInfo",

  data() {
    return {
      managerInfo: {
        managerId: "",
        ppUsername: "",
        ppPassword: "",
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        phoneNumber: ""
      },
      unCryptedPass: localStorage.getItem("password"),
      error: ""
    };
  },

  mounted() {
    axios
      .get("http://localhost:8090/manager/info")
      .then(response => {
        this.managerInfo = response.data;
        localStorage.setItem("managerId", response.data.manager.managerId);
      })
      .catch(e => {
        this.error = "U bazi ne postoji vise takav korisnik";
      });
  },

  methods: {
    deleteManager: function(managerId) {
      console.log("da vidimo id managera " + localStorage.getItem("managerId"));
      axios
        .delete(
          "http://localhost:8090/manager/delete/" + managerId)
        .then(response => {
          localStorage.clear();
          this.$router.push('/');
        });
    }
  }
};
</script>

<style scoped>
@import "managerInfo.css";
</style>
