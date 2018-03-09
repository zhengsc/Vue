<template>
  <div :class="['item', todo.completed ? 'completed' : '']">
	  <input 
	  	type="checkbox" 
		@change="changeTodoItemStatus"
	  />
	  <span>{{todo.content}}</span>
	  <button @click="deleteTodoItem">删除</button>
  </div>
</template>

<script>
	export default {
		props: {
			todo: {
				type: Object,
				required: true
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			changeTodoItemStatus() {
				this.$emit('changeItemStatus', this.todo.id)
			},
			deleteTodoItem() {
				this.$emit('deleteItem', this.todo.id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.item {
		width: 100%;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		&.completed {
			color: #999999
		}

		input {
			width: 30px;
			height: 30px;
			border-radius: 100%;
			border: 1px solid #333333;
			:checked {
				background-color: #333333;
				border-color: #ffffff;
			}
		}

		button {
			display: flex;
			justify-content: center;
			align-content: center;
		}
	}
</style>

