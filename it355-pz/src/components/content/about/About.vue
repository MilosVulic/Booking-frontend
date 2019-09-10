<template>
  <div class="generalni-div">
    <div id="background-slika"></div>

    <h2 class="heading">About us</h2>
    <h5 class="underHeading">Book smart. Book clever. Book with booking.</h5>
    <p class="explanation">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
      with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 col-lg-1 box"></div>
        <div class="col-sm-12 col-lg-3 box">
          <div class="card h-100">
            <div class="card-body-avatar">
              <div class="row info-row">
                <div class="col-sm-2 col-lg-1 box"></div>
                <div class="col-sm-3 col-lg-2 box">
                  <img
                    src="../../../assets/mylogo.jpg"
                    alt="Avatar"
                    style="width:100px"
                    class="avatar"
                  >
                </div>
                <div class="col-sm-1 col-lg-2 box"></div>
                <div class="col-sm-6 col-lg-6 box">
                  <p class="card-text info-text">
                    Written by Milos Vulic
                    <a
                      href="https://stackoverflow.com/users/9597039/milos"
                    >@stackoverflow</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-3 box">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Global info</h5>
              <br>
              <div class="col-sm-12 info">
                <div class="row">
                  <div class="col-sm-6 info">
                    <p class="card-text">Location:</p>
                  </div>
                  <div class="col-sm-6">
                    <p class="card-text">Dublin</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 info">
                <div class="row">
                  <div class="col-sm-6 info">
                    <p class="card-text">Address:</p>
                  </div>
                  <div class="col-sm-6">
                    <p class="card-text">Apple street 16</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 info">
                <div class="row">
                  <div class="col-sm-6 info">
                    <p class="card-text">Head Ceo:</p>
                  </div>
                  <div class="col-sm-6">
                    <p class="card-text">Milos Vulic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-4 box">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Our mission</h5>
              <br>
              <p class="card-text secondText">
                We want to make your life easier and save your precious time. So make an account ans stay tunned becasue you wont
                regret any second. Our services gives you best opportunity to make your vaction unforgetable
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-1 box"></div>
      </div>
    </div>

    <h2 class="find">You can find us here</h2>
    <iframe
      class="mapica"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152515.98632965787!2d-6.385784896089914!3d53.32423806922109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2z0JTQsNCx0LvQuNC9LCDQmNGA0YHQutCw!5e0!3m2!1ssr!2srs!4v1520886481163"
      width="900"
      frameborder="0"
      style="border:0"
      allowfullscreen
    ></iframe>

    <div class="row">
      <h2 class="section-title">
        <span>Clients</span>
      </h2>
      <div class="col-lg-12">
        <p>
          <img src="../../../assets/clients.png" class="slicka" alt="clients slika">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>
<style scoped>
@import "about.css";
</style>


