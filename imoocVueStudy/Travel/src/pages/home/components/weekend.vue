<template>
  <div class="recommend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="info-title">{{item.title}}</p>
          <p class="info-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
  // data () {
  //   return {
  //     recommendList: [
  //       {
  //         id: 1,
  //         imgUrl: 'http://img1.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg',
  //         title: '成都欢乐谷',
  //         desc: '超级旋转过山车刺激到让你怀疑人生'
  //       },
  //       {
  //         id: 2,
  //         imgUrl: 'http://img1.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg',
  //         title: '成都欢乐谷',
  //         desc: '超级旋转过山车刺激到让你怀疑人生'
  //       },
  //       {
  //         id: 3,
  //         imgUrl: 'http://img1.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg',
  //         title: '成都欢乐谷',
  //         desc: '超级旋转过山车刺激到让你怀疑人生'
  //       }
  //     ]
  //   }
  // }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl";
  .title
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
  .item-img
    width: 100%;
  .item-info
    padding: .1rem;
    .info-title
      line-height: .54rem;
      font-size: .32rem;
      ellipsis();
    .info-desc
      line-height: .4rem;
      color: #ccc;
      ellipsis();
</style>
