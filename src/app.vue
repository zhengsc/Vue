<template>
	<div id="app">
		<p>{{text}}</p>
		<p>{{message}}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				text: 'abcde',
				message: '12312311'
			}
		}
	}
</script>

<style>
	div {
		color: green
	}
</style>
