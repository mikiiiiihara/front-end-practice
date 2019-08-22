// ネストされたデータを定義
new Vue({
    el:'#app',
    data:{
        // object data
        message:{
            value:'Hello Vue.js!'
        },
        // 配列データ
        list:['りんご','ゴリラ','ラッパ'],
        // 別のデータを使用してlistから取り出す要素を動的に
        num:1 // x=1的な　list[num]も、f(x)的な感じ
    }
})

var app1 = new Vue({
    el: '#app1',
    data: {
        message: 'Hello Vue.js!'
    }
})

new Vue({
    el:'#app2',
    data:{
        message:'Hello Vue.js',
        scroll:0
    },
    mounted: function(){
        this.scroll=100 //要素のスクロール量を操作
    }
})

new Vue({
    el:'#app3',
    data:{
        count:0
    },
    methods:{
        // ボタンをクリックした時のハンドラ
        increment:function(){
            this.count += 1
        }
    }
})

var app4 = new Vue({
    el:'#app4',
    data:{
        isChild: true,
        isActive: true,
        textColor: 'green',
        bgColor: 'lightgray'
    }
})

new Vue({
    el:'#app5',
    data:{
        radius:50
    }
})

new Vue({
    el: '#app6',
    data: {
        list: [
            {id: 1, name: 'スライム', hp: 100},
            {id: 2, name: 'ゴブリン', hp: 200},
            {id: 3, name: 'ドラゴン', hp: 500}
        ]
    }
})

new Vue({
    el: '#app7',
    data: {
        list: [
            {id: 1, name: 'スライム', hp: 100},
            {id: 2, name: 'ゴブリン', hp: 200},
            {id: 3, name: 'ドラゴン', hp: 500}
        ]
    }
})

new Vue({
    el: '#app8',
    data: {
        text: 'Hello, Vue.js!!',
        name: '今何してる？',
        list: [
            {id: 1, name: 'スライム', hp: 100},
            {id: 2, name: 'ゴブリン', hp: 200},
            {id: 3, name: 'ドラゴン', hp: 500}
        ]
    },
    methods: {
        // 追加ボタンをクリックした時のハンドラ
        doAdd: function(){
            // リスト内で１番大きいIDを取得
            var max = this.list.reduce(function(a,b) {
                return a > b.id ? a : b.id
            }, 0)
            // 新しいモンスターをリストに追加
            this.list.push({
                id: max　+ 1,
                name: this.name,
                hp: 500
            })
        }, //複数個methodsを定義したければカンマで区切ってから！
        doRemove: function(index) {
            this.list.splice(index, 1)
        },
        // ボタンのクリックイベントのハンドラ
        doAttack: function(index) {
            this.list[index].hp -= 10  // HPを減らす
        },
        handleClick: function(){
            alert('クリックしたよ')
        }
    }
})
