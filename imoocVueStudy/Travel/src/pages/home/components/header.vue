<template>
  <div class="header">
    <div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">{{city}}<span class="iconfont arrow-icon">&#xe64a;</span></div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      city: this.$store.state.city
    }
  }
}
</script>
<style lang="stylus" scoped>
/*@import "../../../assets/styles/varibles.styl";*/
/*@import "~@/assets/styles/varibles.styl";*/
@import "~styles/varibles.styl";
.header
  display: flex;
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;
  .header-left
    float: left;
    width: .64rem;
    .back-icon
      text-align: center;
      font-size: .4rem;
  .header-input
    flex: 1;
    height: .62rem;
    line-height: .62rem;
    margin-top: .12rem;
    margin-left: .2rem;
    padding-left: .2rem
    color: #ccc;
    background: #fff;
    border-radius: .1rem;
  .header-right
    float: right;
    width: 1.24rem;
    text-align: center;
    color: #fff;
    .arrow-icon
      font-size: .24rem;
</style>
