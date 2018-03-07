<template>
  <div id="todo">
	<input 
		type="text" 
		placeholder="接下来要做什么？" 
		@keyup.enter="addTodoItem"
	/>
	<item 
		v-for="todo in todos"
		:key="todo.id"
		:todo="todo"
		@changeItemStatus="changeItemStatus"
		@delete="deleteItem"
	/>
	<btns />
  </div>
</template>

<script>
	import item from './item.vue'
	import btns from './btns.vue'

	export default {
		data() {
			return {
				index: 0,
				todos: [
					{
						id: 1,
						content: 'asd',
						completed: false
					}
				]
			}
		},
		components: {
			item,
			btns
		},
		methods: {
			addTodoItem(e) {
				this.todos.unshift({
					id: this.index++,
					content: e.target.value,
					completed: false
				})

				e.target.value = ''
			},
			changeItemStatus(id) {
				this.todos[id].completed = !this.todos[id].completed
			},
			delete(id) {
				this.todos.replace(this.todos.findIndex(this.todos.id === id), 1)
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
