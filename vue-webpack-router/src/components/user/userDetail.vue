<template>
  <div class="user-detail">
    用户详情--{{name}}
  </div>
</template>
<script>
export default {
  name: 'user-detail',
  props: ['name']
}
</script>

<style scoped>
.user-detail{
  background: #42b983;
}
</style>
