var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    }
})
var app2 = new Vue({
    el: '#app2',
    data: {
        list:['りんご','ばなな','いちご']
    }
})

var app3 = new Vue({
    el:'#app3',
    methods:{
        handleClick:function(event){
            alert(event.target) //[object HTMLButtonElement]
        }
    }
})

