/**
 * Created by 凯洪 on 2016/10/14.
 */
//Model
var exampleData = {
  name: 'Vue.js'
}

//创建一个Vue实例
//连接view 和 model
var exampleVM = new Vue({
  el: '#example-1',
  data: exampleData
})

var exampleVM2 = new Vue({
  el: '#example-2',
  data:{
    greeting: false
  }
})