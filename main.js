const { createApp } = Vue

const app = createApp({
    data(){
        return{
            ver: "Ver. 0.1 β",
            page: 1
        }
    },
    methods:{
        nextpage(){
            this.page ++;
        }
    }
})

app.mount('#app')