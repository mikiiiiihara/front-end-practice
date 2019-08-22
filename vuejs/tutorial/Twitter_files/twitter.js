// https://jp.vuejs.org/v2/examples/todomvc.html
var STORAGE_KEY = 'todos-vuejs-demo'
var todoStorage = {
  fetch: function() {
    var todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    todos.forEach(function(todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

// リストレンダリング
var app = new Vue({
    el: '#app',
    data: {
      todos: []
    }
  })

// リスト要素を書き換えたい時
// （コンソールでの編集）
// this.$set(更新するデータ, インデックス or キー, 新しい値)
// this.$set(this.list, 0, {id : 1, name: 'キングスライム', hp: 500})

