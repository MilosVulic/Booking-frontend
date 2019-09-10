<template>
  <div>
    <div class="row managers-apartments">
      <div class="col-lg-1"></div>
      <div class="col-lg-10">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>List of my objects</h4>
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
                    <th>Delete</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody v-if="flag1">
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
                        class="btn btn-danger"
                        @click="deleteApartment(apartment.apartmentId)"
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
    <EditApartment v-if="showEditor"/>
  </div>
</template>

<script>
import EditApartment from "../managers-apartments-edit/EditApartment.vue";
import axios from "axios";

export default {
  name: "ManagersApartments",

  components: {
    EditApartment
  },

  data() {
    return {
      showEditor: false,
      text: "Edit",
      flag: true,

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

      flag1: false
    };
  },

  methods: {
    showEditForm: function() {
      this.showEditor = !this.showEditor;
      this.flag = !this.flag;

      if (this.flag == false) this.text = "Hide";
      else if (this.flag) this.text = "Edit";
    },

    deleteApartment: function(idApart) {
      axios
        .delete("http://localhost:8090/apartment/delete/" + idApart)
        .then(response => {
          this.refresh();
        });
    },

    refresh: function() {
      axios
        .get(
          "http://localhost:8090/apartment/showAll/" +
            localStorage.getItem("managerId")
        )
        .then(response => {
          this.apartments = response.data;
          this.flag1 = true;
        });
    }
  },
  mounted() {
    axios
      .get(
        "http://localhost:8090/apartment/showAll/" +
          localStorage.getItem("managerId")
      )
      .then(response => {
        this.apartments = response.data;
        this.flag1 = true;
      });
  }
};
</script>

<style scoped>
@import "managersApartments.css";
</style>
