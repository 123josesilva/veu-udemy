
let todos = [
    {
        text: 'Aprender HTML, CSS e Javascript',
        done: true
    },
    {
        text: 'Aprender o básico de Vue JS',
        done: false
    }
]

const todosApp={
    data(){
        return{
            todos: []
        };
    }
};

vue.createApp(todosApp).mount('#app');

