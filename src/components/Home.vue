<template>
  <div class="main">
    <header>
      <a class="logo" href="/home"><h1 class="logo">GUIDEGRID</h1></a>
      <nav>
        <ul class="nav__links">
          <li><a href="/home">Home</a></li>
          <li>
            <a @click="$router.push({ path: '/Privacy' })">Privacy Policy</a>
          </li>
          <li>
            <a @click="$router.push({ path: '/disclaimer' })">Disclaimer</a>
          </li>
          <li>
            <a @click="$router.push({ path: '/terms' })"
              >Terms and Conditions</a
            >
          </li>
        </ul>
      </nav>
      <div class="cta1">
        <a class="cta" v-on:click="$router.push({ path: '/search' })"
          ><i class="fas fa-search"></i> Search</a
        >

        <a class="cta" v-on:click="$router.push({ path: '/createNew' })"
          ><i class="fas fa-plus-circle"></i> Create new</a
        >
        <a class="cta" href="#"
          ><i class="far fa-user-circle"></i>{{ userNamedisplay }}</a
        >
        <a class="cta" v-on:click="$router.push({ path: '/login' })"
          ><i class="fas fa-sign-out-alt"></i> Logout</a
        >
        <p id="mobile" class="menu cta">Menu</p>
      </div>
    </header>
    <div class="overlay">
      <a class="close">&times;</a>
      <div class="overlay__content">
        <li><a href="#">Home</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms and Conditions</a></li>
        <li><a href="#">Disclaimer</a></li>
      </div>
    </div>

    <div class="container">
      <div class="hero">
        <img
          src="../components/logo.png"
          alt="Hello!!"
          style="margin-top: 150px"
        />

        <h5 style="font-size: 30px">Best Place For Your Career Growth</h5>
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stop-color="#9900efff"></stop>
              <stop offset="95%" stop-color="#32ded4ff"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 59.705128205128204,219.6871794871795 119.41025641025641,239.37435897435898 200,222 C 280.5897435897436,204.62564102564102 382.06410256410254,150.18974358974359 485,169 C 587.9358974358975,187.81025641025641 692.3333333333334,279.8666666666667 757,273 C 821.6666666666666,266.1333333333333 846.6025641025642,160.34358974358972 924,154 C 1001.3974358974358,147.65641025641028 1131.2564102564104,240.75897435897434 1226,265 C 1320.7435897435896,289.24102564102566 1380.371794871795,244.62051282051283 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>

        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div style="margin-top: 50px">
      <h3 style="margin-bottom: 20px">Welcome to GuideGrid</h3>
      <h4 style="margin-bottom: 40px">
        GuideGride is a community effort to create roadmaps, guides and other
        educational content to help guide the developers in picking up the path
        and guide their learnings.
      </h4>
      <div id="row1" class="row"></div>
    </div>
    <footer>
      <div class="main-content">
        <div class="center box">
          <h2>Address</h2>
          <div class="content">
            <div class="place">
              <span class="fas fa-map-marker-alt"></span>
              <span class="text">Bangalore</span>
            </div>
          </div>
        </div>
        <div class="right box">
          <h2>Contact us</h2>
          <div class="content">
            <div class="phone">
              <span class="fas fa-phone-alt"></span>
              <span class="text">+089-765432100</span>
            </div>
            <div class="email">
              <span class="fas fa-envelope"></span>
              <span class="text">abcd@example.com</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <center>
          <span class="credit">Created By Team 4 <a href="#"></a> | </span>
          <span class="far fa-copyright"></span
          ><span> 2022 All rights reserved.</span>
        </center>
      </div>
    </footer>
  </div>
  <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script> -->
</template>

<script>
// import Vue from "vue";
//import Login from "./Login.vue";
import axios from "axios";
export default {
  name: "HomePage",
  data() {
    return {
      logo: "logo.png",
      userNamedisplay: "",
      doRender: false,
    };
  },
  components: {},
  methods: {},
  beforeCreate() {
    console.log("Hey");
    // console.log(document.cookie);
    // const res = decodeURIComponent(document.cookie);
    // const res1 = "userName1=";
    // const res2 = res.indexOf(res1);
  },
  created() {
    // Vue.prototype.userName = this.$userName;
    // this.userNamedisplay = " " + this.$userName;
  },
  beforeMount(){
    axios
      .post("http://localhost:3001/homeDisplay", { info: "Info" })
      .then((resp) => {
        let len = resp.data.length;
        if (len == 0) {
          document.getElementById("row1").innerHTML =
            "Roadmaps Unavailable";
        } else {
          document.getElementById("row1").innerHTML = "";
          for (var i = 0; i < len; i++) {
            document.getElementById(
              "row1"
            ).innerHTML += `<div  class='card'><p style="  color:white;">Name: ${resp.data[i].mapN}</p><p style="  color:white;">Author Name: ${resp.data[i].mapA}</p><p style="  color:white;">Tag: ${resp.data[i].mapT}</p><button><a href="http://localhost:8080/View?id=${i}&mapN=${resp.data[i].mapN}">Click!</a></button></div>`;
            //document.getElementById(`card${i}`).addEventListener("click",this.selectLog(i));
          }
        }
      });
  },
  mounted() {
    
    this.userNamedisplay = localStorage.getItem("username2");
    const doc = document;
    const menuOpen = doc.getElementById("mobile");
    const menuClose = doc.querySelector(".close");
    const overlay = doc.querySelector(".overlay");

    menuOpen.addEventListener("click", () => {
      console.log("clicked");
      overlay.classList.add("overlay--active");
    });

    menuClose.addEventListener("click", () => {
      overlay.classList.remove("overlay--active");
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@900&display=swap");
h3 {
  font-size: 30px;
  text-align: center;
  font-family: "Cinzel Decorative", cursive;
}

h4 {
  text-align: center;
}
button {
  margin-left: 20px;
  margin-top: 20px;
  padding: 9px 25px;
  background-color: rgb(103, 64, 245);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease 0s;
  white-space: nowrap;
}
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding in columns */
.row {
  margin: 0 -5px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the counter cards */
.card {
  z-index: 10;
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 16px;
  text-align: center;
  border: 5px solid white;
  background-color: rgb(36, 35, 35);
  color: white;
}

/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

@import url("https://fonts.googleapis.com/css2?family=Audiowide&display=swap");

h1 {
  font-family: "Cinzel Decorative", cursive;
  text-align: center;
}
header {
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
  background-color: black;
  position: fixed;
}

.logo {
  cursor: pointer;
  text-decoration: none;
  font-family: "Audiowide", cursive;
  font-size: 30px;
}
.logo:hover {
  cursor: pointer;
  text-decoration: none;
  font-family: "Audiowide", cursive;
  font-size: 30px;
}
a {
  text-decoration: none;
}
.nav__links a,
.cta,
.overlay__content a {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  color: #edf0f1;
  text-decoration: none;
}

.cta1 {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

.nav__links {
  list-style: none;
  display: flex;
}

.nav__links li {
  padding: 0px 20px;
  display: inline-block;
  white-space: nowrap;
}

.nav__links li a {
  transition: color 0.3s ease 0s;
}

.nav__links li a:hover {
  color: white;
  background-color: #000;
  font-size: 15px;
  border-bottom: 5px solid rgb(103, 64, 245);
}

.cta {
  padding: 9px 25px;
  background-color: rgb(103, 64, 245);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease 0s;
  white-space: nowrap;
}

.cta:hover {
  background-color: black;
  color: white;
  text-decoration: none;
}

/* Mobile Nav */

.menu {
  display: none;
}

.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: #24252a;
  overflow-x: hidden;
  transition: width 0.5s ease 0s;
}

.overlay--active {
  width: 100%;
}

.overlay__content {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.overlay a {
  padding: 15px;
  font-size: 36px;
  display: block;
  transition: color 0.3s ease 0s;
}

.overlay a:hover,
.overlay a:focus {
  color: #0088a9;
}
.overlay .close {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
  color: #edf0f1;
}

@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  }
  .overlay .close {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}

@media only screen and (max-width: 800px) {
  header {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5%;
    background-color: black;
    position: fixed;
  }
  .nav__links,
  .cta {
    display: none;
  }
  .menu {
    display: initial;
  }
}

.main {
  background-color: black;
  width: 100%;
}
.hero {
  background-color: black;
  text-align: center;
}

@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap");
* {
  margin: 0;
  padding: 0;
  color: #d9d9d9;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.content1 {
  position: relative;
  margin: 130px auto;
  text-align: center;
  padding: 0 20px;
}
.content1 .text {
  font-size: 2.5rem;
  font-weight: 600;
  color: #202020;
}
.content1 .p {
  font-size: 2.1875rem;
  font-weight: 600;
  color: #202020;
}
footer {
  position: relative;
  bottom: 0;
  margin: auto;
  width: 100%;
  background: black;
}
.main-content {
  display: flex;
}
.main-content .box {
  flex-basis: 50%;
  padding: 10px 20px;
}
.box h2 {
  font-size: 1.125rem;
  font-weight: 600;
  text-transform: uppercase;
}
.box .content {
  margin: 20px 0 0 0;
  position: relative;
}
.box .content:before {
  position: absolute;
  content: "";
  top: -10px;
  height: 2px;
  width: 100%;
  background: #1a1a1a;
}
.box .content:after {
  position: absolute;
  content: "";
  height: 2px;
  width: 15%;
  background: rgb(103, 64, 245);
  top: -10px;
}
.left .content p {
  text-align: justify;
}
.left .content .social {
  margin: 20px 0 0 0;
}
.left .content .social a {
  padding: 0 2px;
}
.left .content .social a span {
  height: 40px;
  width: 40px;
  background: #1a1a1a;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  border-radius: 5px;
  transition: 0.3s;
}
.left .content .social a span:hover {
  background: #f12020;
}
.center .content .fas {
  font-size: 1.4375rem;
  background: #1a1a1a;
  height: 45px;
  width: 45px;
  line-height: 45px;
  text-align: center;
  border-radius: 50%;
  transition: 0.3s;
  cursor: pointer;
}
.center .content .fas:hover {
  background: #f12020;
}
.center .content .text {
  font-size: 1.0625rem;
  font-weight: 500;
  padding-left: 10px;
}
.center .content .phone {
  margin: 15px 0;
}
.right form .text {
  font-size: 1.0625rem;
  margin-bottom: 2px;
  color: #656565;
}
.right form .msg {
  margin-top: 10px;
}
.right form input,
.right form textarea {
  width: 100%;
  font-size: 1.0625rem;
  background: #151515;
  padding-left: 10px;
  border: 1px solid #222222;
}
.right form input:focus,
.right form textarea:focus {
  outline-color: #3498db;
}
.right form input {
  height: 35px;
}
.right form .btn {
  margin-top: 10px;
}
.right form .btn button {
  height: 40px;
  width: 100%;
  border: none;
  outline: none;
  background: #f12020;
  font-size: 1.0625rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
}
.right form .btn button:hover {
  background: #000;
}
.bottom center {
  padding: 5px;
  font-size: 0.9375rem;
  background: #151515;
}
.bottom center span {
  color: #656565;
}
.bottom center a {
  color: #f12020;
  text-decoration: none;
}
.bottom center a:hover {
  text-decoration: underline;
}
@media screen and (max-width: 900px) {
  footer {
    position: relative;
    bottom: 0px;
  }
  .main-content {
    flex-wrap: wrap;
    flex-direction: column;
  }
  .main-content .box {
    margin: 5px 0;
  }
}
.container {
  min-width: 100%;
}
.container h2 {
  font-family: "Cookie", cursive;
  font-size: 80px;
}
.container span {
  position: fixed;
  bottom: -50px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: linear-gradient(-135deg, purple, #00ffff);
  animation: animate 10s linear infinite;
}
.container span:nth-child(1) {
  left: 0;
  animation-delay: 0.6s;
  height: 50px;
  width: 50px;
}
.container span:nth-child(2) {
  left: 10%;
  animation-delay: 3s;
  height: 60px;
  width: 60px;
}
.container span:nth-child(3) {
  left: 20%;
  animation-delay: 2s;
  height: 80px;
  width: 80px;
}
.container span:nth-child(4) {
  left: 30%;
  animation-delay: 5s;
}
.container span:nth-child(5) {
  left: 40%;
  animation-delay: 1s;
}
.container span:nth-child(6) {
  left: 50%;
  animation-delay: 7s;
  height: 90px;
  width: 90px;
}
.container span:nth-child(7) {
  left: 60%;
  animation-delay: 6s;
  height: 120px;
  width: 120px;
}
.container span:nth-child(8) {
  left: 70%;
  animation-delay: 8s;
}
.container span:nth-child(9) {
  left: 80%;
  animation-delay: 6s;
  height: 50px;
  width: 50px;
}
.container span:nth-child(10) {
  left: 90%;
  animation-delay: 4s;
}
@keyframes animate {
  0% {
    bottom: 0%;
    margin-left: 90px;
    margin-right: 0px;
  }
  20% {
    bottom: 20%;
    margin-left: 0px;
    margin-right: 90px;
  }
  40% {
    bottom: 40%;
    margin-left: 90px;
    margin-right: 0px;
  }
  60% {
    bottom: 60%;
    margin-left: 0px;
    margin-right: 90px;
  }
  80% {
    bottom: 80%;
    margin-left: 90px;
    margin-right: 0px;
  }
  100% {
    bottom: 100%;
    margin-left: 0px;
    margin-right: 90px;
  }
}
</style>
