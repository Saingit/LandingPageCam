<script>
import HelloWorld from './components/HelloWorld.vue'
import menu1 from './components/menu1.vue'
import menu2 from './components/menu2.vue'
import carousel from './components/carousel.vue'
// import footer from '@/components/footer'
export default {
  name: "App",
   components:{
   HelloWorld,
   menu1,
   menu2,
   carousel
  //  footer
 }
 
};
</script>

<template>
 <div id="app">
       <menu1/>
       <menu2/>
       <carousel/>
        <div class="contenido">
           
            <div id="contenidoPagina">
                <!-- <router-view/> -->
            </div>
        </div>
        <!-- <footer/> -->
    </div>
</template>

