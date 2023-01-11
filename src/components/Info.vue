<script >
export default {
    name:"Info",
}
</script>
<template>
    <v-app>
    <router-view></router-view>
    <header>
    <div class="backGroundHeader">
    <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
      <h1 >About this project</h1>
      </div>
    </div>
    </header>
   <v-card>
    <div>
            <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
                <div>
                    <h3 class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">Here we have the starting page</h3>
                    <h3 class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">This one is form component FisrtPage</h3>        
                    <h3 class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">Our component has a button that will redirectionate us to FormSearch component</h3>
                    <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
                            <img src="../assets/primaPag.png"/>
                            <img src="../assets/butonPrimaPag.png"/>
                 </div>     
                    <h3 class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
                        Second page contains the Apple Music Search API </h3>
                        <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
                            <img src="../assets/api.png"/>
                       </div>     
                       <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
                            <img src="../assets/fc1.png"/>
                            <img src="../assets/fc2.png"/>
                       </div>   
                       <h2 class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
                      And here we got the current page that contains the about info </h2>
                      <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
                    <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
                        <div>
                        <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height"><h4>Project realised by Placintar Alina Madalina</h4></div>
                        <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height"><h4>234/2</h4></div>
                        <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height"> <h4>2022-2023</h4></div>
                    </div>
                    </div>
                </div>   
                </div>
                </div>
    </div>
   </v-card>
</v-app>
</template>
<style>
v-app{
    background-color: #363664;
}
img{
  width: 700px;
  height: 400px;
}
.footer > div{
    padding-top: 20px;
   display:inline-block;
   color: blueviolet;
}
</style>