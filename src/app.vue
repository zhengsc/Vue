<template>
	<div id="app">
		<Header></Header>
		<todo></todo>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from './components/Header.vue'
	import todo from './components/todo/todo.vue'
	import Footer from './components/Footer.vue'

	export default {
		components: {
			Header,
			todo,
			Footer
		}
	}
</script>

<style>
	
</style>
