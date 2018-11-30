<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <detail-list :list="list"></detail-list>
  </div>
</template>
<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import DetailList from './components/list'
import axios from 'axios'
export default {
  name: 'DetailPage',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [
        {title: '成人票',
          children: [
            {title: '日场票'},
            {title: '夜场票'}
          ]
        },
        {title: '学生票'},
        {title: '儿童票'}
      ]
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      const url = 'static/mock/detail.json'
      axios.get(url, {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        if (res.status === 200) {
          this.getDetailInfoSucc(res.data)
        }
      })
    },
    getDetailInfoSucc (res) {
      console.log(res)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .detail
    height: 50rem;
</style>
