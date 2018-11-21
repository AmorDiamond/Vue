<template>
    <div>
      <input type="text" v-model="inputvalue"><button @click="handleAdd">添加</button>
      <todo-item v-for="(item,index) of list" :content="item" :key="index" :index="index" @delete="handleDelete"></todo-item>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
import TodoItem from '@/components/list/TodoItem'
export default {
  name: 'handle-list',
  components: {
    'todo-item': TodoItem
  },
  data () {
    return {
      inputvalue: '',
      list: []
    }
  },
  methods: {
    handleAdd () {
      this.list.push(this.inputvalue)
      this.inputvalue = ''
    },
    handleDelete (i) {
      this.list.splice(i, 1)
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to, from, 'react to route changes...')
    console.log(next)
    // don't forget to call next()
    next()
  }
}
</script>

<style scoped>

</style>
