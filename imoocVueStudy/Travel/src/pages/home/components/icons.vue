<template>
  <div class="icons">
    <swiper :options="swiperOption2" ref="mySwiper">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption2: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
      // iconList: [
      //   {id: 1, iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', iconDesc: '景点门票'},
      //   {id: 2, iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png', iconDesc: '泡温泉'},
      //   {id: 3, iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png', iconDesc: '成都必游'},
      //   {id: 4, iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png', iconDesc: '川剧变脸'},
      //   {id: 5, iconUrl: 'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png', iconDesc: '打卡神地'},
      //   {id: 6, iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png', iconDesc: '滑雪'},
      //   {id: 7, iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', iconDesc: '一日游'},
      //   {id: 8, iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png', iconDesc: '成都熊猫基地'},
      //   {id: 9, iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png', iconDesc: '黑水彩林'}
      // ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .icons >>> .swiper-pagination-bullet-active
    background: $bgColor;
  .icons >>> .swiper-container
    padding-bottom: 10px;
  .icons >>> .swiper-pagination
    bottom: 0;
  .icons >>> .swiper-pagination-bullet
    width: 6px;
    height: 6px;
  .icons
    overflow: hidden;
    height: 0;
    padding-bottom: 50%;
    .icon
      position: relative;
      overflow: hidden;
      float: left;
      width: 25%;
      height: 0;
      padding-bottom: 23%;
      .icon-img
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: .34rem;
        box-sizing: border-box;
        padding: .1rem;
        .icon-img-content
          display: block;
          margin: 0 auto;
          height: 100%;
      .icon-desc
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: .44rem;
        text-align: center;
        color: $darkTextColor;
        ellipsis();
</style>
