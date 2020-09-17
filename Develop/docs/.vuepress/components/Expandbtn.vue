<template>
   <div class="expand-btn">
       <button @click="expandImg">{{text}}</button>
       <img :src="imgsrc" :class="{hide: expand === false}">
   </div>
</template>

<script>
   export default {
       props:{
           imgsrc: String
       },
       data(){
           return{
               text: "Show GIF",
               expand: false,
           }
       },
       methods:{
           expandImg(){
               this.expand = !this.expand
               if(this.expand){
                   this.text = "Hide GIF"
               }
               else{
                   this.text = "Show GIF"
               }
           },
       }
   }
</script>

<style scoped>
   .expand-btn{
       width: 100%;
       height: 100%;
       margin: 10px;
   }

   button{
   }

   img{
       width: 100%;
   }

   .hide{
       display: none;
   }
</style>