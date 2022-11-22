<template>
<header> 
    <div class="musicHeader">
        <h1>
        Music
        </h1>
    </div>  
    <div class="search">
        <input type="text" placeholder="Search.."/>
    </div>  
</header>
<body>
 <div class="footer">
    <div class="three-inline-buttons">
        <p>
            <a class="button" href="#">Listen now</a>
            <a class="button" href="#">Browse</a>
            <a class="button" href="#">Library</a>
        </p>
    </div></div>  

</body>    


</template>


<script >
export default {
    name:"Menu"
}
</script>
<style>
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
