<template>
    <li @click="handle">{{content}}</li>
</template>

<script>
  export default {
    name: "todo-item",
    props: ['content','index'],
    methods: {
      handle(){
        this.$emit('delete',this.index);
      }
    }
  }
</script>

<style scoped>

</style>