<template>
  <div class="vue-tempalte">
    <form v-on:submit.prevent="createUser">
      <h3>Sign Up</h3>

      <div class="form-group">
        <label>Full Name</label>
        <input type="text" id="fullName" class="form-control form-control-lg" v-model="form.name"/>
      </div>

      <div class="form-group">
        <label>Email address</label>
        <input type="email" id="email" class="form-control form-control-lg" v-model="form.email" />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          id="password"
          class="form-control form-control-lg"
          v-model="form.password"
        />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Sign Up
      </button>

      <p class="forgot-password text-right">
        Already registered
        <router-link :to="{ name: 'login' }">sign in?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreateUser",
  data() {
    return {
     form: {
                name: '',
                email: '',
                password:''
            }
  }
  },
  methods: {
    createUser() {
     
      this.clearForm();
      axios.post("http://localhost:3001/signup", this.form)
      .then(() => {
                     //Perform Success Action
                 })
                 .catch(() => {
                     // error.response.status Check status code
                 }).finally(() => {
                     //Perform action in always
                 });
    },
    clearForm() {
      this.firstName = "";
      this.password = "";
      this.email = "";
    },
  },
};
</script>