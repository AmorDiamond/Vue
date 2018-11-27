<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_600x330_0046c90a.png" alt="">
      <div class="banner-info">
        <div class="banner-title">成都欢乐谷(AAAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe616;</span>39</div>
      </div>
    </div>
    <gallary-banner @close="handleGallaryClick" v-show="showGallary" :imgs="imgs"></gallary-banner>
  </div>
</template>
<script>
import GallaryBanner from 'common/gallary/gallary'
export default {
  name: 'DetailBanner',
  components: {
    GallaryBanner
  },
  data () {
    return {
      showGallary: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_r_800x800_246d40af.png',
        'http://img1.qunarzz.com/sight/p0/1712/5d/5d4f18e64813d0f6a3.img.jpg_r_800x800_41a80401.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick: function () {
      this.showGallary = true
    },
    handleGallaryClick: function () {
      this.showGallary = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position: relative;
    height: 0;
    overflow: hidden;
    padding-bottom: 55%
    .banner-img
      width: 100%;
    .banner-info
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      color: #fff;
      line-height: .64rem;
      background-image: linear-gradient(top , rgba(0 , 0, 0, 0), rgba(0, 0, 0, .8));
      .banner-title
        flex: 1;
        padding: 0 .2rem;
        font-size: .36rem;
      .banner-number
        padding: 0 .4rem;
        background: rgba(0, 0, 0, .5);
        height: .44rem;
        line-height: .44rem;
        margin-top: .1rem;
        margin-right: .1rem;
        border-radius: .22rem;
        .banner-icon
          font-size: .22rem;
          margin-right: .1rem;
</style>
