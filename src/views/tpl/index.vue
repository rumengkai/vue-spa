<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h1>{{ 1528356514883 | parseTime }}</h1>
		<h2>Essential Links</h2>
		<h2>Ecosystem</h2>
		<div class="button" @click="sendPost">发送POST</div>
	</div>
</template>

<script>
import { getData, postData } from '@/api/index'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      listLoading: false
    }
  },
  components: {},
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getData({
        id: 2,
        name: '12'
      }).then(res => {
        if (res.status === 0) {
          // console.log(res)
        }
      })
    },
    sendPost() {
      postData({ data: 'data', pn: 0 }).then(res => {
        if (res.status === 0) {
          // console.log(res)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  h1,
  h2 {
    font-weight: normal;
    font-size: 30px;
  }
}
.button {
  background: #ff0000;
  border-radius: 3px;
  padding: 2px 5px;
  width: 100px;
  margin: auto;
}
</style>
