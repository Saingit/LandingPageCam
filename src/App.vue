<script>
import HelloWorld from './components/HelloWorld.vue'
import menu1 from './components/menu1.vue'
import menu2 from './components/menu2.vue'
import menu3 from './components/menu3.vue'
import carousel from './components/carousel.vue'
import foot1 from './components/foot1.vue'
export default {
    name: "App",
    components: {
        HelloWorld,
        menu1,
        menu2,
        menu3,
        carousel,
        foot1
    }

};
</script>

<template>
    <div id="app">
        <menu1 />
        <menu2 />
        <carousel />
        <menu3 />

        <div class="container-fluid px-5 mt-5">
            <div class="row px-5 align-items-center">
                <div class="col-12 my-5">
                    <h5 class="col3">Alcaldía de Medellín > Secretaría de Innovación Digital > <strong>Escuela de
                            Aprendizaje Virtual</strong> </h5>
                </div>
                <div class="col-12 mb-5">
                    <div class="row">
                        <div class="col-lg-3 col-12 border1">
                            <h2 class="col4 MB">Cónocenos</h2>
                        </div>
                        <div class="col-lg-9 col-12 border2">
                            <h2 class="col2 MM">Secretaría de Innovación Digital</h2>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 col-12">
                    <h2 class="col4 WSB">¿Qué es la Escuela de Aprendizaje Virtual?</h2>
                    <p>lorem iLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. <br><br> Duis autem vel eum iriure
                        dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
                        facilisis at vero eros et accumsan et iusto.</p>
                    <button type="buttom" class="btn btn1 p-3"> <strong>CONOCE MÁS</strong> </button>
                </div>
                <div class="col-lg-5 col-12 align-items-center"><img src="./assets/41_PersonasyTecnología__MG_1519.jpg"
                        class="img-fluid" alt=""></div>
            </div>

        </div>
        <div class="container-fluid px-0 mt-5">
            <div class="row px-0">

                <div class="col-12 my-5">
                    <div class="row px-5">
                        <div class="col-lg-6 col-12 border3">
                            <h2 class="col3"> <strong class="MB">Secretaría de</strong> <span class="MM">las
                                    Mujeres</span> </h2>
                        </div>
                        <div class="col-lg-6 col-12 border2 ">
                            <h2 class="col3"></h2>

                        </div>
                        <div class="col-12 mt-5">
                            <p> <strong>lorem iLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                                    wisi enim ad minim veniam.</strong> </p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center px-5">
                    <div class="col-lg-3 mx-3 col-12 py-4 px-0 my-2 shadow">
                        <h4 class="px-3 MB">Alfabetización Digital</h4>
                        <img src="./assets/BPG14.jpg" class="img-fluid mb-3" alt="Alfabetización Digital">
                        <h5 class="WSR px-3">Descripción corta o entradilla que explique el módulo, funcionalidad o
                            herramienta particular</h5>

                    </div>
                    <div class="col-lg-3 mx-3 col-12 py-4 px-0 my-2 shadow">
                        <h4 class="px-3 MB">Mujeres y Paz</h4><img src="./assets/AT.jpg" class="img-fluid mb-3"
                            alt="Mujeres y paz">
                        <h5 class="WSR px-3">Descripción corta o entradilla que explique el módulo, funcionalidad o
                            herramienta particular</h5>
                    </div>
                    <div class="col-lg-3 mx-3 col-12 py-4 px-0 my-2 shadow">
                        <h4 class="px-3 MB">Mujeres y Política</h4>
                        <img src="./assets/imujeres.jpg" class="img-fluid mb-3" alt="Mujeres y Política">
                        <h5 class="WSR px-3">Descripción corta o entradilla que explique el módulo, funcionalidad o
                            herramienta particular</h5>
                    </div>
                </div>

            </div>
        </div>
        <div class="container-fluid px-0 mt-5">
            <div class="row px-5 justify-content-center">

                <div class="col-12 my-5">
                    <div class="row px-5">
                        <div class="col-lg-4 col-12 border3">
                            <h2 class="col3"> <strong class="MB">Secretaría de</strong> <span class="MM">Salud</span>
                            </h2>
                        </div>
                        <div class="col-lg-8 col-12 border2 ">
                            <h2 class="col3"></h2>

                        </div>
                        <div class="col-12 mt-5">
                            <p> <strong>lorem iLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                                    wisi enim ad minim veniam.</strong> </p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 mx-4 col-12 py-3 px-0 my-2 shadow">
                    <h4 class=" px-4 MB">Dame Razones Padres</h4>
                    <img src="./assets/44_EntregaTabletasPalmitas__MG_9942.jpg" class="img-fluid mb-3"
                        alt="Dame Razones Padres">
                    <h5 class="WSR px-4">Descripción corta o entradilla que explique el módulo, funcionalidad o
                        herramienta particular</h5>
                </div>
                <div class="col-lg-3 mx-4 col-12 py-3 px-0 my-2 shadow">
                    <h4 class=" px-3 MB">Dame Razones Jovenes</h4>
                    <img src="./assets/192_TechFest__MG_5007.jpg" class="img-fluid mb-3" alt="Dame Razones Jovenes">
                    <h5 class="WSR px-4">Descripción corta o entradilla que explique el módulo, funcionalidad o
                        herramienta particular</h5>
                </div>
                <div class="col-lg-3 mx-4 col-12 py-3 px-0 my-2 shadow">
                    <h4 class="px-3 MB">Redes Sociales</h4>
                    <img src="./assets/44_PersonasyTecnología__MG_2251.jpg" class="img-fluid mb-3" alt="Redes Sociales">
                    <h5 class="WSR px-4">Descripción corta o entradilla que explique el módulo, funcionalidad o
                        herramienta particular</h5>
                </div>
            </div>
        </div>



        <div class="container-fluid bg2 p-5 my-5">
            <div class="row justify-content-center ">
                <div class="col-lg-1 col-12 text-rigth1">
                    <img src="./assets/010-digital-marketing.png" class="img-fluid" alt="">
                </div>
                <div class="col-lg-2 col-12">

                    <h2 class="text-right1 MB text-white">
                        Diplomados
                    </h2>
                    <h2 class="text-right1 col5 MB">
                        Virtuales
                    </h2>
                </div>
                <div class="col-lg-6 col-12 px-5">
                    <p class="text-white WSR">
                        lorem iLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.
                    </p>


                </div>
                <div class="col-lg-3 col-12">

                    <button type="buttom" class="btn btn1"> <strong>MÁS INFORMACIÓN</strong> </button>

                </div>
            </div>
        </div>
        <div class="container border">
            <div class="row p-3 mt-5">
                <div class="col-lg-8 col-12">
                    <h4 class="col1">Horarios de Atención</h4>
                    <h5>
                    <strong>Centro Administrativo Distrital:</strong> <br>

                    Lunes a jueves de 7:30 a. m. a 12:00 m. y de 1:30 p. m. a 5:00 p. m <br>
                    Viernes de 7:30 a. m. a 12:00 m. y de 1:30 p. m. a 4:00 p. m. <br>
                    <strong>Oficinas de Servicios Tributarios La Alpujarra:</strong> <br>
                    

                    Lunes a jueves de 7:30 a. m. a 5:00 p. m. y viernes de 7:30 a. m. a 4:00 p. m. <br>
                    <strong>Centro de Servicios a la Ciudadanía La Alpujarra - Sótano:</strong> <br>
                    

                    Lunes a Jueves de 7:30 a. m. a 5:30 p. m. y viernes de 7:30 a. m. a <br> 4:30 p. m. (jornada continua). <br><br>
                    <strong>
                        Dirección:
                    </strong> <br>
                    

                    Calle 44 # 52 - 165, Centro Administrativo La Alpujarra, Medellín, Colombia <br> <br>
                    
                                    
                    <strong>Correo Portal:</strong> <br>
                    <a href="https://www.medellin.gov.co/es/pqrsd/" target="_blank">Contáctenos</a> <br><br>

                    
                    
                    <strong>
                       Correo notificaciones judiciales
                    </strong>
                    <br>

                    notimedellin.oralidad@medellin.gov.co

                
                    </h5>

                    

                </div>
                <div class="col-lg-4 col-12 text-right">
                    <p class="text-right">
                    <ul>
                        <li>
                            <p>Alcaldía de Medellín <i class=""></i></p>
                        </li>
                        <li>
                            <p>Alcaldía de Medellín <i class=""></i></p>
                        </li>
                        <li>
                            <p>@alcaldiamed<i class=""></i></p>
                        </li>
                        <li>
                            <p>@alcaldiamed <i class=""></i></p>
                        </li>
                        <li>
                            <p>@alcaldiamed <i class=""></i></p>
                        </li>
                    </ul>
                    </p>


                </div>
            </div>
            <div class="row justify-content-center bg-med py-5 mt-5 text-white">
                <div class="col-12 p-5">
                   
            <h3>Centro documental:</h3>
            <p class="WSR "><a href="https://www.medellin.gov.co/es/centro-documental/" target="_blank" class="text-decoration-none text-white">Centro documental:</a> <a href="https://medellin.gov.co/irj/portal/medellin?NavigationTarget=contenido/458-Publicaciones-citaciones-comunicaciones-y-notificaciones" target="_blank">Citaciones</a> / <a href="https://medellin.gov.co/irj/portal/medellin?NavigationTarget=contenido/458-Publicaciones-citaciones-comunicaciones-y-notificaciones" target="_blank">Comunicaciones</a> / <a href="https://medellin.gov.co/irj/portal/medellin?NavigationTarget=contenido/458-Publicaciones-citaciones-comunicaciones-y-notificaciones" target="_blank">Notificaciones</a> / <a href="https://medellin.gov.co/irj/portal/medellin/consulnoti" target="_blank">Notificaciones por actos administrativos</a> / <a href="https://www.medellin.gov.co/es/secretaria-general/proyectos-normativos-agenda-regulatoria/">Proyectos normativos y agenda regulatoria</a> / <a href="https://csc.medellin.gov.co/APRUsers/#!/login/" target="_blank">Soporte al servidor público</a></p>
            <br>
            <h3>Ayudas:</h3>
            <p><a href="https://www.medellin.gov.co/es/es/soporte-al-servidor-publico/">Correo remoto</a> / <a href="https://www.medellin.gov.co/es/preguntas-frecuentes/">Preguntas frecuentes</a> / <a href="https://www.medellin.gov.co/irj/portal/medellin?NavigationTarget=navurl://4fe61ddd921db378550e7d4269698f86">Encuesta de satisfacción</a> / <a href="https://www.medellin.gov.co/es/soporte-al-servidor-publico/">Gestionar usuario</a> / <a href="https://www.medellin.gov.co/es/glosario-de-la-alcaldia-de-medellin/">Glosario</a> / <a href="https://www.medellin.gov.co/es/manuales-de-identidad-corporativa/">Manual de identidad gráfica</a> / <a href="https://www.medellin.gov.co/irj/portal/medellin?NavigationTarget=contenido/9652-Monitoreo-y-desempeno-del-sitio">Monitoreo y desempeño del sitio</a> / <a href="https://www.medellin.gov.co/es/mapa-del-sitio/">Mapa del Sitio</a> /  <a href="https://mercurio.medellin.gov.co/mercurio/servlet/ValidarUsuarioLdap" target="_blank">Sistema de Gestión Documental - SGD Mercurio</a> / <a href="https://www.medellin.gov.co/irj/portal/medellin?NavigationTarget=contenido/9261-Que-es-el-POT" target="_blank">P.0.T</a> / <a href="https://www.medellin.gov.co/irj/go/km/docs/documents/ServiciosLinea/DocumentosContratacion/MANUAL2009.pdf" target="_blank">Manual de contratación</a> / <a href="http://bit.ly/2YMax5W" target="_blank">Antes de salir de casa</a></p>
        </div>
        <div class="grid_">
            <h3>Políticas:</h3>
            <p><a href="https://www.medellin.gov.co/es/transparencia/politica-de-tratamientos-de-datos/">Política de tratamiento de datos, uso del portal, cookies y privacidad</a> / <a href="https://www.medellin.gov.co/irj/go/km/docs/pccdesign/medellin/Temas/AtencionCiudadana_0/InformacinGeneral/Shared%20Content/Documentos/carta%20de%20derechos%20y%20deberes%202019.pdf" target="_blank">Carta de trato digno a la ciudadanía</a> / <a href="https://www.medellin.gov.co/es/centro-documental/">Publicaciones</a> / <a href="https://datos.gov.co/" target="_blank">Datos abiertos</a></p>
            <br>
            <br>
                        <p>© 2022 / NIT: 890905211-1 / Código DANE: 05001 / Código Postal: 050015 / Medellín Distrito de Ciencia, Tecnología e Innovación</p>
            <p>Fecha de actualización:
                Martes 12 de Julio del 2022            </p>
        </div>
    
                <!-- <div class="col-lg-4 mx-lg-5 col-12">

                    <h6>

                        <strong>Notificaciones</strong> <br>
                        Publicaciones, citaciones, comunicaciones y notificaciones / Notificaciones actos
                        administrativos / Agenda regulatoria <br><br>


                        <strong>Ayudas</strong><br>

                        Correo remoto / Correo 365 / CSC - Centro de Servicios Compartidos / Encuesta de satisfacción /
                        Gabinete Municipal / Gestionar usuario / Glosario / Manual de identidad gráfica / Monitoreo y
                        desempeño del sitio / Sistema de Gestión Documentral - SGD Mercurio <br> <br>

                    </h6>
                </div>
                <div class="col-lg-4 mx-lg-5 col-12">
                    <h6>

                        <strong>Sitio Web para niños</strong> <br>
                        Aeropuerto Olaya Herrera / Área Metropolitana del Valle de Aburrá a/ Contraloría General de
                        Medellín / EDU / Emvarias / Inder / Metroparques / Metro de Medellín / Personería de Medellín /
                        Metroplús / Terminales Medellín - Presidencia / Mintic / Antioquia <br><br>


                        © 2022 / NIT: 890905211-1 / Código DANE: 05001 / Código Postal: 050015 <br><br>

                        Fecha de Actualización: 28 de Junio de 2022


                    </h6>

                </div> -->
            </div>
        </div>


        <foot1 />

    </div>
</template>

