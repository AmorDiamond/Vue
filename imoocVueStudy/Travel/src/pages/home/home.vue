<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <HomeIcons :list="iconList"></HomeIcons>
    <HomeRecommend :list="recommendList"></HomeRecommend>
    <HomeWeekend :list="weekendList"></HomeWeekend>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      // city: '',
      lastCity: '', // 保存该组件最后的city名
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted () {
    console.log('mounted')
    this.getHomeInfo()
    this.lastCity = this.city // 将当前渲染页面的时候的city保存下来，用于再次进入该组件时判断是否需要重新请求数据
  },
  // 如果在router-view外存在keep-alive，会多一个activated生命周期钩子
  // keep-alive里的路由页面会被放在内存里，缓存后不会再走mounted周期，直接走内存读取渲染
  activated () {
    console.log('activated')
    // 如果上次保存的lastCity和当前store里的city不一致，需要请求当前选择城市的数据
    if (this.lastCity !== this.city) {
      this.getHomeInfo()
      this.lastCity = this.city
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('static/mock/index.json?city=' + this.city).then(res => {
        if (res.status === 200) {
          this.getHomeInfoSucc(res.data)
        }
      })
    },
    getHomeInfoSucc (res) {
      console.log(res)
      const data = res.data
      // this.city = data.city ? data.city : '成都'
      this.swiperList = data.swiperList
      this.iconList = data.iconList
      this.recommendList = data.recommendList
      this.weekendList = data.weekendList
    }
  }
}
</script>

<style scoped>

</style>
