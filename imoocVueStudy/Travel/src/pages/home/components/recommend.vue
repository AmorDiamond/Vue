<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="info-title">{{item.title}}</p>
          <p class="info-desc">{{item.desc}}</p>
          <button>查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
  // data () {
  //   return {
  //     recommendList: [
  //       {
  //         id: 1,
  //         imgUrl: 'http://img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_200x200_ea7a0734.png',
  //         title: '成都欢乐谷',
  //         desc: '超级旋转过山车刺激到让你怀疑人生'
  //       },
  //       {
  //         id: 2,
  //         imgUrl: 'http://img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_200x200_ea7a0734.png',
  //         title: '成都欢乐谷',
  //         desc: '超级旋转过山车刺激到让你怀疑人生'
  //       },
  //       {
  //         id: 3,
  //         imgUrl: 'http://img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_200x200_ea7a0734.png',
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
  .item
    display: flex;
    height: 1.9rem;
    .item-img
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;
    .item-info
      flex: 1;
      padding: .1rem;
      min-width: 0;
      .info-title
        line-height: .54rem;
        font-size: .32rem;
        ellipsis();
      .info-desc
        line-height: .4rem;
        color: #ccc;
        ellipsis();
      button
        margin-top: .2rem
        background: #ff9300;
        padding: 0 .2rem;
        border-radius: .06rem;
        color: #fff;
</style>
