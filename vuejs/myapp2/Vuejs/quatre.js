
new Vue({
    el:'#app',
    data: {
        width:800
    },
    computed:{
        // 算出プロパティhalfwidthを定義
        halfWidth:{
            // width:入力、 halfWidth:同期
            get:function(){return this.width / 2},
            //halfWidthの２倍の数値をwidthに代入する
            // width:同期、 halfWidth:入力　※双方向
            set:function(val){this.width = val*2},
        }
    }
})

new Vue({
    el:'#app1',
    //算出プロパティ
    computed:{
        computedData:function(){return Math.random()},
        computedData1:function(){return Math.random()}
    },
    //メソッド
    methods:{
        methodsData:function(){return Math.random()}
    }
})

new Vue({
    el:'#app2',
    data:{
        //formの入力と紐付けるデータ
        budget: 300,
        //表示件数
        limit: 2,
        //元になるリスト
        list: [
            { id:1, name:'りんご', price:100 },
            { id:1, name:'ちんこ', price:200 },
            { id:1, name:'いちご', price:400 },
            { id:1, name:'うんこ', price:200 },
            { id:1, name:'めろん', price:500 }
        ],
        order: false
    },
    computed:{
        //budget以下のリストを返す算出プロパティ
        matched: function() {
            return this.list.filter(function(el) {
                return el.price <= this.budget
            }, this)
        },
        // matchedで返ったデータをlimit件返す算出プロパティ
        limited:function(){
            return this.matched.slice(0, this.limit)
        },
        // sortedを新しく追加
        sorted: function(){
            return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
        },
        // limitedで使用するリストをsortedに変更
        limited: function(){
            return this.sorted.slice(0, this.limit)
        }
    }
})

new Vue({
    el: '#app3',
    data: {
      list: [],
      current: '',
      topics: [
        { value: 'vue', name: 'Vue.js' },
        { value: 'jQuery', name: 'jQuery' }
      ]
    },
    watch: {
      current: function (val) {
        // GitHubのAPIからトピックのリポジトリを検索
        axios.get('https://api.github.com/search/repositories', {
          params: {
            q: 'topic:' + val
          }
        }).then(function (response) {
          this.list = response.data.items
        }.bind(this))
      }
    },
  })
  new Vue({
    el: '#app4',
    filters: {
      // 小数点以下を第2位に丸めるフィルタ
      round: function (val) {
        return Math.round(val * 100) / 100
      },
      // 度からラジアンに変換するフィルタ
      radian: function (val) {
        return val * Math.PI / 180
      }
    }
  })

  new Vue({
    el: '#app5',
    data: {
      list: []
    },
    watch: {
      list: function () {
        // 更新後のul要素の高さを取得できない…
        console.log('通常:', this.$refs.list.offsetHeight)
        // nextTickを使えばできる！
        this.$nextTick(function () {
          console.log('nextTick:', this.$refs.list.offsetHeight)
        })
      }
    }
  })