<template>
  <div class="alphabet">
    <ul class="list">
      <li class="item"
          v-for="item of letters"
          :key="item"
          :ref="item"
          @touchstart="touchMoveStart"
          @touchmove="touchMove"
          @touchend="touchMoveEnd"
          @click="handleLetter">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      // letters: [],
      moveStatus: false,
      letterTop: 0,
      letterHeight: 0,
      // 设置个函数截留的flag
      timer: null
    }
  },
  methods: {
    handleLetter: function (e) {
      const event = e.target
      const letter = event.innerHTML
      console.log(letter)
      this.$emit('change', letter)
    },
    touchMoveStart: function (e) {
      console.log('touchMoveStart', e)
      this.moveStatus = true
    },
    touchMove: function (e) {
      // console.log('touchMove', e)
      if (this.moveStatus) {
        // 设置一个定时器实现函数截留，限制执行的频率，提升touchMove时的性能，setTimeout设置为16毫秒达到体验最顺畅的时间
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const moveY = e.touches[0].clientY - this.letterTop - 79 // 79为header和search高度
          const index = Math.floor(moveY / this.letterHeight)
          console.log(index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    touchMoveEnd: (e) => {
      console.log('touchMoveEnd', e)
      this.moveStatus = false
    }
  },
  mounted () {
    // 页面刚被渲染的周期里面cities还没有得到数据，所以在mounted生命周期里无法处理letters
    // 方便实现右侧字母滑动列表对应滚动，将cites处理为数组，方便通过索引获取字母传递给父组件
    // for (let i in this.cities) {
    //   this.letters.push(i)
    // }
    // console.log(this.letters)
  },
  updated () {
    // 页面被渲染完后的update周期里面cities得到数据，但是在此时处理letters数据，页面不会渲染出来。
    // 方便实现右侧字母滑动列表对应滚动，将cites处理为数组，方便通过索引获取字母传递给父组件
    for (let i in this.cities) {
    //   this.letters.push(i)
      console.log(i)
    }
    // console.log(this.letters)
    console.log(this.$refs['A'][0].offsetTop)
    this.letterTop = this.$refs['A'][0].offsetTop
    this.letterHeight = this.$refs['A'][0].clientHeight
  },
  computed: {
    letters () {
      // 方便实现右侧字母滑动列表对应滚动，将cites处理为数组，方便通过索引获取字母传递给父组件
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .alphabet
    position: absolute;
    right: 0;
    bottom: 0;
    top: 1.58rem;
    width: .4rem;
    text-align: center;
    .list
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      .item
        line-height: .4rem;
        color: $bgColor;
</style>
