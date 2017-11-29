// let vue = new Vue({
//   el: '#app',
//   data: {
//     datas: [{
//       con: 'aaa',
//       active: false,
//       son: [{
//           con: 'aa1',
//           active: false,
//           son: [{
//             con: 'aaa1',
//             active: false
//           }]
//         },
//         {
//           con: 'aa2',
//           active: false
//         },
//         {
//           con: 'aa3',
//           active: false
//         }
//       ]
//     }, {
//       con: 'bbb',
//       active: false
//     }, {
//       con: 'ccc',
//       active: false
//     }]
//   }
// });
// const routes = [
//   {"path":"/","component":con},
//   {"path":"/:id","component":con1},
// ]
// const router = new VueRouter({
//   mode: 'history',
//   routes // （缩写）相当于 routes: routes
// })
// const routes = [
//   {"path":"/","component":con},
//   {"path":"/:id","component":con1},
// ]
// const router = new VueRouter({
// //   mode: 'history',
//   routes // （缩写）相当于 routes: routes
// })
new Vue({
  el:"#app",
  data:{
      datas:[]
  },
//   router:router,
  created(){//当数据绑定完毕后开始赋值
      var current=this;
      fetch("/fetch").then(function (e) {
          return e.json();
      }).then(function(e){
          let data=new Array();
          for(let index in e){
          console.log(e[index])
              data[index]=index;
              for(let value of e[index]){
                  data[index][value]=e[index][value]
              }
          }
          console.log(data);
        //   var arr=e.map(function(a){
        //       var obj={};
        //       obj.title=a.cname;
        //       obj.active=false;
        //       obj.url=a.cid.toString();
        //       return obj;
        //   })
        //   current.datas=arr;
      })
  }
})