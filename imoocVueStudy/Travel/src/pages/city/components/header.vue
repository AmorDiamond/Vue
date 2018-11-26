<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont header-back">&#xe624;</span>
    </router-link>
    城市选择
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    position: relative;
    line-height: $headerHeight;
    text-align: center;
    background: $bgColor
    font-size: .32rem
    color: #fff;
    .header-back
      position: absolute;
      width: 0.64rem;
      left: 0;
      font-size: .4rem;
      color: #fff;
</style>
