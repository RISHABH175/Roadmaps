<template>
  <div class="vue-tempalte">
     <div class="vertical-center" >
     <div class="inner-block1" >
     </div>
    <div class="inner-block" >
    <form v-on:submit.prevent="checkCred">
      <h3 style="color:black" >Login</h3>

      <div class="form-group">
        <label style="color:black">Email address</label>
        <input
          type="email"
          class="form-control form-control-lg"
          v-model="form.email"
        />
      </div>

      <div class="form-group">
        <label style="color:black">Password</label>
        <input
          type="password"
          class="form-control form-control-lg"
          v-model="form.password"
        />
      </div>

      <button
        type="submit"
        class="btn btn-dark btn-lg btn-block"
        style="margin-bottom: 20px color:black"
      >
        Login
      </button>
      <p class="forgot-password text-right " style="color:black">
        New User 
        <router-link :to="{ name: 'signup' }" style="color:blue">sign up?</router-link>
      </p>
    </form>
  </div>
  </div>
  </div>
</template>
<script>
import axios from "axios";
import router from "../router/index";
// import Vue from 'vue';
//import 'bootstrap/dist/css/bootstrap.min.css';
// const app1 = Vue.createApp({});

export default {
  name: "loginInfo",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    checkCred() {
      //this.clearForm();
      axios.post("http://localhost:3001/login", this.form).then((response) => {
        //console.log(response);
        if (response.data.c == 1) {
          // Vue.prototype.$userName = response.data.name1;
          // app1.config.globalProperties.userName1 = response.data.name1 
          // document.cookie ="userName1="+response.data.name1+"; path='/home'";
          localStorage.setItem("username2",response.data.name1);
          router.push({ path: "/home" });
          //alert("Login done!!")
        }
        else{
            alert("Invalid credentials!");
        }
      });
    },
  },
};
</script>
