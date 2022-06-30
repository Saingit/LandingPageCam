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
            <div class="row px-5">
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
                    <p>lorem iLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. <br><br> Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.</p>
                    <button type="buttom" class="btn btn1 p-3"> <strong>CONOCE MÁS</strong> </button>
                </div>
                <div class="col-lg-5 col-12"><img src="../public/images/41_PersonasyTecnología__MG_1519.jpg"
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
                <div class="row justify-content-center px-0">
                    <div class="col-lg-3 mx-3 col-12 py-4 px-0 shadow">
                        <h4 class="px-3 MB">Alfabetización Digital</h4>
                        <img src="../public/images/BPG14.jpg" class="img-fluid mb-3"
                            alt="Alfabetización Digital">
                        <h5 class="WSR px-3">Descripción corta o entradilla que explique el módulo, funcionalidad o
                            herramienta particular</h5>

                    </div>
                    <div class="col-lg-3 mx-3 col-12 py-4 px-0 shadow">
                        <h4 class="px-3 MB">Mujeres y Paz</h4><img
                            src="../public/images/AT.jpg" class="img-fluid mb-3"
                            alt="Mujeres y paz">
                        <h5 class="WSR px-3">Descripción corta o entradilla que explique el módulo, funcionalidad o
                            herramienta particular</h5>
                    </div>
                    <div class="col-lg-3 mx-3 col-12 py-4 px-0 shadow">
                        <h4 class="px-3 MB">Mujeres y Política</h4>
                        <img src="../public/images/imujeres.jpg"
                            class="img-fluid mb-3" alt="Mujeres y Política">
                        <h5 class="WSR px-3">Descripción corta o entradilla que explique el módulo, funcionalidad o
                            herramienta particular</h5>
                    </div>
                </div>

            </div>
        </div>
        <div class="container-fluid px-0 mt-5">
            <div class="row px-0 justify-content-center">

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

                <div class="col-lg-3 mx-4 col-12 py-3 px-0 shadow">
                    <h4 class=" px-4 MB">Dame Razones Padres</h4>
                    <img src="../public/images/44_EntregaTabletasPalmitas__MG_9942.jpg" class="img-fluid mb-3"
                        alt="Dame Razones Padres">
                    <h5 class="WSR px-4">Descripción corta o entradilla que explique el módulo, funcionalidad o
                        herramienta particular</h5>
                </div>
                <div class="col-lg-3 mx-4 col-12 py-3 px-0 shadow">
                    <h4 class=" px-3 MB">Dame Razones Jovenes</h4>
                    <img src="../public/images/192_TechFest__MG_5007.jpg" class="img-fluid mb-3"
                        alt="Dame Razones Jovenes">
                    <h5 class="WSR px-4">Descripción corta o entradilla que explique el módulo, funcionalidad o
                        herramienta particular</h5>
                </div>
                <div class="col-lg-3 mx-4 col-12 py-3 px-0 shadow">
                    <h4 class="px-3 MB">Redes Sociales</h4>
                    <img src="../public/images/44_PersonasyTecnología__MG_2251.jpg" class="img-fluid mb-3"
                        alt="Redes Sociales">
                    <h5 class="WSR px-4">Descripción corta o entradilla que explique el módulo, funcionalidad o
                        herramienta particular</h5>
                </div>
            </div>
        </div>



        <div class="container-fluid bg1 p-5 my-5">
            <div class="row">
                <div class="col-lg-6 col-12">
                    <h2 class="text-right">
                        Diplomados <br> Virtuales
                    </h2>
                </div>
                <div class="col-lg-6 col-12">
                    <p>
                        lorem iLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.
                    </p>
                    <button type="buttom" class="btn btn1"> <strong>CONOCE MÁS</strong> </button>

                </div>
            </div>
        </div>
        <div class="container border  mb-5">
            <div class="row p-3 my-5">
                <div class="col-lg-6 col-12">
                    <h3>Horario de atención:</h3>
                    <p>

                        <strong>Centro Administrativo Municipal:</strong> <br>
                        Lunes a jueves (ingreso) 7:30am a 12:00m y 1:30pm a 5:00pm. <br>
                        Viernes (ingreso): 7:30am a 12:00m y 1:30pm a 4:00pm. <br><br>
                        <strong>Oficinas de Servicios Tributarios La Alpujarra:</strong><br>

                        Lunes a jueves 7:30am a 5:00pm. <br>
                        Viernes: 7:30am a 4:00pm. <br>
                        <strong>Centro de Servicios a la Ciudadanía La Alpujarra - Sótano:</strong>

                        Lunes a Jueves de 7:30 am a 5:30 pm y viernes 7:30am a 4:30pm (jornada continua). <br> <br>

                        <strong>Dirección:</strong> <br>

                        Calle 44 N 52 – 165 Centro Administrativo La Alpujarra – Medellín, Colombia. <br><br>

                        <strong>Sedes externas:</strong>

                        Sedes <br><br>

                        <strong>Correo portal:</strong> <br>

                        Contáctenos <br><br>

                        <strong>Correos notificaciones judiciales:</strong> <br>

                        notimedellin.oralidad@medellin.gov.co
                    </p>
                </div>
                <div class="col-lg-6 col-12 text-right">
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
            <div class="row bg-med p-3 my-5 text-white">
                <div class="col-lg-5 mx-lg-5 col-12">

                    <p>

                        <strong>Notificaciones</strong> <br>
                        Publicaciones, citaciones, comunicaciones y notificaciones / Notificaciones actos
                        administrativos / Agenda regulatoria <br><br>


                        <strong>Ayudas</strong><br>

                        Correo remoto / Correo 365 / CSC - Centro de Servicios Compartidos / Encuesta de satisfacción /
                        Gabinete Municipal / Gestionar usuario / Glosario / Manual de identidad gráfica / Monitoreo y
                        desempeño del sitio / Sistema de Gestión Documentral - SGD Mercurio <br> <br>

                    </p>
                </div>
                <div class="col-lg-5 mx-lg-5 col-12">
                    <p>

                        <strong>Sitio Web para niños</strong> <br>
                        Aeropuerto Olaya Herrera / Área Metropolitana del Valle de Aburrá a/ Contraloría General de
                        Medellín / EDU / Emvarias / Inder / Metroparques / Metro de Medellín / Personería de Medellín /
                        Metroplús / Terminales Medellín - Presidencia / Mintic / Antioquia <br><br>


                        © 2022 / NIT: 890905211-1 / Código DANE: 05001 / Código Postal: 050015 <br><br>

                        Fecha de Actualización: 28 de Junio de 2022


                    </p>

                </div>
            </div>
            <div class="row p-3 justify-content-center ">

                <div class="col-lg-2 col-12 p-2 text-center"><i class="bi bi-chat-right-dots"
                        style="font-size: 3rem; color: #3467cc;"></i>
                    <p> <strong>Chat</strong> <br> Alcaldia de Medellín </p>
                </div>
                <div class="col-lg-2 col-12 p-2 text-center"><i class="bi bi-headset"
                        style="font-size: 3rem; color:#3467cc;"></i>
                    <p> <strong>Linea de atención</strong> <br> (574) 444 41 44 </p>
                </div>
                <div class="col-lg-2 col-12 p-2 text-center"><i class="bi bi-telephone-inbound-fill"
                        style="font-size: 3rem; color:#3467cc;"></i>
                    <p> <strong>Línea gratiuta Nacional</strong> <br> (574) 444 41 44 </p>
                </div>
                <div class="col-lg-2 col-12 p-2 text-center"><img src="../public/header&footer/linea.png"
                        alt="Gobierno en Linea" class="img-fluid">
                    <p> <strong>Centro de Relevos</strong> <br> Atención por lengua de señas </p>
                </div>

                <div class="col-lg-2 col-12 p-3 text-center"><i class="bi bi-hand-index"
                        style="font-size: 3rem; color:#3467cc;"></i>
                    <p> <strong>Intranet</strong> <br> Intranet</p>
                </div>
            </div>
            <div class="row p-3 justify-content-center">
                <div class="col-lg-2 col-12 p-3 text-center"><img src="../public/header&footer/radio_institucional.png"
                        alt="Radio Institucional" class="img-fluid"></div>
                <div class="col-lg-2 col-12 p-3 text-center"><img src="../public/header&footer/correoremoto.png"
                        alt="Correo remoto" class="img-fluid"></div>
                <div class="col-lg-2 col-12 p-3 text-center"><img src="../public/header&footer/asocapitales.png"
                        alt="Asociación Colombiana de Ciudades Capitales" class="img-fluid"></div>
                <div class="col-lg-2 col-12 p-3 text-center"><img src="../public/header&footer/linea.png"
                        alt="Gobierno en Linea" class="img-fluid"></div>
                <div class="col-lg-2 col-12 p-3 text-center"><img src="../public/header&footer/compra_eficiente.png"
                        alt="Colombia Compra Eficiente" class="img-fluid"></div>
                <div class="col-lg-2 col-12 p-3 text-center"><img src="../public/header&footer/h_legal.png"
                        alt="Hora Legal Colombiana" class="img-fluid"></div>
            </div>
        </div>


        <foot1 />

    </div>
</template>

