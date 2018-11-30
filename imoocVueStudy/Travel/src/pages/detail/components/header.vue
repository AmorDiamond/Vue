<template>
  <div>
    <div class="header-circle-back" v-show="showCircleBack">
      <router-link tag="div" to="/" class="iconfont back-icon">&#xe624;</router-link>
    </div>
    <div class="header-fixed" v-show="!showCircleBack" :style="headerStyle">
      <router-link to="/">
        <span class="iconfont header-back">&#xe624;</span>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showCircleBack: true,
      headerStyle: {
        opacity: 0
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 组件注销触发
  destroyed () {
    console.log('DetailHeader destroyed')
    window.removeEventListener('scroll', this.handleScroll)
  },
  // 因为DetailHeader的父组件DetailPage组件在keep-alive里被排除，所以不会再触发activated生命周期，需更改为mounted
  activated () {
    console.log('activated')
    window.addEventListener('scroll', this.handleScroll)
  },
  // 存在keep-alive的时候还有deactivated周期，在离开当前组件时会进入
  // 在activated里给全局window添加了sroll事件，会导致在其他组件也会被影响，所以需要解除绑定
  deactivated () {
    console.log('deactivated')
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll: function () {
      const top = document.documentElement.scrollTop || document.body.scrollTop
      console.log(this.headerStyle.opacity)
      if (top > 60) {
        let opacity = top / 160
        opacity = opacity > 1 ? 1 : opacity
        this.headerStyle.opacity = opacity
        this.showCircleBack = false
      } else {
        this.showCircleBack = true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl";
  .header-circle-back
    position: fixed;
    left: .1rem;
    top: .1rem;
    line-height: .7rem;
    height: .7rem;
    width: .7rem;
    border-radius: .4rem;
    background: rgba(0 , 0, 0, .8);
    color: #fff;
    text-align: center;
    z-index: 9;
    .back-icon
      font-size: .4rem;
  .header-fixed
    position: fixed;
    top: 0;
    width: 100%;
    line-height: $headerHeight;
    text-align: center;
    background: $bgColor
    font-size: .32rem
    color: #fff;
    z-index: 9;
    .header-back
      position: absolute;
      width: 0.64rem;
      left: 0;
      font-size: .4rem;
      color: #fff;
</style>
