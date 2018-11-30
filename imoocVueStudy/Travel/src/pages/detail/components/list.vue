<template>
  <div>
    <div class="item border-bottom" v-for="(item, index) of list" :key="index">
      <div class="item-title"><span class="item-title-icon"></span>{{item.title}}</div>
      <!--在组件里递归使用组件-->
      <div class="item-children" v-if="item.children">
        <detail-list :list = item.children></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  },
  data () {
    return {
      // list: [
      //   {title: '成人票',
      //     children: [
      //       {title: '日场票'},
      //       {title: '夜场票'}
      //     ]
      //   },
      //   {title: '学生票'},
      //   {title: '儿童票'}
      // ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .item-title
    text-indent: .2rem
    line-height: .4rem
    .item-title-icon
      display: inline-block;
      position: relative;
      width: .36rem;
      height: .36rem;
      top: .1rem;
      left: .06rem;
      background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
      margin-right: .1rem;
      background-size: .4rem 3rem;
  .item-children
    padding: 0 .2rem
</style>
