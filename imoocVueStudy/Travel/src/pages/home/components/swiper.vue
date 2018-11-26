<template>
  <div class="wrapper">
    <!--swiper3在初始化没有数据会自动定位在最后一个slide，swiper4初始化没有数据会导致loop循环失效，所以需要处理为有数据了才去加载swiper-->
    <!--<swiper :options="swiperOption" ref="mySwiper" v-if="list.length">-->
    <!--建议不在template里进行逻辑操作，所以将v-if的条件计算放在js里处理。-->
    <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id"><img class="swiper-img" :src="item.imgUrl" alt=""></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      // swiperList: [
      //   {id: 1, imgUrl: 'https://img1.qunarzz.com/qs/1811/f5/fe7cc810bea50202.jpg'},
      //   {id: 2, imgUrl: 'https://img1.qunarzz.com/qs/1811/3f/85a00499e2e0802.jpg'},
      //   {id: 3, imgUrl: 'https://img1.qunarzz.com/qs/1811/c0/6257518b78a73602.jpg'}
      // ],
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // pagination: '.swiper-pagination',
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  /*在自定义组件里修改第三方插件或其他组件的样式需要使用>>>来实现穿透设置*/
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff;
  /*避免网络不好的情况下图片加载慢出现页面抖动效果（padding-bottom的值通过图片的宽高比计算）*/
  .wrapper
    width: 100%;
    height: 0;
    background: #eee;
    padding-bottom: 31.25%;
    .swiper-img
      width: 100%;
</style>
