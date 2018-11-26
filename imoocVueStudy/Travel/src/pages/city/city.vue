<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :host="hostCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="changeLetter"></city-alphabet>
  </div>
</template>
<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlphabet from './components/alphabet'
import axios from 'axios'
export default {
  name: 'CityPage',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hostCities: [],
      letter: ''
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo: function () {
      const url = '/api/city.json'
      axios.get(url).then(res => {
        if (res.status === 200) {
          const data = res.data
          this.getCityInfoSucc(data)
        }
      })
    },
    getCityInfoSucc: function (res) {
      const data = res.data
      this.cities = data.cities
      this.hostCities = data.hotCities
    },
    changeLetter: function (res) {
      this.letter = res
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
