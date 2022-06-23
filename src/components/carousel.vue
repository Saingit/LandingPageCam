<script>
export default {
  name: "carousel"
}
</script>
<template>
   <section class="m-0 p-0">
    <div class="container-fluid">
      <div class="row m-0 p-0">
        <div class="col-12 m-0 p-0">
          <div id="carouselExampleControls" class="carousel slide m-0 p-0" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets/images/banner-encabezado.png" class="d-block w-100" alt="">
              </div>
              <div class="carousel-item ">
                <img src="../assets/images/banner-encabezado2.png" class="d-block w-100" alt="">
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




