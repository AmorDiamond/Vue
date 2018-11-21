<template>
  <ul>
    <li @click="gotoDetail">{{content}}<button @click.stop="handleDelete">删除</button></li>
    <!--<router-link to="/list/detail" tag="li">{{content}}<button @click.stop="handleDelete">删除</button></router-link>-->
  </ul>
</template>

<script>
export default {
  name: 'todo-item',
  props: ['content', 'index'],
  methods: {
    handleDelete () {
      this.$emit('delete', this.index)
    },
    gotoDetail () {
      this.$router.push({path: '/list/detail/' + this.content})
    }
  }
}
</script>

<style scoped>

</style>
