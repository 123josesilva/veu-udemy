const todosApp = Vue.createApp({
    data() {
        return {
            todos: [
                {
                    text: 'Aprender HTML, CSS e Javascript',
                    done: true
                },
                {
                    text: 'Aprender o básico de Vue JS',
                    done: false
                }
            ]
        };
    }
});

todosApp.mount('#app');