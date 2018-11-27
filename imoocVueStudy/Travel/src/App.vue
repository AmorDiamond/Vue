<template>
  <div id="app">
    <!--使用keep-alive可以将已渲染过的路由页面放在内容里，再次进入被缓存的页面不再触发mounted生命周期钩子，直接从内存里读取-->
    <keep-alive>
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
