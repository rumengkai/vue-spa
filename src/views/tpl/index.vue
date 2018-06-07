<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h1>{{ 1528356514883 | parseTime }}</h1>
		<h2>Essential Links</h2>
		<h2>Ecosystem</h2>
	</div>
</template>

<script>
	import {
		getDate
	} from '@/api/index'

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
				getDate({ id: 2, name: '12' }).then(res => {
					if (res.status === 0) {
						// console.log(res)
					}
				})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
</style>
