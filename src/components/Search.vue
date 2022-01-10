<template>
  <div class="search-main">
    <h1 style="color:white">Enter the Domain</h1>
    <input
      id="requestChart"
      type="text"
      maxlength="25"
      placeholder="Search Roadmaps..."
    />
    <button v-on:click="logging()">Search</button>
    <div id="searchRes"></div>
  </div>
</template>

<script>
import axios from "axios";
//import router from '../router/index'
export default {
  name: "SearchPart",
  data() {
    return {};
  },
  methods: {
    selectLog: function(val) {
      console.log("Clicked "+val);
    },
    logging() {
      let searchVal = document.getElementById("requestChart").value;
      //console.log(searchVal);
      let len;
      axios
        .post("http://localhost:3001/searchChart", { searchVal1: searchVal })
        .then((resp) => {
          // console.log(resp.data[0].mapN+" "+resp.data[0].mapT)
           len = resp.data.length;
          if (len == 0) {
            document.getElementById("searchRes").innerHTML =
              "Roadmaps Unavailable";
          } else {
            document.getElementById("searchRes").innerHTML = "";
            for (var i = 0; i < len; i++) {
              document.getElementById(
                "searchRes"
              ).innerHTML += `<div id="card${i}" class='blocks'><p style="  color:white;">Name: ${resp.data[i].mapN}</p><p style="  color:white;">Author Name: ${resp.data[i].mapA}</p><p style="  color:white;">Tag: ${resp.data[i].mapT}</p><button><a href="http://localhost:8080/View?id=${i}&mapN=${resp.data[i].mapN}">Click!</a></button></div>`;
              //document.getElementById(`card${i}`).addEventListener("click",this.selectLog(i));
            }
          }
        });
        
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@900&display=swap');
.search-main {
 width: 50%;
  height: 100%;
  background-color: black;

  margin: auto;
}

button {
  margin-left:20px;
  margin-top:20px;
  padding: 9px 25px;
  background-color: rgb(103, 64, 245);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease 0s;
  white-space: nowrap;
}

#searchRes {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color:white;

  gap: 2rem;
  margin-top: 100px;
}

.blocks {
   display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 250px;
  height: 250px;
  border-width: 2px;
  color:white;
   
  
  border-color: purple;
  border-radius: 15px;
  border-style: solid;
  padding: 10px;
}

a{
  
  color:white;
  text-decoration:none;
}
a:hover{
  font-size: 20px;
  color:white;
  text-decoration:none;
}

#requestChart
{
  color: black;
}
h1{
  font-family: 'Cinzel Decorative', cursive;
  font-size: 80px;
}
</style>
