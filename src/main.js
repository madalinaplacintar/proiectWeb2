import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from'vue-router'
import FormSearch from '@/components/FormSearch.vue'
import fisrtPage from '@/components/1stpage.vue'


import './assets/main.css'
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const vuetify = createVuetify({
    components,
    directives,
  });
  

import {registerPlugins} from "@/plugins";

const router=createRouter({
  history: createWebHistory(),
  routes: [
    // {path:'/', name:'Home', component: App},
    {path:'/search', name:'Search', component: FormSearch},
    {path:'/', name:'FirstPage', component: fisrtPage},
  ]
})
const app= createApp(App);
registerPlugins(app);

createApp(App)
.use(router)
.use(vuetify)
.mount("#app");

