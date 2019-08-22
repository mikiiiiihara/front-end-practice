new Vue({
    el: '#app',
    data: {
        account_name:'みっきー',
        name: '今何してる？',
        list: [
            {id: 1, name: '眠い'}
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
            })
        }, //複数個methodsを定義したければカンマで区切ってから！
        doRemove: function(index) {
            this.list.splice(index, 1)
        }
        
        
    }
})
// リスト要素を書き換えたい時
// （コンソールでの編集）
// this.$set(更新するデータ, インデックス or キー, 新しい値)
// this.$set(this.list, 0, {id : 1, name: 'キングスライム', hp: 500})

