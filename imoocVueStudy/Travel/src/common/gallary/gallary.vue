<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item, index) of imgs" :key="index"><img class="gallary-img" :src="item" alt=""></swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GallaryBanner',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGallaryClick: function () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container >>> .swiper-container
                   overflow: initial;
  .container
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    z-index: 9;
    .wrapper
      color: #fff;
      .gallary-img
        width: 100%;
      .swiper-pagination
        bottom: -2rem;
</style>
