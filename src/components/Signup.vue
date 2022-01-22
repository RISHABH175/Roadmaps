<template>
  <div class="vue-tempalte">
    <div class="vertical-center">
      <div class="inner-block1"></div>
      <div class="inner-block">
        <form v-on:submit.prevent="createUser">
          <h3 style="color: black">Sign Up</h3>

          <div class="form-group">
            <label style="color: black">Full Name</label>
            <input
              type="text"
              id="fullName"
              class="form-control form-control-lg"
              v-model="form.name"
            />
          </div>

          <div class="form-group">
            <label style="color: black">Email address</label>
            <input
              type="email"
              id="email"
              class="form-control form-control-lg"
              v-model="form.email"
            />
          </div>

          <div class="form-group">
            <label style="color: black">Password</label>
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

          <p class="forgot-password text-right" style="color: black">
            Already registered
            <router-link :to="{ name: 'login' }" style="color: blue"
              >sign in?</router-link
            >
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router/index";
export default {
  name: "CreateUser",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    createUser() {
      this.clearForm();
      if (
        this.form.name == "" ||
        this.form.email == "" ||
        this.form.password == ""
      ) {
        alert("Enter valid Info!!");
      } else {
        axios
          .post("http://localhost:3001/signup", this.form)
          .then((response) => {
            console.log(response);
            if (response.status == 200) {
              router.push({ path: "/login" });
            }
          });
      }

      // .then(() => {

      //            })
      //            .catch(() => {

      //                // error.response.status Check status code
      //            }).finally((req,res) => {
      //                //Perform action in always
      //                if(res.status()==200){
      //                 this.$router.push({path:'/login'});
      //                }
      //            });
    },
    clearForm() {
      this.firstName = "";
      this.password = "";
      this.email = "";
    },
  },
};
</script>
<style scoped>
</style>
