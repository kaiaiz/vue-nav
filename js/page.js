//侧边栏
Vue.component('my-menu', {
  props: ['msg', 'margin'],
  template: `<div class="menu"><list v-bind:msg="msg" v-bind:margin="0"></list></div>`
});
Vue.component('list', {
  props: ["msg", "margin"],
  data: function () {
    return {
      marginNum: this.margin + 20 + 'px'
    };
  },
  template: `<ul v-bind:style="{marginLeft:'20px'}">
                  <li v-for='item in msg' @click.stop='active(item)'>
                    <router-link>{{item.con}}</router-link>
                    <list v-if='item.son' v-show='item.active' v-bind:msg='item.son' v-bind:margin='marginNum'></list>
                  </li>
                </ul>`,
  methods: {
    active: function (item) {
      if (item.active) {
        item.active = false;
      } else {
        item.active = true;
      }
    }
  }
});
Vue.component('page', {
  props: {
    datas: {
      type: Object
    },
    size: {
      type: Object,
      default: {
        left: '20vh',
        right: '80vh'
      }
    }
  },
  computed: {
    lw() {
      return {
        width: this.size.left
      };
    },
    rw() {
      return {
        width: this.size.right
      };
    }
  },
  template: `<div class='page'>
    <div class='left' v-bind:style="{width:'20vw'}">
      <my-menu v-bind:msg='datas'></my-menu>
    </div>
    <div class='right' v-bind:style="{width:'80vw'}">
      <router-view></router-view>
    </div>
  </div>`,
  mounted() {
    console.log(this.datas)
  }
});

//右侧内容
var con = Vue.component('con', {
  template: '<div>content</div>'
});
//路由
var con1 = Vue.component("con1", {
  data() {
    return {
      con: [],
    }
  },

  created() {
    var id = this.$route.params.id;

    var that = this;
    fetch("/fetch/" + id).then(function (e) {
      return e.json()
    }).then(function (e) {
      console.log(e);
      that.con = e;
      //next();
    })

  },
  beforeRouteUpdate(to, from, next) {

    var id = to.path.slice(1);

    var that = this;
    fetch("/fetch/" + id).then(function (e) {
      return e.json()
    }).then(function (e) {
      console.log(e);
      that.con = e;
      next();
    })
  },
  template: `<ul>
     <li v-for="item in con">
          <h1>{{item.title}}</h1>
          <p>{{item.con}}</p>
     </li>
</ul>`
})