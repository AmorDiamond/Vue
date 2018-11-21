<template>
    <ul>
      <router-link to="/layout/user" tag="li" active-class="active">User</router-link>
      <router-link to="/layout/user/detail/用户1" tag="li" active-class="active">UserDetail</router-link>
      <li>菜单3</li>
    </ul>
</template>

<script>
export default {
  name: 'navmenu'
}
</script>

<style scoped>

</style>
