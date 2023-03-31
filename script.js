const app = Vue.createApp({
    data() {
        return {
            enteredTodo: '',
			todos: []
        }
    },
    methods: {
        addTodo() {
			this.todos.push(this.enteredTodoValue)
            this.enteredTodoValue = ''
		}
    }
})

app.mount('#todo')