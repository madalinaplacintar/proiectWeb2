import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from'vue-router'
import FormSearch from '@/components/FormSearch.vue'
import fisrtPage from '@/components/1stpage.vue'
import Info from '@/components/Info.vue'
import { GridLayout, GridItem } from "vue-grid-layout" 


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
    {path:'/search', name:'Search', component: FormSearch},
    {path:'/', name:'FirstPage', component: fisrtPage},
    {path:"/info", name:'Info', component: Info}
  ]
})
const app= createApp(App);
registerPlugins(app);

createApp(App)
.use(router)
.use(vuetify)
.mount("#app");

