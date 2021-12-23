<template id="treeItem">
   <div class="card">
    <ul>
      <li v-for="(item,index) in treeData" :key="index">
        <div class="item" :class="{'line-left':index!==0,'line-right':index!=treeData.length-1}">
          <div class="item-name" :class="{'line-bottom':item.child&&item.child.length>0,'line-top':!treeFirst}">
            <div v-if="!treeFirst" class="reduce" @click="delChild(index)">-</div>
            <div>
              {{item.name}}
            </div>
            <div class="plus" @click="addChild(index)">+</div>
          </div>
        </div>
        <tree-item v-if="item.child&&item.child.length>0" :tree-data="item.child" />
      </li>
    </ul>
  </div>
</template>

<div id="app">
  
</div>
<script>
import Vue from "vue";
Vue.component('treeItem', {
  template: '#treeItem',
  props: {
    treeData: {
      type: Array,
      default: () => []
    },
    treeFirst: { 
      // Determine whether the first
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    // Add child elements
    addChild(index) {
      if (this.treeData[index].child) {
        this.treeData[index].child.push({ name: '1' })
      } else {
        this.$set(this.treeData[index], 'child', [{ 'name': '1' }])
      }
    },
    // delete child element
    delChild(index) {
      this.treeData.splice(index, 1)
    }
  }

})

new Vue({
  data() {
    return {
      treeData: [{
        name: '1',
        child: [
          {name: '2',
           child: [{ name: '1' }, {name: '2' }]
          },
          {name: '1',
           child: [{ name: '1' }, {name: '2' }]
          }
        ]
      }]
    }
  },
  methods: {
    // Drag and move
    move(e) {
      const odiv = e.currentTarget // Get the element
      // Calculate the position of the mouse relative to the element
      const disX = e.clientX-odiv.offsetLeft
      const disY = e.clientY-odiv.offsetTop
      document.onmousemove = (e) => {// The event that the mouse presses and moves
        // Subtract the position of the mouse relative to the element from the position of the mouse to get the position of the element
        const left = e.clientX-disX
        const top = e.clientY-disY
        // Bind the element position to positionX and positionY
        this.positionX = top
        this.positionY = left
        // Move the current element
        odiv.style.left = left +'px'
        odiv.style.top = top +'px'
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}).$mount('#create')
</script>

<style>
.card ul {
  display: flex;
  justify-content: center;
}
.card ul li .item {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.card ul li .item-name {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  padding: 5px;
  margin: 20px;
  background: coral;
  color: #fff;
}
.card ul li .item-name .plus {
  position: absolute;
  border: solid 1px #666;
  border-radius: 100%;
  bottom: -5px;
  width: 12px;
  height: 12px;
  line-height: 10px;
  text-align: center;
  color: #666;
  z-index: 100;
  cursor: pointer;
  margin: 0;
  padding: 0;
}
.card ul li .item-name .plus:hover {
  opacity: 100%;
}
.card ul li .item-name .reduce {
  position: absolute;
  border: solid 1px #666;
  border-radius: 100%;
  bottom: -5px;
  width: 12px;
  height: 12px;
  line-height: 10px;
  text-align: center;
  color: #666;
  z-index: 100;
  cursor: pointer;
  margin: 0;
  padding: 0;
  top: -5px;
}
.card ul li .item-name .reduce:hover {
  opacity: 100%;
}
.card .line-bottom::after {
  content: "";
  display: block;
  width: 3px;
  height: 20px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  background: #06b7fd;
  bottom: -20px;
}
.card .line-top::before {
  content: "";
  display: block;
  width: 3px;
  height: 20px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  background: #06b7fd;
  top: -20px;
}
.card .line-left::after {
  content: "";
  display: block;
  width: 3px;
  height: 20px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  background: #06b7fd;
  width: calc(50% + 20px);
  height: 3px;
  left: calc(-50% - calc(20px + 2px));
  top: 0;
}
.card .line-right::before {
  content: "";
  display: block;
  width: 3px;
  height: 20px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  background: #06b7fd;
  width: calc(50% + 20px);
  height: 3px;
  right: calc(-50% - calc(20px + 2px));
  top: 0;
}


.tree {
  background: #fff;
  min-height: calc(100vh - 110px);
  position: relative;
}
.tree-content {
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
}
</style>