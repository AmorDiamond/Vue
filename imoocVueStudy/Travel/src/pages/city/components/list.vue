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
export default {
  name: 'CityList',
  props: {
    cities: Object,
    host: Array,
    letter: String
  },
  methods: {
    chooseCity: function (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
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
