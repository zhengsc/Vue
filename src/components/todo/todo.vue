<template>
  <div id="todo">
	<input 
		type="text" 
		placeholder="接下来要做什么？" 
		@keyup.enter="addTodoItem"
	/>
	<item 
		v-for="todo in filteredTodoItem"
		:key="todo.id"
		:todo="todo"
		@changeItemStatus="changeItemStatus"
		@deleteItem="deleteTodoItem"
	/>
	<btns 
		:todos="todos"
		:filter="filter"
		@clearCompleted="clearCompleted"
		@filterTodoItem="filterTodoItem"
	/>
  </div>
</template>

<script>
	import item from './item.vue'
	import btns from './btns.vue'

	export default {
		data() {
			return {
				index: 0,
				filter: 'all',
				todos: []
			}
		},
		components: {
			item,
			btns
		},
		computed: {
			filteredTodoItem() {
				if(this.filter === 'all') {
					return this.todos
				}

				let completed = this.filter === 'finished'

				return this.todos.filter(todo => todo.completed === completed)
			}
		},
		methods: {
			addTodoItem(e) {
				this.todos.unshift({
					id: this.index++,
					content: e.target.value.trim(),
					completed: false
				})

				e.target.value = ''
			},
			changeItemStatus(id) {
				let todo = this.todos[this.todos.findIndex(todo => todo.id === id)]
				todo.completed = !todo.completed
			},
			deleteTodoItem(id) {
				this.todos.splice(this.todos.findIndex((todo) => todo.id === id), 1)
			},
			clearCompleted() {
				this.todos = this.todos.filter(todo => todo.completed === false)
			},
			filterTodoItem(type) {
				console.log(type)
				this.filter = type
			}
		}
	}
</script>

<style lang="scss" scoped>
	#todo {
		width: 500px;
		background-color: #ffffff;
		border-radius: 5px;
		input {
			height: 30px;
			padding: 4px 10px;
		}
	}
</style>
