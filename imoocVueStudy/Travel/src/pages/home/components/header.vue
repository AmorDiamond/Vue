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
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  data () {
    return {
      // city: this.$store.state.city
    }
  },
  computed: {
    // 使用vuex的mapState获取state数据，使用对象展开运算符将此对象(mapState)混入到computed 对象中
    ...mapState(['city']),
    ...mapState({city2: 'city'}) // 如果要将一个 State 属性另取一个名字，使用对象形式
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
    min-width: 1.22rem;
    padding: 0 .1rem;
    text-align: center;
    color: #fff;
    .arrow-icon
      font-size: .24rem;
</style>
