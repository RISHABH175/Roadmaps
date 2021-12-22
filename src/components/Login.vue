<template>
  <div class="vue-tempalte">
     <div class="vertical-center" >
     <div class="inner-block1" >
     </div>
    <div class="inner-block" >
    <form v-on:submit.prevent="checkCred">
      <h3>Login</h3>

      <div class="form-group">
        <label>Email address</label>
        <input
          type="email"
          class="form-control form-control-lg"
          v-model="form.email"
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          class="form-control form-control-lg"
          v-model="form.password"
        />
      </div>

      <button
        type="submit"
        class="btn btn-dark btn-lg btn-block"
        style="margin-bottom: 20px"
      >
        Login
      </button>
      <p class="forgot-password text-right">
        New User 
        <router-link :to="{ name: 'signup' }">sign up?</router-link>
      </p>
    </form>
  </div>
  </div>
  </div>
</template>
<script>
import axios from "axios";
import router from "../router/index";
//import 'bootstrap/dist/css/bootstrap.min.css';
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
        console.log(response);
        if (response.data.c == 1) {
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
