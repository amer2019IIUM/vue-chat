<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
          <h2 class="teal-text">Welcome</h2>
         <form @submit.prevent="enterChat">
             <label for="name">Enter your name:</label>
            <input type="text" name="name" v-model="name">
            <p>{{feeback}}</p>
            <button class="btn teal">Start</button>
          </form>
      </div>
    </div>
  </div>
</template>
 

 <script>
 export default {
   name:"Welcome",
   data() {
     return {
       name:null,
       feeback:null
     }
   },
   methods: {
     enterChat(){
       if(this.name==null){
         this.feeback="Please enter your name"
       }
       else{
         this.$router.push({name:'Chat', params:{name:this.name}})
       }

     }
   },
 }
 </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.welcome{
  width: 300px;
}
</style>
