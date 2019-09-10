<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../../assets/header-logo.png" alt="logo">
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active" v-if="rola != rolaManager && rola != rolaCustomer">
              <router-link to="/" exact>
                <a class="nav-link" @click="showFaqMethod">
                  Home
                  <span class="sr-only">(current)</span>
                </a>
              </router-link>
            </li>
            <li class="nav-item" v-if="showFaq == true && rola != rolaManager ">
              <a class="nav-link" href="/#faq">FAQ</a>
            </li>
            <li class="nav-item" v-if="rola == rolaManager">
              <router-link to="/home-manager" active-class="active">
                <a class="nav-link" @click="hideFaq">Home manager</a>
              </router-link>
            </li>
            <li class="nav-item" v-if="rola == rolaManager">
              <router-link to="/manager-services" active-class="active">
                <a class="nav-link" @click="hideFaq">Manager services</a>
              </router-link>
            </li>
            <li class="nav-item" v-if="rola == rolaCustomer">
              <router-link to="/home-customer" active-class="active">
                <a class="nav-link" @click="showFaqMethod">Home-customer</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" active-class="active">
                <a class="nav-link" @click="hideFaq">About</a>
              </router-link>
            </li>
            <li class="nav-item" v-if="rola == rolaManager || rola == rolaCustomer">
              <a class="nav-link" @click="logOut">Log out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      showFaq: true,
      rola: "nesto levo",
      rolaManager: "MANAGER",
      rolaCustomer: "CUSTOMER"
    };
  },

  methods: {
    showFaqMethod: function() {
      this.showFaq = true;
    },

    hideFaq: function() {
      this.showFaq = false;
    },

    logOut: function() {
      localStorage.clear();
      this.$router.push("/");
      this.rola = "nesto levo";
    }
  },

  mounted: function() {
    this.$root.$on("rolaEvent", value => {
      this.rola = value;
    });
  }
};
</script>

<style scoped>
@import "header.css";
</style>
