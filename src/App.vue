<script>
import menu1 from './components/menu1.vue'
import menu2 from './components/menu2.vue'
import menu3 from './components/menu3.vue'
import carousel from './components/carousel.vue'
import foot1 from './components/foot1.vue'
export default {
    name: "App",
    components: {
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
        <router-view></router-view>
        <foot1 />
    </div>
</template>

