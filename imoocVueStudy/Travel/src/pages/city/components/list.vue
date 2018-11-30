<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of host" :key="item.id">
            <div class="button" @click="chooseCity(item.name)">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="city of item" :key="city.id" @click="chooseCity(city.name)">{{city.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    host: Array,
    letter: String
  },
  methods: {
    chooseCity: function (city) {
      // this.$store.dispatch('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity']), // 将 `this.changeCity()` 映射为 `this.$store.commit('changeCity')`
    ...mapMutations({changeCity2: 'changeCity'}) // 将 `this.changeCity2()` 映射为 `this.$store.commit('changeCity')`
  },
  mounted () {
    // click:true 避免安卓手机出现BSscroll元素里@click事件不执行
    this.scroll = new BScroll(this.$refs.wrapper, { click: true })
  },
  // 在router配置里添加上scrollBehavior只能控制原生的滚动条位置
  // 因为城市列表使用的better-scroll插件，所以滚动到中间然后跳转到其他路由页面再回来还是滚动在中间位置
  // 如果页面有被缓存，就只能在activated周期里处理，或者不缓存，重新让父组件请求数据渲染
  activated () {
    const el = this.$refs.wrapper
    this.scroll.scrollToElement(el)
  },
  computed: {
    // letter2 () {
    //   console.log(this.letter)
    //   if (this.letter) {
    //     const el = this.$refs[this.letter][0]
    //     this.scroll.scrollToElement(el)
    //     return ''
    //   }
    // }
  },
  watch: {
    // 因为watch监听的letter方法和props里的letter同名，所以当props里的letter变动会被触发
    // 需要监听哪个数据的变化就在watch里定义其同名的方法
    letter () {
      if (this.letter) {
        const el = this.$refs[this.letter][0]
        this.scroll.scrollToElement(el)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .border-topbottom
    &:before
      border-color: #ccc;
    &:after
      border-color: #ccc;
  .border-bottom
    &:before
      border-color: #ccc;
  .list
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    .title
      line-height: .44rem;
      text-indent: .2rem;
      background: #eee;
      color: #666;
      font-size: .26rem;
    .button-list
      padding: .1rem .6rem .1rem .1rem;
      overflow: hidden;
      .button-wrapper
        box-sizing: border-box;
        float: left;
        width: 33.33%;
        padding: .1rem;
        text-align: center;
        .button
          padding: .1rem 0;
          border: .02rem solid #ccc;
          border-radius: .06rem;
    .item-list
      .item
        line-height: .76rem;
        padding-left: .2rem;
</style>
