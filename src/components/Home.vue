<template>
  <div class="main">
    <nav
      class="
        navbar
        fixed-top
        navbar-expand-lg navbar-dark
        bg-black
        scrolling-navbar
      "
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="http://127.0.0.1:5500/home.html"
          >Roadmaps</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="http://127.0.0.1:5500/home.html"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="About_Us.html">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Privacy_Policy.html">Privacy Policy</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="TermsAndConditions.html"
                >Terms and Condition</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Disclaimer.html">Disclaimer</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="a"
                ><i class="fas fa-search"></i> Search</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="$router.push({path:'/createNew'});"
                ><i class="fas fa-plus-circle"></i> Create new</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="far fa-user-circle"></i> Rishabh
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><a class="dropdown-item" href="#">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="hero">
        <img src="../components/logo.png" alt="Hello!!" style="margin-top: 150px" />

        <h3>About this site</h3>
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
    <footer>
      <div class="main-content">
        <div class="left box">
          <h2>About us</h2>
          <div class="content">
            <p>...</p>
            <div class="social">
              <a href="#"><span class="fab fa-facebook-f"></span></a>
              <a href="#"><span class="fab fa-twitter"></span></a>
              <a href="#"><span class="fab fa-instagram"></span></a>
              <a href="#"><span class="fab fa-youtube"></span></a>
            </div>
          </div>
        </div>
        <div class="center box">
          <h2>Address</h2>
          <div class="content">
            <div class="place">
              <span class="fas fa-map-marker-alt"></span>
              <span class="text">Vidyaranyapura,Bangalore</span>
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
          ><span> 2021 All rights reserved.</span>
        </center>
      </div>
    </footer>
  </div>
  <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script> -->
</template>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<script>
import logo from "../components/logo.png"
export default {
  name: "HomePage",
  data : {
    logo: 'logo.png'
  }
};
</script>

<style>
.main {
  background-color: black;
  width: 100%;
}
.hero {
  background-color: black;

  text-align: center;
}

li:hover {
  font-size: 20px;
  border: 5px solid lightblue;
}

@media screen and (min-width: 780px) {
  #a {
    margin-left: 800px;
  }
}


@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
*{
  margin: 0;
  padding: 0;
  color: #d9d9d9;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.content1{
  position: relative;
  margin: 130px auto;
  text-align: center;
  padding: 0 20px;
}
.content1 .text{
  font-size: 2.5rem;
  font-weight: 600;
  color: #202020;
}
.content1 .p{
  font-size: 2.1875rem;
  font-weight: 600;
  color: #202020;
}
footer{
  position:absolute;
margin: auto;
width: 100%;
  background:black;
}
.main-content{
  display: flex;
}
.main-content .box{
  flex-basis: 50%;
  padding: 10px 20px;
}
.box h2{
  font-size: 1.125rem;
  font-weight: 600;
  text-transform: uppercase;
}
.box .content{
  margin: 20px 0 0 0;
  position: relative;
}
.box .content:before{
  position: absolute;
  content: '';
  top: -10px;
  height: 2px;
  width: 100%;
  background: #1a1a1a;
}
.box .content:after{
  position: absolute;
  content: '';
  height: 2px;
  width: 15%;
  background: blue;
  top: -10px;
}
.left .content p{
  text-align: justify;
}
.left .content .social{
  margin: 20px 0 0 0;
}
.left .content .social a{
  padding: 0 2px;
}
.left .content .social a span{
  height: 40px;
  width: 40px;
  background: #1a1a1a;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  border-radius: 5px;
  transition: 0.3s;
}
.left .content .social a span:hover{
  background: #f12020;
}
.center .content .fas{
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
.center .content .fas:hover{
  background: #f12020;
}
.center .content .text{
  font-size: 1.0625rem;
  font-weight: 500;
  padding-left: 10px;
}
.center .content .phone{
  margin: 15px 0;
}
.right form .text{
  font-size: 1.0625rem;
  margin-bottom: 2px;
  color: #656565;
}
.right form .msg{
  margin-top: 10px;
}
.right form input, .right form textarea{
  width: 100%;
  font-size: 1.0625rem;
  background: #151515;
  padding-left: 10px;
  border: 1px solid #222222;
}
.right form input:focus,
.right form textarea:focus{
  outline-color: #3498db;
}
.right form input{
  height: 35px;
}
.right form .btn{
  margin-top: 10px;
}
.right form .btn button{
  height: 40px;
  width: 100%;
  border: none;
  outline: none;
  background: #f12020;
  font-size: 1.0625rem;
  font-weight: 500;
  cursor: pointer;
  transition: .3s;
}
.right form .btn button:hover{
  background: #000;
}
.bottom center{
  padding: 5px;
  font-size: 0.9375rem;
  background: #151515;
}
.bottom center span{
  color: #656565;
}
.bottom center a{
  color: #f12020;
  text-decoration: none;
}
.bottom center a:hover{
  text-decoration: underline;
}
@media screen and (max-width: 900px) {
  footer{
    position: relative;
    bottom: 0px;
  }
  .main-content{
    flex-wrap: wrap;
    flex-direction: column;
  }
  .main-content .box{
    margin: 5px 0;
  }
}
.container
{
    min-width: 100%;
}
.container h2 {
	font-family: 'Cookie', cursive;
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
	animation-delay: .6s;
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