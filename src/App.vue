
<template>

  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="#" target="_blank" id="brand">
           Roadmaps
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="btn btn-outline-dark" to="/login" id="sign_in_nav">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-dark" to="/">Sign up</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block1">
          <img src="D:/5th sem/Advanced Web Development/Roadmap/roadmap.jpg" alt="">
        </div>
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Iceberg&display=swap');
#brand
{
    font-family: 'Iceberg', cursive;
          font-size: 50px;
      color: black;
}
#sign_in_nav
{
      
      margin-right: 10px;
}
</style> 