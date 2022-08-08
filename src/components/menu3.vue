<script>
export default {
  name: "menu3",


  methods: {
    animacionIngreso: function () {
      let btnMenu = document.querySelector("#btnMenu3");
      btnMenu.classList.add("animate__animated", "animate__bounceIn")
    }
  },
  //  animacionIngresoOut: function(){
  //   let btnMenu = document.querySelector("#btnMenu3");
  //   btnMenu.classList.remove("animate__animated","animate__bounceIn")

  // }
}


</script>
<template>

  <div class="navbar navbar-expand-lg navbar-light bgm3 sticky-top shadow">
    <div class="container text-center">


      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1"
        aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent1">
        <ul class="nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/"><a class="text-white WSL active text-decoration-none" aria-current="page"
                href="#">inicio</a> </router-link>


          </li>

          <li class="nav-item">

            <router-link class="nav-link" to="/quienes"><a class="text-white WSL text-decoration-none" aria-current="page"
                href="#">¿Qué hacemos?</a></router-link>

          </li>
          <li class="nav-item">
             <router-link class="nav-link" to="/cursos"><a class="text-white WSL text-decoration-none" aria-current="page" href="#">Cursos</a></router-link>
            
          </li>
          <li class="nav-item">
             <router-link class="nav-link" to="/diplomados"><a class="text-white WSL text-decoration-none" href="#">Diplomados</a></router-link>
            
          </li>
          <li class="nav-item">
            <a class="nav-link text-white WSL" href="#" target="">Foros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white WSL" href="#" target="">Contactanos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link btn text-white RBTO" id="btnMenu3" href="http://10.2.0.99/" target=""> Ingresar al campus
            </a>
          </li>
        </ul>
      </div>
      <!-- @mouseover="animacionIngreso()" -->


    </div>
  </div>


</template>




