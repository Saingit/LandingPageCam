import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/custom.css'
import './assets/js/bootstrap.bundle.min.js'


import { createRouter, createWebHashHistory } from 'vue-router'




// Creando Objeto de rutas
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Home.vue'),
    meta: { title: 'Inicio' }
  },

  {
    path: '/quienes',
    name: 'quienes',
    component: () => import('./views/quienes.vue'),
    meta: { title: '¿Que hacemos?' }
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: () => import('./views/cursos.vue'),
    meta: { title: 'Cursos' }
  },
  {
    path: '/diplomados',
    name: 'diplomados',
    component: () => import('./views/diplomados.vue'),
    meta: { title: 'Diplomados' }
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('./views/contacto.vue'),
    meta: { title: 'Contacto' }
  }

]
// Creando Objeto de rutas

// Crear objeto rutas de vue router -- objeto de VR

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// Crear objeto rutas de vue router -- objeto de VR


const app = createApp(App)

app.use(router)
app.mount('#app')
