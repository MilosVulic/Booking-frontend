<template>
  <div>
    <div id="edit-apartment">
      <div class="container">
        <div id="edit-apartment-row" class="row justify-content-center align-items-center">
          <div id="edit-apartment-column" class="col-md-12">
            <div id="edit-apartment-box" class="col-md-12">
              <form id="edit-apartment-form" class="form">
                <h3 class="text-center text">Edit forma</h3>

                <div id="edit-apartment-row" class="row justify-content-center align-items-center">
                  <div id="edit-apartment-column" class="col-md-4">
                    <div class="form-group">
                      <label for="country" class="text">Country:</label>
                      <br>
                      <input type="text" name="country" id="country" class="form-control">
                    </div>
                  </div>
                  <div id="edit-apartment-column" class="col-md-4">
                    <div class="form-group">
                      <label for="city" class="text">City:</label>
                      <br>
                      <input type="text" name="city" id="city" class="form-control">
                    </div>
                  </div>
                  <div id="edit-apartment-column" class="col-md-4">
                    <div class="form-group">
                      <label for="street_name" class="text">Street:</label>
                      <br>
                      <input type="text" name="street_name" id="street_name" class="form-control">
                    </div>
                  </div>
                </div>

                <div id="edit-apartment-row" class="row justify-content-center align-items-center">
                  <div id="edit-apartment-column" class="col-md-3">
                    <div class="form-group">
                      <label for="house_number" class="text">House number:</label>
                      <br>
                      <input type="text" name="house_number" id="house_number" class="form-control">
                    </div>
                  </div>
                  <div id="edit-apartment-column" class="col-md-3">
                    <div class="form-group">
                      <label for="naziv_objekta" class="text">Naziv objekta:</label>
                      <br>
                      <input
                        type="text"
                        name="naziv_objekta"
                        id="naziv_objekta"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div id="edit-apartment-column" class="col-md-3">
                    <div class="form-group">
                      <label for="number_of_beds" class="text">Number of beds:</label>
                      <br>
                      <input
                        type="text"
                        name="number_of_beds"
                        id="number_of_beds"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div id="edit-apartment-column" class="col-md-3">
                    <div class="form-group">
                      <label for="price_per_night" class="text">Price per night:</label>
                      <br>
                      <input
                        type="text"
                        name="price_per_night"
                        id="price_per_night"
                        class="form-control"
                      >
                    </div>
                  </div>
                </div>
                <div id="edit-apartment-row" class="row justify-content-center align-items-center">
                  <div id="edit-apartment-column" class="col-md-12">
                    <div class="form-group">
                      <br>
                      <input type="submit" class="btn btn-info btn-md dugme">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditApartment"
};
</script>

<style scoped>
@import "editApartment.css";
</style>

