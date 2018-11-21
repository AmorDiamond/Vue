<template>
    <div>
      <!--这里是{{getRoute}}的详情-->
      这里是{{getRoute}}的详情
    </div>
</template>

<script>
export default {
  name: 'todo-detail',
  data () {
    return {
      content: ''
    }
  },
  computed: {
    getRoute () {
      return this.$route.params.content
    }
  },
  // mounted: function () {
  //   this.content = this.$route.params.content
  // },
  methods: {
    fngetRoute () {
      this.content = this.$route.params.content
    }
  }
}
</script>

<style scoped>

</style>
