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
                            <h2 class="col3"> <strong class="MB">Despacho </strong> <span class="MM">Gestora
                                    Social</span> </h2>
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
                        <h4 class="px-3 MB">Prevención de Embarazo en Adolescentes</h4>
                        <img src="./assets/Portadaica1.png" class="img-fluid mb-3"
                            alt="Alfabetización Digital">
                        <h5 class="WSR px-3"> <strong>Dirigido a Adolescentes</strong> <br>

                            En este corto y divertido proceso formativo encontraras todas las herramientas para
                            proyectar tu futuro, tomar decisiones planeadas para la vida y tener una salud sexual sana,
                            responsable y libre de violencias.</h5>
                            <div class="row justify-content-center">
                                <div class="col-12 text-center">
                                   <a href="https://forms.office.com/pages/responsepage.aspx?id=iOBInEReDUuToO6yxhJ8PdXFaF3A4mBFnO9XqZRnYUtUMUQwTDhDNE9UMzlDV0g5S0tKNEowT1g5Ry4u" class="btn btn1" target="_blank" rel="">Inscríbete</a>
                                </div>
                            </div>   
                    </div>
                    <div class="col-lg-3 mx-3 col-12 py-4 px-0 my-2 shadow">
                        <h4 class="px-3 MB">Prevención de Embarazo en Adolescentes</h4><img src="./assets/Portadaica.png"
                            class="img-fluid mb-3" alt="Mujeres y paz">
                        <h5 class="WSR px-3"> <strong>Dirigido a Agentes Educativos</strong> <br>

                            En este corto y amigable curso encontraras un diseño curricular listo y todas las
                            herramientas para formar niñas, niños, adolescentes y jóvenes en habilidades para la vida,
                            toma de decisiones, salud sexual y reproductiva y llevar una vida libre de violencias.</h5>

                            <div class="row justify-content-center">
                                <div class="col-12 text-center">
                                   <a href="https://forms.office.com/pages/responsepage.aspx?id=iOBInEReDUuToO6yxhJ8PdXFaF3A4mBFnO9XqZRnYUtUMUI2WFRUOE9KVlZWR05PMlZOSDRDQ0MxQS4u" class="btn btn1" target="_blank" rel="">Inscríbete</a>
                                </div>
                            </div>   
                    </div>

                    <div class="col-lg-3 mx-3 col-12 py-4 px-0 my-2 shadow">
                        <h4 class="px-3 MB">TEST Prevención de embarazo</h4>
                        <img src="./assets/PortadaT.png" class="img-fluid mb-3" alt="Mujeres y Política">
                        <h5 class="WSR px-4"> <strong> Dirigido a Adolescentes </strong> <br>

                            Este juego te servirá para tener un aproximado qué tan cerca o lejos estás de tener un
                            embarazo en tu adolescencia. Al final te damos unos TIPS o estrategias básicas para prevenir
                            esta situación. Te invitamos a responder con total sinceridad, sólo tú conocerás el
                            resultado. </h5>
                            <div class="row justify-content-center">
                                <div class="col-12 text-center">
                                   <a href="#" class="btn btn1" target="_blank" rel="">Inscríbete</a>
                                </div>
                            </div>                            
                    </div>
                </div>

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
                        <h5 class="WSR px-4">Descripción corta o entradilla que explique el módulo, funcionalidad o
                            herramienta particular</h5>
                            <div class="row justify-content-center">
                                <div class="col-12 text-center">
                                   <a href="http://" class="btn btn1" target="_blank" rel="">Inscríbete</a>
                                </div>
                            </div> 

                    </div>
                    <div class="col-lg-3 mx-3 col-12 py-4 px-0 my-2 shadow">
                        <h4 class="px-3 MB">Mujeres y Paz</h4><img src="./assets/AT.jpg" class="img-fluid mb-3"
                            alt="Mujeres y paz">
                        <h5 class="WSR px-4">Descripción corta o entradilla que explique el módulo, funcionalidad o
                            herramienta particular</h5>
                            <div class="row justify-content-center">
                                <div class="col-12 text-center">
                                   <a href="http://" class="btn btn1" target="_blank" rel="">Inscríbete</a>
                                </div>
                            </div> 
                    </div>
                    <div class="col-lg-3 mx-3 col-12 py-4 px-0 my-2 shadow">
                        <h4 class="px-3 MB">Mujeres y Política</h4>
                        <img src="./assets/imujeres.jpg" class="img-fluid mb-3" alt="Mujeres y Política">
                        <h5 class="WSR px-4">Descripción corta o entradilla que explique el módulo, funcionalidad o
                            herramienta particular</h5>
                            <div class="row justify-content-center">
                                <div class="col-12 text-center">
                                   <a href="http://" class="btn btn1" target="_blank" rel="">Inscríbete</a>
                                </div>
                            </div> 
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
                        <div class="row justify-content-center">
                                <div class="col-12 text-center">
                                   <a href="http://" class="btn btn1" target="_blank" rel="">Inscríbete</a>
                                </div>
                            </div> 
                </div>
                <div class="col-lg-3 mx-4 col-12 py-3 px-0 my-2 shadow">
                    <h4 class=" px-3 MB">Dame Razones Jovenes</h4>
                    <img src="./assets/192_TechFest__MG_5007.jpg" class="img-fluid mb-3" alt="Dame Razones Jovenes">
                    <h5 class="WSR px-4">Descripción corta o entradilla que explique el módulo, funcionalidad o
                        herramienta particular</h5>
                        <div class="row justify-content-center">
                                <div class="col-12 text-center">
                                   <a href="http://" class="btn btn1" target="_blank" rel="">Inscríbete</a>
                                </div>
                            </div> 
                </div>
                <div class="col-lg-3 mx-4 col-12 py-3 px-0 my-2 shadow">
                    <h4 class="px-3 MB">Redes Sociales</h4>
                    <img src="./assets/44_PersonasyTecnología__MG_2251.jpg" class="img-fluid mb-3" alt="Redes Sociales">
                    <h5 class="WSR px-4">Descripción corta o entradilla que explique el módulo, funcionalidad o
                        herramienta particular</h5>
                        <div class="row justify-content-center">
                                <div class="col-12 text-center">
                                   <a href="http://" class="btn btn1" target="_blank" rel="">Inscríbete</a>
                                </div>
                            </div> 
                </div>
            </div>
        </div>



        <div class="container-fluid bg2 p-5 my-5 ">
            <div class="row justify-content-center ">
                <div class="col-lg-1 col-12 text-rigth1">
                    <img src="./assets/010-digital-marketing.png" class="img-fluid" alt="">
                </div>
                <div class="col-lg-2 col-12">

                    <h2 class="text-right1 MB text-white tshadow1">
                        Diplomados
                    </h2>
                    <h2 class="text-right1 col5 MB tshadow1">
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
        <section class="bg-light">
            <div class="container border">
                <div class="row p-5 mt-5">
                    <div class="col-lg-8 col-12">
                        <h4 class="col1">Horarios de Atención</h4>
                        <p class="p18 WS text-secondary">
                            <strong class="text-dark">Centro Administrativo Distrital:</strong> <br>

                            Lunes a jueves de 7:30 a. m. a 12:00 m. y de 1:30 p. m. a 5:00 p. m <br>
                            Viernes de 7:30 a. m. a 12:00 m. y de 1:30 p. m. a 4:00 p. m. <br>
                            <strong class="text-dark">Oficinas de Servicios Tributarios La Alpujarra:</strong> <br>


                            Lunes a jueves de 7:30 a. m. a 5:00 p. m. y viernes de 7:30 a. m. a 4:00 p. m. <br>
                            <strong class="text-dark">Centro de Servicios a la Ciudadanía La Alpujarra -
                                Sótano:</strong>
                            <br>


                            Lunes a Jueves de 7:30 a. m. a 5:30 p. m. y viernes de 7:30 a. m. a <br> 4:30 p. m. (jornada
                            continua). <br><br>
                            <strong class="text-dark">
                                Dirección:
                            </strong> <br>


                            Calle 44 # 52 - 165, Centro Administrativo La Alpujarra, Medellín, Colombia <br> <br>


                            <strong class="text-dark">Correo Portal:</strong> <br>
                            <a href="https://www.medellin.gov.co/es/pqrsd/" target="_blank">Contáctenos</a> <br><br>



                            <strong class="text-dark">
                                Correo notificaciones judiciales
                            </strong>
                            <br>

                            notimedellin.oralidad@medellin.gov.co


                        </p>



                    </div>
                    <div class="col-lg-4 col-12 text-center">
                        <img src="./assets/logo_footer.png" class="img-fluid w-50" alt="">
                        <p class="mt-5"><strong>Redes Sociales</strong></p>
                        <h4 class="WSL">Alcaldía de Medellín</h4>
                        <ul class="d-flex list-unstyled justify-content-center">
                            <li>
                                <a href="https://twitter.com/AlcaldiadeMed" target="_blank"
                                    class="text-decoration-none"><i
                                        class="bi bi-twitter circular--landscape bg-secondary"></i></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/AlcaldiadeMed" target="_blank"
                                    class="text-decoration-none"><i
                                        class="bi bi-facebook circular--landscape bg-secondary"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/accounts/login/?next=/alcaldiademed/" target="_blank"
                                    class="text-decoration-none"><i
                                        class="bi bi-instagram circular--landscape bg-secondary"></i></a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/user/alcaldiademed" target="_blank"
                                    class="text-decoration-none"><i
                                        class="bi bi-youtube circular--landscape bg-secondary"></i></a>
                            </li>
                            <li>
                                <a href="https://vimeo.com/user118558690" target="_blank"
                                    class="text-decoration-none"><i
                                        class="bi bi-vimeo circular--landscape bg-secondary"></i></a>
                            </li>
                        </ul>



                    </div>
                </div>
                <div class="row justify-content-center bg-med p-5 mt-5 text-white">
                    <div class="col-12 p-5 ">

                        <h3>Centro documental:</h3>
                        <p class="WSL"><a href="https://www.medellin.gov.co/es/centro-documental/" target="_blank"
                                class="text-decoration-none text-white">Centro documental:</a> <a
                                href="https://medellin.gov.co/irj/portal/medellin?NavigationTarget=contenido/458-Publicaciones-citaciones-comunicaciones-y-notificaciones"
                                target="_blank" class="text-decoration-none text-white">Citaciones</a> / <a
                                href="https://medellin.gov.co/irj/portal/medellin?NavigationTarget=contenido/458-Publicaciones-citaciones-comunicaciones-y-notificaciones"
                                target="_blank" class="text-decoration-none text-white">Comunicaciones</a> / <a
                                href="https://medellin.gov.co/irj/portal/medellin?NavigationTarget=contenido/458-Publicaciones-citaciones-comunicaciones-y-notificaciones"
                                target="_blank" class="text-decoration-none text-white">Notificaciones</a> / <a
                                href="https://medellin.gov.co/irj/portal/medellin/consulnoti" target="_blank"
                                class="text-decoration-none text-white">Notificaciones por actos administrativos</a> /
                            <a href="https://www.medellin.gov.co/es/secretaria-general/proyectos-normativos-agenda-regulatoria/"
                                class="text-decoration-none text-white">Proyectos normativos y agenda regulatoria</a> /
                            <a href="https://csc.medellin.gov.co/APRUsers/#!/login/" target="_blank"
                                class="text-decoration-none text-white">Soporte al servidor público</a>
                        </p>
                        <br>
                        <h3>Ayudas:</h3>
                        <p class="WSL"><a href="https://www.medellin.gov.co/es/es/soporte-al-servidor-publico/"
                                class="text-decoration-none text-white">Correo remoto</a> / <a
                                href="https://www.medellin.gov.co/es/preguntas-frecuentes/"
                                class="text-decoration-none text-white">Preguntas frecuentes</a> / <a
                                href="https://www.medellin.gov.co/irj/portal/medellin?NavigationTarget=navurl://4fe61ddd921db378550e7d4269698f86"
                                class="text-decoration-none text-white">Encuesta de satisfacción</a> / <a
                                href="https://www.medellin.gov.co/es/soporte-al-servidor-publico/"
                                class="text-decoration-none text-white">Gestionar usuario</a> / <a
                                href="https://www.medellin.gov.co/es/glosario-de-la-alcaldia-de-medellin/"
                                class="text-decoration-none text-white">Glosario</a> / <a
                                href="https://www.medellin.gov.co/es/manuales-de-identidad-corporativa/"
                                class="text-decoration-none text-white">Manual de identidad gráfica</a> / <a
                                href="https://www.medellin.gov.co/irj/portal/medellin?NavigationTarget=contenido/9652-Monitoreo-y-desempeno-del-sitio"
                                class="text-decoration-none text-white">Monitoreo y desempeño del sitio</a> / <a
                                href="https://www.medellin.gov.co/es/mapa-del-sitio/"
                                class="text-decoration-none text-white">Mapa del Sitio</a> / <a
                                href="https://mercurio.medellin.gov.co/mercurio/servlet/ValidarUsuarioLdap"
                                target="_blank" class="text-decoration-none text-white">Sistema de Gestión Documental -
                                SGD Mercurio</a> /
                            <a href="https://www.medellin.gov.co/irj/portal/medellin?NavigationTarget=contenido/9261-Que-es-el-POT"
                                target="_blank" class="text-decoration-none text-white">P.0.T</a> / <a
                                href="https://www.medellin.gov.co/irj/go/km/docs/documents/ServiciosLinea/DocumentosContratacion/MANUAL2009.pdf"
                                target="_blank" class="text-decoration-none text-white">Manual de contratación</a> / <a
                                href="http://bit.ly/2YMax5W" target="_blank"
                                class="text-decoration-none text-white">Antes
                                de salir de casa</a>
                        </p>

                        <h3>Políticas:</h3>
                        <p class="WSL"><a
                                href="https://www.medellin.gov.co/es/transparencia/politica-de-tratamientos-de-datos/"
                                class="text-decoration-none text-white">Política de tratamiento de datos, uso del
                                portal,
                                cookies y privacidad</a> / <a
                                href="https://www.medellin.gov.co/irj/go/km/docs/pccdesign/medellin/Temas/AtencionCiudadana_0/InformacinGeneral/Shared%20Content/Documentos/carta%20de%20derechos%20y%20deberes%202019.pdf"
                                target="_blank" class="text-decoration-none text-white">Carta de trato digno a la
                                ciudadanía</a> / <a href="https://www.medellin.gov.co/es/centro-documental/"
                                class="text-decoration-none text-white">Publicaciones</a> / <a
                                href="https://datos.gov.co/" target="_blank"
                                class="text-decoration-none text-white">Datos abiertos</a></p>
                        <br>
                        <br>
                        <p class="WSL">© 2022 / NIT: 890905211-1 / Código DANE: 05001 / Código Postal: 050015 / Medellín
                            Distrito de
                            Ciencia, Tecnología e Innovación</p>
                        <p class="WSL">Fecha de actualización:
                            Martes 12 de Julio del 2022 </p>

                    </div>

                </div>
            </div>
        </section>



        <foot1 />

    </div>
</template>

