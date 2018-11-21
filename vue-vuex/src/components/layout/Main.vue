<template>
    <div class="container">
      <div class="header"></div>
      <div class="layout-main">
        <div class="nav">
          <nav-menu></nav-menu>
        </div>
        <div class="layout-content">
          <router-view></router-view>
          <router-view name="bottom"></router-view>
          {{count}}--{{width}}--{{color}}
        </div>
      </div>
    </div>
</template>

<script>
import NavMenu from '@/components/layout/NavMenu'
import { mapState } from 'vuex'
export default {
  name: 'mainlayout',
  components: {
    'nav-menu': NavMenu
  },
  computed: mapState([
    // 映射 this.count 为 store.state.count
    'count',
    'width',
    'color'
  ])
}

</script>

<style scoped>
.container{
  height: 200px;
  border: 1px solid;
}
.header{
  height: 50px;
  background: #ddd;
}
.nav{
  height: 150px;
  float: left;
  border-right: 1px solid;
}
.layout-content{
  height: 150px;
  background: #eee;
}
</style>
