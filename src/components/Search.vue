<template>
  <div class="search-main">
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
export default {
  name: "SearchPart",
  data() {
    return {};
  },
  methods: {
    logging() {
      let searchVal = document.getElementById("requestChart").value;
      //console.log(searchVal);
      axios
        .post("http://localhost:3001/searchChart", { searchVal1: searchVal })
        .then((resp) => {
          console.log(resp.data[0].mapN+" "+resp.data[0].mapT)
          let len = resp.data.length;
          if (len == 0) {
            document.getElementById("searchRes").innerHTML =
              "Roadmaps Unavailable";
          } else {
            document.getElementById("searchRes").innerHTML = "";
            for (var i = 0; i < len; i++) {
              document.getElementById(
                "searchRes"
              ).innerHTML += "<div class='blocks'><p> Roadmap: " + resp.data[i].mapN +"</p><p> Tag: "+ resp.data[i].mapT +"</div>";
            }
          }
        });
    },
  },
};
</script>

<style>
.search-main {
  width: 100%;
  height: 100%;
  background-color: black;
}

button {
  padding: 9px 25px;
  background-color: rgb(103, 64, 245);
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
  color: white;
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
  border-color: antiquewhite;
  border-radius: 15px;
  border-style: solid;
  padding: 10px;
}
</style>