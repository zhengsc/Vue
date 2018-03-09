<template>
  <div class="btns">
	  <span>{{allItemLength}} items all</span>
	  <span>
		  <button 
		  	v-for="(btn, index) in btns" 
			:key="index"
			@click="filterTodoItem(btn)"
			:class="filter === btn ? 'active' : ''"
		  >{{btn}}</button>
	  </span>
	  <span @click="clearCompleted">clear completed</span>
  </div>
</template>
<script>
	export default {
		props: {
			filter: {
				type: String,
				required: true
			},
			todos: {
				type: Object,
				required: true
			}
		},
		data() {
			return {
				btns: ['all', 'unfinish', 'finished']
			}
		},
		computed: {
			allItemLength() {
				return this.todos.filter(todo => todo.completed === true).length
			}
		},
		methods: {
			filterTodoItem(type) {
				this.$emit('filterTodoItem', type)
			},
			clearCompleted() {
				this.$emit('clearCompleted')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.btns {
		height: 30px;
		color: #333333;
		.active {
			border: 1px solid #ff0000;
			border-radius: 3px;
		}
	}
</style>

