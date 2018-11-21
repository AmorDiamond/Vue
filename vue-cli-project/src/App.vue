<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="todo-box">
      <input type="text" v-model="inputvalue"><button @click="addList">添加</button>
      <ul>
        <todo-item v-for="(item,index) of list" :index="index" :content="item" @delete="handleDelete"></todo-item>
      </ul>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TodoItem from './components/TodoItem';

export default {
  name: 'app',
  components: {
    HelloWorld,
    'todo-item': TodoItem
  },
  data(){
    return {
      inputvalue: '',
      list: []
    }
  },
  methods: {
    addList(){
      this.list.push(this.inputvalue);
      this.inputvalue = '';
    },
    handleDelete(i){
      this.list.splice(i,1);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
