var todos = [
    
];

const todosApp = {
    data() { 
        return {
            todos: [window.todos],
            newTodo: {
                done: false
            }
        }  
    },
    methods: {
        addTodo: function(){
            if(this.newTodo.text){
                this.todos.push(this.newTodo);
                this.newTodo = {
                    done: false
                };
                localStorage.setItem("todos", JSON.stringify(this.todos));
            } else {
                alert("Preencha todos os campos");
            }         
    }
},
        created(){
           this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todos;
        },
        updated(){
            localStorage.setItem("todos", JSON.stringify(this.todos));
            console.log('update ');
        }
    }


Vue.createApp(todosApp).mount('#app');



