<template>
  <div class="view">
      <h1>FlowChart</h1>
       <SimpleFlowchart
      :scene.sync="data12"
      :height="800"
    ></SimpleFlowchart>
  </div>
</template>

<script>
import SimpleFlowchart from "vue-simple-flowchart";
import "vue-simple-flowchart/dist/vue-flowchart.css";
import axios from "axios"
export default {
    data(){
        return{
            data12:{
                centerX: 1024,
                centerY: 140,
                scale: 1,
                nodes:[],
                links:[]
            }
        }
    },
    components:{
        SimpleFlowchart
    },
    methods:{
        ret(){
            axios.post("http://localhost:3001/View",{con:'Connection Made'}).then((res)=>{
                this.data12.nodes = res.data.chart.nodes;
                this.data12.links = res.data.chart.links;
                console.log(res.data.chart)
            })
        }
    },
    beforeMount(){
        this.ret();
    }
}
</script>

<style scoped>
.view {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  overflow: hidden;
  height: 800px;
}
.tool-wrapper {
  position: relative;
}
</style>