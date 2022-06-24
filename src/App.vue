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

        <div class="container mt-5">
            <div class="row">
                <div class="col-12 my-5">
                    <p class="col3">Alcaldía de Medellín > Secretaría de Innovación Digital > <strong>Escuela de
                            Aprendizaje Virtual</strong> </p>
                </div>
                <div class="col-12 mb-5">
                    <div class="row">
                        <div class="col-lg-2 col-12 border1">
                            <h3 class="col4">Cónocenos</h3>
                        </div>
                        <div class="col-lg-10 col-12 border2">
                            <h3 class="col2">Secretaría de Innovación Digital</h3>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-12">
                    <h3>¿Qué es la Escuela de Aprendizaje Virtual?</h3>
                    <p>lorem iLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                        nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
                        illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                        blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                    <button type="buttom" class="btn btn1"> <strong>VER MÁS</strong> </button>
                </div>
                <div class="col-lg-6 col-12"><img src="src/assets/images/41_PersonasyTecnología__MG_1519.jpg"
                        class="img-fluid" alt=""></div>
            </div>
        </div>
        <div class="container mt-5">
            <div class="row">

                <div class="col-12 my-5">
                    <div class="row">
                        <div class="col-lg-4 col-12 border3">
                            <h3 class="col3"> <strong>Secretaría de</strong> las Mujeres</h3>
                        </div>
                        <div class="col-lg-8 col-12 border2 ">
                            <h3 class="col3"></h3>

                        </div>
                        <div class="col-12 mt-5">
                            <p> <strong>lorem iLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                                    wisi enim ad minim veniam.</strong> </p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-3 mx-3 col-12 p-4 shadow"><img src="src/assets/images/BPG-14 - copia.jpg"
                            class="img-fluid mb-3" alt="Alfabetización Digital">
                        <h3 class="text-center">Alfabetización Digital</h3>
                    </div>
                    <div class="col-lg-3 mx-3 col-12 p-4 shadow"><img
                            src="src/assets/images/Activaciones territoriales 8M-9.jpg" class="img-fluid mb-3"
                            alt="Mujeres y paz">
                        <h3 class="text-center">Mujeres y Paz</h3>
                    </div>
                    <div class="col-lg-3 mx-3 col-12 p-4 shadow"><img
                            src="src/assets/images/Inauguración de la Colección de las Mujeres-12 - copia.jpg"
                            class="img-fluid mb-3" alt="Mujeres y Política">
                        <h3 class="text-center">Mujeres y Política</h3>
                    </div>
                </div>

            </div>
        </div>
        <div class="container mt-5">
            <div class="row justify-content-center">

                <div class="col-12 my-5">
                    <div class="row">
                        <div class="col-lg-4 col-12 border3">
                            <h3 class="col3"> <strong>Secretaría de</strong> Salud</h3>
                        </div>
                        <div class="col-lg-8 col-12 border2 ">
                            <h3 class="col3"></h3>

                        </div>
                        <div class="col-12 mt-5">
                            <p> <strong>lorem iLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                                    wisi enim ad minim veniam.</strong> </p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 mx-3 col-12 p-3 shadow"><img
                        src="src/assets/images/44_EntregaTabletasPalmitas__MG_9942.jpg" class="img-fluid mb-3"
                        alt="Dame Razones Padres">
                    <h3 class="text-center">Dame Razones Padres</h3>
                </div>
                <div class="col-lg-3 mx-3 col-12 p-3 shadow"><img src="src/assets/images/192_TechFest__MG_5007.jpg"
                        class="img-fluid mb-3" alt="Dame Razones Jovenes">
                    <h3 class="text-center">Dame Razones Jovenes</h3>
                </div>
                <div class="col-lg-3 mx-3 col-12 p-3 shadow"><img
                        src="src/assets/images/44_PersonasyTecnología__MG_2251.jpg" class="img-fluid mb-3"
                        alt="Redes Sociales">
                    <h3 class="text-center">Redes Sociales</h3>
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

        <foot1 />

    </div>
</template>

