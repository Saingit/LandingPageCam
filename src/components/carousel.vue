<script>
export default {
  name: "carousel"
}
</script>
<template>
  <section class="m-0 p-0">
    <div class="container-fluid m-0 p-0">
      <div class="row m-0 p-0">
        <div class="col-12 m-0 p-0">
          <div id="carouselExampleControls" class="carousel slide m-0 p-0" data-bs-ride="carousel">
            <div class="carousel-inner m-0 p-0">
              <div class="carousel-item active ">
                <div class="slide1 p-5">
                  <h1 class="pt-5 WSB col3">Alcaldía de Medellín</h1>
                  <h2 class="pb-5 WSR col3">Escuela de Aprendizaje Virtual</h2>
                </div>
              </div>
              <div class="carousel-item ">
                <div class="slide2 p-5">
                  <h1 class="pt-5 WSB col3">-</h1>
                  <h2 class="pb-5 WSR col3 ">.</h2>
                </div>
              </div>
              <div class="carousel-item ">
                <div class="slide3 p-5">
                  <h1 class="pt-5 WSB col3">-</h1>
                  <h2 class="pb-5 WSR col3">.</h2>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>




