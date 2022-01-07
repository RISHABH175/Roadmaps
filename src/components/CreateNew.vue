<template>
  <div class="create">
    <!-- <button type="button" @click="$refs.chart.add({id: +new Date(), x: 10, y: 10, name: 'New', type: 'start'})">
            Add
        </button>
        <button type="button" @click="$refs.chart.remove()">
            Del
        </button>
        <button type="button" @click="$refs.chart.editCurrent()">
            Edit
        </button>
        <button type="button" @click="$refs.chart.save()">
            Save
        </button>
        <flowchart :nodes="nodes" :connections="connections" @editnode="handleEditNode"
                    @dblclick="handleDblClick" @editconnection="handleEditConnection" 
                    @save="handleChartSave" ref="chart">
        </flowchart> -->
    <div class="tool-wrapper">
      <form v-on:submit.prevent="addNode">
        <select v-model="newNodeType">
          <option
            v-for="(item, index) in nodeCategory"
            :key="index"
            :value="index"
          >
            {{ item }}
          </option>
        </select>
        <input
          type="text"
          v-model="newNodeLabel"
          placeholder="Input node label"
        />

        <button>ADD</button>
      </form>
      <form v-on:submit.prevent="save">
        <input
          id="roadmapName"
          type="text"
          placeholder="Roadmap Name"
          maxlength="15"
        />
        <select id="mapTags">
          <option
            v-for="(item1, index1) in mapTag"
            :key="index1"
            :value="index1"
          >
            {{ item1 }}
          </option>
        </select>
        <button>Save</button>
      </form>
    </div>
    <SimpleFlowchart
      :scene.sync="data12"
      @nodeClick="nodeClick"
      @nodeDelete="nodeDelete"
      @linkBreak="linkBreak"
      @linkAdded="linkAdded"
      @canvasClick="canvasClick"
      :height="800"
    ></SimpleFlowchart>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import axios from "axios";
import Vue from "vue";
// import FlowChart from "flowchart-vue";
import cors from "cors";
// Vue.use(FlowChart);
Vue.use(cors);
import SimpleFlowchart from "vue-simple-flowchart";
import "vue-simple-flowchart/dist/vue-flowchart.css";
Vue.use(SimpleFlowchart);
export default {
  name: "Create",
  //   data: function () {
  //     return {
  //       nodes: [
  //         //    {id: 1, x: 140, y: 270, name: 'JS', type: 'JS',},
  //         //   // You can add any generic fields to node, for example: description
  //         //   // It will be passed to @save, @editnode
  //         //   {id: 2, x: 540, y: 270, name: 'End', type: 'end', description: 'Im here'},
  //       ],
  //       connections: [
  //         //     {
  //         //     source: {id: 1, position: 'right'},
  //         //     destination: {id: 2, position: 'left'},
  //         //     id: 1,
  //         //     type: 'pass',
  //         //   },
  //       ],
  //     };
  //   },
  data() {
    return {
      data12: {
        centerX: 1024,
        centerY: 140,
        scale: 1,
        nodes: [
          //   {
          //     id: 2,
          //     x: -700,
          //     y: -69,
          //     type: "Action",
          //     label: "test1",
          //   },
          //   {
          //     id: 4,
          //     x: -357,
          //     y: 80,
          //     type: "Script",
          //     label: "test2",
          //   },
          //   {
          //     id: 6,
          //     x: -557,
          //     y: 80,
          //     type: "Rule",
          //     label: "test3",
          //   },
        ],
        links: [
          //   {
          //     id: 3,
          //     from: 2, // node id the link start
          //     to: 4, // node id the link end
          //   },
        ],
      },
      newNodeType: 0,
      newNodeLabel: "",
      nodeCategory: ["header", "main", "sub", "advanced"],
      mapTag: ["Beginner", "Intermediate", "Advanced"],
    };
  },
  methods: {
    // handleChartSave(nodes, connections) {
    //   axios
    //     .post("http://localhost:3001/createNew", { nodes, connections })
    //     .then((resp) => {
    //       this.nodes = resp.data.nodes;
    //       this.connections = resp.data.connections;
    //       // Flowchart will refresh after this.nodes and this.connections changed
    //       console.log(this.nodes);
    //       console.log(this.connections);
    //     });
    // },
    // handleEditNode(node) {
    //   this.nodeForm.target = node;
    //   this.nodeDialogVisible = true;
    // },
    // handleEditConnection(connection) {},
    // handleDblClick(position) {
    //   this.$refs.chart.add({
    //     id: +new Date(),
    //     x: position.x,
    //     y: position.y,
    //     name: "New",
    //     type: "operation",
    //     approvers: [],
    //   });
    // },
    canvasClick(e) {
      console.log("canvas Click, event:", e);
    },
    addNode() {
      let maxID = Math.max(
        0,
        ...this.data12.nodes.map((link) => {
          return link.id;
        })
      );
      this.data12.nodes.push({
        id: maxID + 1,
        x: -400,
        y: 50,
        type: this.nodeCategory[this.newNodeType],
        label: this.newNodeLabel ? this.newNodeLabel : `test${maxID + 1}`,
      });
    },
    nodeClick(id) {
      console.log("node click", id);
    },
    nodeDelete(id) {
      console.log("node delete", id);
    },
    linkBreak(id) {
      console.log("link break", id);
    },
    linkAdded(link) {
      console.log("new link added:", link);
    },
    save() {
      // console.log(this.data12.nodes);
      // console.log(this.data12.links);
      // console.log(document.getElementById('roadmapName').value)
      // console.log(document.getElementById('mapTags').value);
      console.log(this.mapTag[document.getElementById("mapTags").value]);
      axios
        .post("http://localhost:3001/createNew", {
          data123: this.data12,
          mapN: document.getElementById("roadmapName").value,
          mapT: this.mapTag[document.getElementById("mapTags").value],
        })
        .then((resp) => {
          if (resp.data.c == 1) {
            alert("Roadmap Saved");
          }
        });
    },
  },
  components: {
    SimpleFlowchart,
  },
};
</script>

<style scoped>
.create {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  overflow: hidden;
  height: 1000px;
}
.tool-wrapper {
  position: relative;
}
/* .create {
  height: 100%;
  width: 100%;
  background: white;
} */
#toolbar {
  margin-bottom: 10px;
}

.title {
  margin-top: 10px;
  margin-bottom: 0;
}

.subtitle {
  margin-bottom: 10px;
}

#toolbar > button {
  margin-right: 4px;
}

.container {
  width: 800px;
  margin: auto;
}
</style>