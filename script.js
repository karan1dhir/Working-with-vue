// let app = new Vue({
//     el: '#app',
//     data : {
//      title  :'todo-List',
//      username : ''
//     },
//     methods:{
//         titleUpperCase(){
//             this.title = this.title.toUpperCase()
//         },
//         titlelowerCase(){
//             this.title = this.title.toLowerCase()
//         }
//     }
// })
let app = new Vue({
    el : '#app',
    data : {
        newTask : '',
        taskList : []
    },
    methods : {
        addTask(){
            this.taskList.push({name : this.newTask , done : false})
            this.newTask = ''
        }
    } 
})