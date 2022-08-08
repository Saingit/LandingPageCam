<script>

export default {
  name: "menu1"
}
</script>

<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-med">

    <div class="container">

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="nav-item rounded mx-1">
        <img src="../assets/img/logo.png" class="animate__animated animate__bounce" alt="">
      </a>
      <div class="collapse navbar-collapse justify-content-end tmenu11" id="navbarSupportedContent">
        <ul class="navbar-nav text-center">

          <div class="nav-item rounded ">
            <li class="nav-item dropdown ">
              <a class="nav-link dropdown-toggle text-white WSL tmenu1" href="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="currentColor" width="2em">
						<path d="M50 8.1c23.2 0 41.9 18.8 41.9 41.9 0 23.2-18.8 41.9-41.9 41.9C26.8 91.9 8.1 73.2 8.1 50S26.8 8.1 50 8.1M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 11.3c-21.4 0-38.7 17.3-38.7 38.7S28.6 88.7 50 88.7 88.7 71.4 88.7 50 71.4 11.3 50 11.3zm0 8.9c4 0 7.3 3.2 7.3 7.3S54 34.7 50 34.7s-7.3-3.2-7.3-7.3 3.3-7.2 7.3-7.2zm23.7 19.7c-5.8 1.4-11.2 2.6-16.6 3.2.2 20.4 2.5 24.8 5 31.4.7 1.9-.2 4-2.1 4.7-1.9.7-4-.2-4.7-2.1-1.8-4.5-3.4-8.2-4.5-15.8h-2c-1 7.6-2.7 11.3-4.5 15.8-.7 1.9-2.8 2.8-4.7 2.1-1.9-.7-2.8-2.8-2.1-4.7 2.6-6.6 4.9-11 5-31.4-5.4-.6-10.8-1.8-16.6-3.2-1.7-.4-2.8-2.1-2.4-3.9.4-1.7 2.1-2.8 3.9-2.4 19.5 4.6 25.1 4.6 44.5 0 1.7-.4 3.5.7 3.9 2.4.7 1.8-.3 3.5-2.1 3.9z"></path>					</svg>
                Opciones de accesibilidad
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item WSL tmenu11" href="#">Action</a></li>
                <li><a class="dropdown-item WSL tmenu11" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item WSL tmenu11" href="#">Something else here</a></li>
              </ul>
            </li>
          </div>

          <div class="nav-item rounded ">
            <li class="nav-item dropdown mx-5">
              <a class="nav-link dropdown-toggle text-white WSL tmenu1" href="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-globe"></i> Español
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item WSL tmenu11" href="#">Action</a></li>
                <li><a class="dropdown-item WSL tmenu11" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item WSL tmenu11" href="#">Something else here</a></li>
              </ul>

            </li>

          </div>


          <div class="nav-item rounded">
            <ul class="navbar-nav">
              <li class="nav-item rounded">
                <div class="bg-white circular--landscape p-1"><img src="../assets/img/logoNuevop1.png"
                    class="img-fluid w-75" alt="" srcset="">
                </div>
              </li>
              <li class="nav-item dropdown ">
                <a class="nav-link dropdown-toggle text-white WSL tmenu1" href="#" id="navbarDropdown" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <span class=""> <strong>Alcaldia de Medellín</strong> </span> | Secretarias y Dependencias
                </a>
               
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                 
                  <li>
                    <span class="dropdown-item WSL tmenu11 bgm1 text-white"><b>Secretarías</b></span>
                  </li>
                  <li><a class="dropdown-item WSL tmenu11 bg-light" href="https://www.medellin.gov.co/es/dagrd/"><span
                        id="HDepAdmGRD" alt="Departamento Administrativo de Gestión del Riesgo y Desastres"
                        title="Departamento Administrativo de Gestión del Riesgo y Desastres">Departamento
                        Administrativo de <br> Gestión del Riesgo de Desastres</span></a></li>
                  <li><a class="dropdown-item WSL tmenu11"
                      href="https://www.medellin.gov.co/es/departamento-administrativo-de-planeacion/"><span
                        id="HDepAdmP" alt="Departamento Administrativo de Planeación"
                        title="Departamento Administrativo de Planeación">Departamento Administrativo de
                        Planeación</span></a></li>
                  <li><a class="dropdown-item WSL tmenu11 bg-light"
                      href="https://www.medellin.gov.co/es/secretaria-de-comunicaciones/"><span id="HSecComuni"
                        alt="Secretaría de Comunicaciones" title="Secretaría de Comunicaciones">Secretaría de
                        Comunicaciones</span></a></li>

                  <li><a class="dropdown-item WSL tmenu11"
                      href="https://www.medellin.gov.co/es/secretaria-cultura-ciudadana/"><span id="HSecCC"
                        alt="Secretaría de Cultura Ciudadana" title="Secretaría de Cultura Ciudadana">Secretaría de
                        Cultura Ciudadana </span></a></li>

                  <li><a class="dropdown-item WSL tmenu11 bg-light"
                      href="https://www.medellin.gov.co/es/secretaria-desarrollo-economico/"><span id="HSecDE"
                        alt="Secretaría de Desarrollo Económico" title="Secretaría de Desarrollo Económico">Secretaría
                        de Desarrollo Económico</span></a></li>
                  <li><a class="dropdown-item WSL tmenu11"
                      href="https://www.medellin.gov.co/es/secretaria-de-educacion/"><span id="HSecEdu"
                        alt="Secretaría de Educación" title="Secretaría de Educación">Secretaría de Educación</span></a>
                  </li>
                  <li><a class="dropdown-item WSL tmenu11 bg-light"
                      href="https://www.medellin.gov.co/es/secretaria-de-evaluacion-y-control/"><span id="HSecEvCo"
                        alt="Secretaría de Evaluación y Control" title="Secretaría de Evaluación y Control">Secretaría
                        de Evaluación y Control</span></a></li>
                  <li><a class="dropdown-item WSL tmenu11"
                      href="https://www.medellin.gov.co/es/secretaria-general/"><span id="HSecGen"
                        alt="Secretaría General" title="Secretaría General">Secretaría General</span></a></li>
                  <li><a class="dropdown-item WSL tmenu11 bg-light"
                      href="https://www.medellin.gov.co/es/secretaria-de-gestion-humana/"><span id="HSecGeHSC"
                        alt="Secretaría de Gestión Humana y Servicio a la Ciudadanía"
                        title="Secretaría de Gestión Humana y Servicio a la Ciudadanía">Secretaría de Gestión Humana <br> y
                        Servicio a la Ciudadanía</span></a></li>
                  <li><a class="dropdown-item WSL tmenu11"
                      href="https://www.medellin.gov.co/es/secretaria-gestion-y-control-territorial/">Secretaría de
                      Gestión y Control Territorial</a></li>
                  <li><a class="dropdown-item WSL tmenu11 bg-light"
                      href="https://www.medellin.gov.co/es/secretaria-de-gobierno/"><span id="HSecGoGG"
                        alt="Secretaría de Gobierno y Gestión del Gabinete"
                        title="Secretaría de Gobierno y Gestión del Gabinete">Secretaría de Gobierno y Gestión del
                        Gabinete</span></a></li>
                  <li><a class="dropdown-item WSL tmenu11"
                      href="https://www.medellin.gov.co/es/secretaria-de-hacienda/"><span id="HSecHa"
                        alt="Secretaría de Hacienda" title="Secretaría de Hacienda">Secretaría de Hacienda</span></a>
                  </li>
                  <li><a class="dropdown-item WSL tmenu11 bg-light"
                      href="https://www.medellin.gov.co/es/secretaria-de-inclusion/"><span
                        id="HSecInSoFaDeHu">Secretaría de Inclusión Social, <br>  Familia y Derechos Humanos</span></a></li>
                  <li><a class="dropdown-item WSL tmenu11"
                      href="https://www.medellin.gov.co/es/secretaria-infraestructura-fisica/"><span id="HSecInfFi"
                        alt="Secretaría de Infraestructura Física"
                        title="Secretaría de Infraestructura Física">Secretaría de Infraestructura Física</span></a>
                  </li>
                  <li><a class="dropdown-item WSL tmenu11 bg-light"
                      href="https://www.medellin.gov.co/es/secretaria-de-innovacion-digital/">Secretaría de Innovación
                      Digital</a></li>
                  <li><a class="dropdown-item WSL tmenu11"
                      href="https://www.medellin.gov.co/es/secretaria-juventud/"><span id="HSecJuv"
                        alt="Secretaría de La Juventud" title="Secretaría de La Juventud">Secretaría de La
                        Juventud</span></a></li>
                  <li><a class="dropdown-item WSL tmenu11 bg-light"
                      href="https://www.medellin.gov.co/es/secretaria-de-la-no-violencia/"><span id="HSecNoViolencia"
                        alt="Secretaría de la No-Violencia" title="Secretaría de la No-Violencia">Secretaría de la
                        No-Violencia</span></a></li>
                  <li><a class="dropdown-item WSL tmenu11"
                      href="https://www.medellin.gov.co/es/secretaria-mujeres/"><span id="HSecMuje"
                        alt="Secretaría de las Mujeres" title="Secretaría de las Mujeres">Secretaría de las
                        Mujeres</span></a></li>
                  <li><a class="dropdown-item WSL tmenu11 bg-light"
                      href="https://www.medellin.gov.co/es/secretaria-medio-ambiente/"><span id="HSecMedAmb"
                        alt="Secretaría de Medio Ambiente" title="Secretaría de Medio Ambiente">Secretaría de Medio
                        Ambiente</span></a></li>
                  <li><a class="dropdown-item WSL tmenu11"
                      href="https://www.medellin.gov.co/es/secretaria-de-movilidad/"><span id="HSecMov"
                        alt="Secretaría de Movilidad" title="Secretaría de Movilidad">Secretaría de Movilidad</span></a>
                  </li>
                  <li><a class="dropdown-item WSL tmenu11 bg-light"
                      href="https://www.medellin.gov.co/es/secretaria-participacion-ciudadana/"><span id="HSecPartCiu"
                        alt="Secretaría de Participación Ciudadana"
                        title="Secretaría de Participación Ciudadana">Secretaría de Participación Ciudadana</span></a>
                  </li>
                  <li><a class="dropdown-item WSL tmenu11"
                      href="https://www.medellin.gov.co/es/secretaria-privada/"><span id="HSecPriv"
                        alt="Secretaría Privada" title="Secretaría Privada">Secretaría Privada</span></a></li>
                  <li><a class="dropdown-item WSL tmenu11 bg-light"
                      href="https://www.medellin.gov.co/es/secretaria-de-salud/"><span id="HSecSalud"
                        alt="Secretaría de Salud" title="Secretaría de Salud">Secretaría de Salud</span></a></li>
                  <li><a class="dropdown-item WSL tmenu11"
                      href="https://www.medellin.gov.co/es/secretaria-seguridad/"><span id="HSecSegConv"
                        alt="Secretaría de Seguridad y Convivencia"
                        title="Secretaría de Seguridad y Convivencia">Secretaría de Seguridad y Convivencia</span></a>
                  </li>
                  <li><a class="dropdown-item WSL tmenu11 bg-light"
                      href="https://www.medellin.gov.co/es/secretaria-suministros-y-servicios/"><span id="HSecSumServ"
                        alt="Secretaría de Suministros y Servicios"
                        title="Secretaría de Suministros y Servicios">Secretaría de Suministros y Servicios»</span></a>
                  </li>
                  <li>
                    <span  class="dropdown-item WSL tmenu11 bgm1 text-white"><b>Gerencias</b></span>
                  </li>
                  <li><a class="dropdown-item WSL tmenu11 bg-light"
                      href="https://www.medellin.gov.co/es/gerencia-del-centro/"><span id="HGerCentro"
                        alt="Gerencia del Centro" title="Gerencia del Centro">Gerencia del Centro</span></a></li>
                  <li><a class="dropdown-item WSL tmenu11" href="https://www.medellin.gov.co/es/corregimientos/"><span
                        id="HGerCorreg" alt="Gerencia de Corregimientos" title="Gerencia de Corregimientos">Gerencia de
                        Corregimientos</span></a></li>
                  <li><a class="dropdown-item WSL tmenu11 bg-light"
                      href="https://www.medellin.gov.co/es/diversidades-sexualidades-e-identidad-de-genero/"><span
                        id="HGerDivSexIdeGe" alt="Gerencia de Diversidad Sexual e Identidad de Género"
                        title="Gerencia de Diversidades Sexuales e Identidad de Género">Gerencia de Diversidades <br>
                        Sexuales e Identidad de Género</span></a></li>
                  <li><a class="dropdown-item WSL tmenu11" href="https://www.medellin.gov.co/es/gerencia-etnica/"><span
                        id="HGerEtnica" alt="Gerencia Étnica" title="Gerencia Étnica">Gerencia Étnica</span></a></li>
                  <li><a class="dropdown-item WSL tmenu11 bg-light"
                      href="https://www.medellin.gov.co/es/gerencia-de-proyectos-estrategicos/"><span id="HGerProyEstra"
                        alt="Gerencia de Proyectos Estratégicos" title="Gerencia de Proyectos Estratégicos">Gerencia de
                        Proyectos Estratégicos</span></a></li>
                  <li><a class="dropdown-item WSL tmenu11"
                      href="https://www.medellin.gov.co/es/unidad-administrativa-especial-buen-comienzo/"><span
                        id="HUnidadAdmEspBuenCom" alt="Unidad Administrativa Especial de Buen Comienzo"
                        title="Unidad Administrativa Especial de Buen Comienzo">Unidad Administrativa Especial de <br> Buen
                        Comienzo</span></a></li>
                  <li>
                    <span class="dropdown-item WSL tmenu11 bgm1 text-white"><b>Despachos</b></span>
                  </li>
                  <li><a class="dropdown-item WSL tmenu11"
                      href="https://www.medellin.gov.co/es/nuestro-alcalde/">Despacho del Alcalde</a></li>
                  <li><a class="dropdown-item WSL tmenu11 bg-light"
                      href="https://www.medellin.gov.co/es/despacho-de-la-gestora-social/">Despacho de la Gestora
                      Social</a></li>
                </ul>
                
                
              </li>
            </ul>


          </div>

        </ul>

      </div>
    </div>


  </nav>




</template>




