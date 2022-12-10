<script >
 
export default {
    name:"fisrtPage"
}
</script>
<template>
    <v-app>
        <v-main>
    <header>
        <div>
       <h1 class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height"> Welcome to my music App</h1>
            <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
                <img src="../assets/music-logo.png"/>
            </div>
    </div>
    </header>
    <body>
    <div class="music">
        <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
        <div class="bar">.</div>
        <div class="bar">.</div>
        <div class="bar">.</div>
        <div class="bar">.</div>
        <div class="bar">.</div>
        <div class="bar">.</div>
        <div class="bar">.</div>
        <div class="bar">.</div>
        <div class="bar">.</div>
        <div class="bar">.</div>
    </div>    </div>
<div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
   <v-btn 
   variant="flat"
   color="black" >
     <router-link to="/search"> Get started</router-link>
    </v-btn>
</div>    
</body>
</v-main>
</v-app>
</template>
<style scoped>
v-app{
    background-color: #363664;
}
div{
    align-items: center;
}
h1{
    color: rgb(183, 125, 161);
}
body{
    background-color: #000014;
}
header{
    background-color: #000014;
}
.music .bar{
    width: 12px;
    border-radius: 10px;
    background: #fff;
    animation: loader 1.5s ease-in-out infinite;
}
.music .bar:nth-child(1){
background: purple;
animation-delay: 1s;
}
.music .bar:nth-child(2){
background: crimson;
animation-delay: 8s;
}
.music .bar:nth-child(3){
background: deeppink;
animation-delay: 6s;
}
.music .bar:nth-child(4){
background: orange;
animation-delay: 4s;
}
.music .bar:nth-child(5){
background: gold;
animation-delay: 2s;
}
.music .bar:nth-child(6){
    background: gold;
animation-delay: 2s;
}
.music .bar:nth-child(7){
    background: orange;
animation-delay: 4s;
}
.music .bar:nth-child(8){
    background: deeppink;
animation-delay: 6s;
}
.music .bar:nth-child(9){
    background: crimson;
animation-delay: 8s;
}
.music .bar:nth-child(10){
background: purple;
animation-delay: 1s;
}


@keyframes Loader {
    0%, 100%{
        height: 2px;
    }
    50%{
        width: 80px;
    }
}
</style>