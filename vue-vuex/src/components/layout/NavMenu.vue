<template>
    <ul>
      <router-link to="/layout/user" tag="li" active-class="active">User</router-link>
      <router-link to="/layout/user/detail/用户1" tag="li" active-class="active">UserDetail</router-link>
      <!--<li>菜单{{count}}&#45;&#45;{{getWidth}}&#45;&#45;{{getColor}}</li>-->
      <li>菜单{{count}}--{{width}}--{{color}}</li>
      <button @click="change">点击我改变store{{count}}</button>
      <button @click="reset">重置store</button>
      <!--<p>
        <button @click="changeWidth">点击我改变storeWidth{{getWidth}}</button>
        <button @click="resetWidth">重置storeWidth</button>
        <button @click="changeColor">点击我改变storeColor{{getColor}}</button>
        <button @click="resetColor">重置storeColor</button>
      </p>-->
      <p>
        <button @click="changeWidth">点击我改变storeWidth{{width}}</button>
        <button @click="resetWidth">重置storeWidth</button>
      </p>
      <p>
        <button @click="changeColor">点击我改变storeColor{{color}}</button>
        <button @click="resetColor">重置storeColor</button>
      </p>
    </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'navmenu',
  data () {
    return {message: ''}
  },
  methods: {
    change () {
      console.log(this.$store)
      this.$store.commit('increment')
    },
    reset () {
      this.$store.commit('rest')
    },
    changeWidth () {
      this.$store.commit('changeWidth', '60%')
    },
    resetWidth () {
      this.$store.commit('restWidth')
    },
    changeColor () {
      this.$store.commit({type: 'changeColor', data: 'green'})
    },
    resetColor () {
      this.$store.commit('restColor')
    }
  },
  // computed: {
  //   count () {
  //     // this.message = this.$store.state.count;
  //     return this.$store.state.count
  //   },
  //   getWidth () {
  //     return this.$store.state.width
  //   },
  //   getColor () {
  //     return this.$store.state.color
  //   }
  // }
  computed: mapState([
    // 映射 this.count 为 store.state.count
    'count',
    'width',
    'color'
  ])
}
</script>

<style scoped>

</style>
