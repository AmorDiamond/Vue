<template>
  <div>
    <div class="search">
      <input v-model="keyWords" type="text" placeholder="请输入城市名或拼音">
    </div>
    <div class="search-content" ref="search">
      <ul>
        <li class="item border-bottom" v-for="item of contentList" :key="item.id" @click="chooseCity(item.name)">{{item.name}}</li>
        <li class="item no-data" v-show="hasNoData">没有匹配到城市！</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyWords: '',
      contentList: [],
      timer: null,
      noData: false
    }
  },
  methods: {
    chooseCity: function (city) {
      // 非异步操作数据，可以直接跳过actions，直接使用commit通过mutations操作数据
      this.$store.commit('changeCity', city)
      this.keyWords = '' // 避免返回城市页面搜索信息还存在
      this.$router.push('/')
    }
  },
  mounted () {
    // click:true 避免安卓手机出现BSscroll元素里@click事件不执行
    this.scroll = new Bscroll(this.$refs.search, {click: true})
  },
  computed: {
    hasNoData: function () {
      return !this.contentList.length && this.keyWords
    }
  },
  watch: {
    keyWords: function () {
      if (!this.keyWords) {
        this.contentList = []
        // this.noData = !this.contentList.length && this.keyWords
        return
      }
      // 设置函数截留，限制触发函数的频率
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((item) => {
            if (item.name.indexOf(this.keyWords) > -1 || item.spell.indexOf(this.keyWords) > -1) {
              result.push(item)
            }
          })
        }
        this.contentList = result
        // this.noData = !this.contentList.length && this.keyWords
        console.log(this.contentList)
      }, 100)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl";
  .search
    height: .72rem;
    padding: 0 .2rem;
    background: $bgColor;
    input
      box-sizing: border-box;
      width: 100%;
      height: .62rem;
      /*line-height: .62rem;*/
      padding: 0 .1rem;
      text-align: center;
      border-radius: .06rem;
      color: #666;
  .search-content
    position: absolute;
    width: 100%;
    z-index: 9;
    background: #eee;
    line-height: .6rem;
    text-indent: .2rem;
    max-height: calc( 100% - 1.58rem);
    overflow: hidden;
    .item
      background: #fff;
</style>
