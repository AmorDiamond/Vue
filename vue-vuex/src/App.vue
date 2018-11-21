<template>
  <div id="app">
    <img src="./assets/logo.png">{{count}}
    <router-link to="/" active-class="active">ToHome</router-link>
    <router-link to="/list" active-class="active">ToList</router-link>
    <router-link to="/layout" active-class="active">ToLayOut操作store</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    count () {
      // this.message = this.$store.state.count;
      return this.$store.state.count
    }
  },
  methods: {
    getData () {
      this.$axios.get('/v1/epBaseInfoPojo/findNameAllEpBaseInfo', {params: {enterpriseName: '成都凡达科技有限责任公司'}}).then(res => {
        console.log(res.data)
      })
    }
  },
  mounted: function () {
    this.getData()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active{
  color: #f00;
}
ul{
  list-style: none;
}
*{
  margin: 0;
}
</style>
