<script>
export default {
  name: "menu1"
}
</script>

<template>

  <nav class="navbar  navbar-expand-sm navbar-light bg-med text-white">
    <!-- Navbar content -->
    <div class="container-fluid">
      <div class="collapse navbar-collapse d-flex" id="navbarNavDropdown">
        <ul class="navbar-nav me-auto ">
          <li class="nav-item rounded  mx-1">
            <img src="../assets/header&footer/logo.png" class="animate__animated animate__bounce" alt="">
          </li>
        </ul>
        <ul class="navbar-nav d-flex ">

          <div class="nav-item rounded text-right justify-content-right">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white WSL" href="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Opciones de accesibilidad
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </div>

          <div class="nav-item rounded text-right justify-content-right">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white WSL" href="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Español
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>

          </div>

          <li class="nav-item rounded text-right justify-content-right">
            <div class="bg-white circular--landscape p-2"><img src="../assets/header&footer/logoNuevo.png" class="img-fluid " alt=""
                srcset=""></div>
          </li>
          <div class="nav-item rounded text-right justify-content-right">

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white WSL" href="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                <span class="font-weight-bold">Alcaldia de Medellín</span><br> Secretarias y Dependencias
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </div>

        </ul>

      </div>
    </div>
  </nav>

 
</template>




