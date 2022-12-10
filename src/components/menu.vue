<script>
// import { mdiMusicCircle } from '@mdi/js';   
import FormSearchVue from './FormSearch.vue'; 
export default {
    name:"Menu"
}
</script>
<template>
    <!--vuetify 
    
    
    -->
    <v-app>  
      
    <v-main>     
<header> 
    <div class="musicHeader">
        <h1>
        Music Here
        </h1>
    </div>  

</header>
<body>
<div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
      <v-btn variant="flat"
      color="pink">
   <v-icon>mdiMusicCircle</v-icon>
        Listen now 
      </v-btn>
  
      <v-btn
        variant="flat"
        color="pink"
      >
        Browse
      </v-btn>
      
      <v-btn
        variant="flat"
        color="pink"
      >
        Library
      </v-btn>
      <v-btn>
        <span class="material-symbols-outlined">
          search
        </span>
      </v-btn>
</div>      

</body>   
</v-main> 
</v-app>

</template>



<style>
img{
  width: 150px;
  height: 150px;
}
.musicHeader{
    text-align: center;
}
.footer > div{
    padding-top: 20px;
   display:inline-block;
   color: blueviolet;
}
.search input[type=text] {
  float: right;
  /* padding: 6px; */
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
}
.three-inline-buttons .button {
    margin-left: 15px;
    margin-right: 15px;
    background-color: #af4c82;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
</style>
