<template>
    <ul>
      <router-link :to="{name: 'userDetail', params: {name: '用户1'}}">用户1</router-link>
      <!--<router-link :to="{name: 'userDetail', params: {name: '用户2'}}">用户2</router-link>-->
      <router-link :to="{path: 'user/detail/用户2'}">用户2</router-link>
    </ul>
</template>

<script>
export default {
  name: 'list'
}
</script>

<style scoped>

</style>
