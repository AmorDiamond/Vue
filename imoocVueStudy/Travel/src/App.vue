<template>
  <div id="app">
    <!--使用keep-alive可以将已渲染过的路由页面放在内容里，再次进入被缓存的页面不再触发mounted生命周期钩子，直接从内存里读取-->
    <!--可以给keep-alive添加exclude="组件名"来排除不需要被缓存的组件-->
    <keep-alive exclude="DetailPage">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
