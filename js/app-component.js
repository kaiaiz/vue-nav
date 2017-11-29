//路由
//定义路由组件
const home = Vue.component('home', {
  template: `<div>
    <h2>home</h2>
    <img src='img/4.jpg'>
  </div>`
});
const php = Vue.component('php', {
  template: `<div class='con'><h2>php</h2></div>`
});
const item = Vue.component('item', {
  template: `<div><h2>{{$route.params.id}}</h2><p>introduction</p></div>`
});
const info = Vue.component('info', {
  template: `<div>
    <transition name='list' mode='out-in'><router-view></router-view></transition>
  </div>`
});
const list = Vue.component('list', {
  template: `
  <ul class="mui-table-view" style="padding-top:44px;position: absolute;width:100%">
  <li class="mui-table-view-cell mui-media">
  
   <router-link to="/info/list/1" tag="a">
   
   <img class="mui-media-object mui-pull-right" src="img/8.jpg">
          <div class="mui-media-body">
              幸福
              <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
          </div>
</router-link>
      
  </li>
  <li class="mui-table-view-cell mui-media">
     <router-link to="/info/list/2" tag="a">
   
   <img class="mui-media-object mui-pull-right" src="img/18.jpg">
          <div class="mui-media-body">
              幸福
              <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
          </div>
</router-link>
  </li>
  <li class="mui-table-view-cell mui-media">
     <router-link to="/info/list/3" tag="a">
   
   <img class="mui-media-object mui-pull-right" src="img/24.jpg">
          <div class="mui-media-body">
              幸福
              <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
          </div>
</router-link>
  </li>
</ul>
  `
});
const doc = Vue.component('doc', {
      template: `<div class='con js'>
        <router-view name='left'></router-view>
        <router-view name='right'></router-view>
    </div>`,
      beforeRouteEnter(to, from, next) {
        next(function (vm) {
          if (!sessionStorage['login']) {
            router.push("/logins");
          }
        })
      }
      });
    const left = Vue.component('left', {
      template: `<ul class='left'>
    <router-link tag='li' to='#ECMA'>ECMA</router-link>
    <router-link tag='li' to='#DOM'>DOM</router-link>
    <router-link tag='li' to='#BOM'>BOM</router-link>
  </ul>`,
      watch: {
        $route() {
          let hash = this.$route.hash.slice(1);
          console.log(hash)
          let vm = this;

          function animate() {
            if (TWEEN.update()) {
              requestAnimationFrame(animate)
            }
          }
          new TWEEN.Tween({
              tweeningNumber: document.querySelector('.left').scrollTop
            })
            .easing(TWEEN.Easing.Quadratic.Out)
            .to({
              tweeningNumber: (document.querySelector('#' + hash).offsetTop) - 40
            }, 500)
            .onUpdate(function () {
              // vm.animatedNumber = this.tweeningNumber.toFixed(0)
              document.querySelector('.right').scrollTop = this.tweeningNumber.toFixed(0);
            })
            .start()
          animate()
        }
      }
    });
    const right = Vue.component('right', {
      template: `<div class='right'>
  <p>location</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <br /><br /><br /><br />
  <p id='ECMA'>ECMA</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <br /><br /><br /><br />
  <p id='DOM'>DOM</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <br /><br /><br /><br /><br /><br />
  <p id='BOM'>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  <p>hsaljdlglakshdas</p>
  </div>`,
      mounted() {
        console.log(this.$route)
      }
    });
    const login = Vue.component('login', {
      template: `<div class='login'>
    <header class="mui-bar mui-bar-nav">
			<span class='mui-icon mui-icon-undo' @click='back'></span><h1 class="mui-title">登录</h1>
		</header>
		<div class="mui-content">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
			</form>
			<form class="mui-input-group">
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell">
						自动登录
						<div id="autoLogin" class="mui-switch">
							<div class="mui-switch-handle"></div>
						</div>
					</li>
				</ul>
			</form>
			<div class="mui-content-padded">
				<button id='login' class="mui-btn mui-btn-block mui-btn-primary" @click='submit'>登录</button>
				<div class="link-area"><a id='reg'>注册账号</a> <span class="spliter">|</span> <a id='forgetPassword'>忘记密码</a>
				</div>
			</div>
			<div class="mui-content-padded oauth-area">

			</div>
    </div>
    </div>
  `,
      methods: {
        back() {
          router.push('/');
        },
        submit() {
          let account = document.getElementById('account').value;
          var obj = {
            "name": account
          }
          sessionStorage['login'] = JSON.stringify(obj);
          // this.save("login",obj);
          router.push("/doc")
        }
      }
    });
    //映射路由
    const routes = [{
        path: '/',
        component: home
      }, {
        path: '/php',
        component: php
      },
      {
        path: '/info',
        component: info,
        children: [{
            path: '',
            component: list
          },
          {
            path: '/info/list/:id',
            component: item
          }
        ]
      },
      {
        path: '/doc',
        component: doc,
        children: [{
          path: '', //默认路径
          components: {
            left: left,
            right: right
          }
        }]
      },
      {
        path: '/logins',
        component: login
      }
    ];
    //创建路由实例
    const router = new VueRouter({
      linkActiveClass: 'active',
      routes
    });
    //组件
    Vue.component('nav-page', {
      props: ["nav"],
      data() {
        return {
          login,
          name: ''
        }
      },
      template: `<ul class='nav'>
    <router-link to='home' tag='li' exact>home</router-link>
    <router-link tag='li' v-for='(item,key) in nav' v-bind:to='item.title' v-bind:key='key'>{{item.title}}</router-link>
    <router-link to='/logins' v-if='!login' @click='login'>login</router-link>
    <template v-else>
    <p>
      <span>{{name}}</span>
      <span @click='logout'>logout</span>
    </p>
    </template>
  </ul>
  `,
      created() {
        if (sessionStorage['login']) {
          this.name = JSON.parse(sessionStorage['login'])['name'],
          console.log(JSON.parse(sessionStorage['login']));
          this.login = true;
        } else {
          this.login = false;
        }
      },
      methods: {
        logins() {
          this.login = true;
        },
        logout() {
          sessionStorage.removeItem('login');
          router.push('/');
        }
      }
    }); Vue.component('page', {
      props: {
        nav: {
          type: Array
        }
      },
      template: `<div class="page">
    <div class='top'>
      <nav-page v-bind:nav='nav'></nav-page>
    </div>
    <div class='bottom'>
      <transition mode='out-in' name='con'><router-view>
      </router-view></transition>
    </div>
  </div>`
    });