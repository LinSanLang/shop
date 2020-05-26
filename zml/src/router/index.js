import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Detail from '../views/Detail.vue'
import Cart from '../views/Cart.vue'
import Mine from '../views/Mine.vue'
import Search from '../views/Search.vue'
import GoSearch from '../views/GoSearch.vue'
import ShopList from '../views/ShopList.vue'
import Detail1 from '../views/Detail1.vue'
import Detail2 from '../views/Detail2.vue'
import Detail3 from '../views/Detail3.vue'
import Detail4 from '../views/Detail4.vue'
import Detail5 from '../views/Detail5.vue'
import Detail6 from '../views/Detail6.vue'


import ShopList1 from '../views/ShopList1.vue'

import HongBao from '../views/HongBao.vue'
import Store from '../views/Store.vue'
import meAdress from '../views/meAdress.vue'
import Set from '../views/Set.vue'
import Invite from '../views/Invite.vue'
import Help from '../views/Help.vue'
import UserSpeak from '../views/UserSpeak.vue'
import StoreList from '../views/StoreList.vue'
import Phone from '../views/Phone.vue'
import YouInvite from '../views/YouInvite.vue'
import YouInvite1 from '../views/YouInvite1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
	meta:{
		navigation:true
	}
  },
  {
    path: '/hongbao',
    name: 'hongbao',
    component: HongBao,
	meta:{
		navigation:true
	}
  },
  {
    path: '/phone',
    name: 'phone',
    component: Phone,
  	meta:{
  		navigation:true
  	}
  },
  {
    path: '/help',
    name: 'help',
    component: Help,
  	meta:{
  		navigation:true
  	}
  },
  {
    path: '/userspeak',
    name: 'userspeak',
    component: UserSpeak,
  	meta:{
  		navigation:true
  	}
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '/detail1/:id',
    name: 'detail1',
    component: Detail1
  },
  {
    path: '/detail2/:id',
    name: 'detail2',
    component: Detail2
  },
  {
    path: '/detail3/:id',
    name: 'detail3',
    component: Detail3
  },
  {
    path: '/detail4/:id',
    name: 'detail4',
    component: Detail4
  },
  {
    path: '/detail5/:id',
    name: 'detail5',
    component: Detail5
  },
  {
    path: '/detail6/:id',
    name: 'detail6',
    component: Detail6
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
	meta:{
		navigation:true,
		auth:true
	}
  },
  {
    path: '/set',
    name: 'set',
    component: Set,
  	meta:{
  		navigation:true,
  	}
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/youinvite',
    name: 'youinvite',
    component: YouInvite
  },
  {
    path: '/youinvite1',
    name: 'youinvite1',
    component: YouInvite1
  },
  {
    path: '/storelist',
    name: 'storelist',
    component: StoreList
  },
  {
    path: '/invite',
    name: 'invite',
    component: Invite,
	meta:{
		navigation:true,
	}
  },
  {
    path: '/store',
    name: 'store',
    component: Store
  },
  {
    path: '/meadress',
    name: 'meadress',
    component: meAdress
  },
  {
    path: '/gosearch',
    name: 'gosearch',
    component: GoSearch,
	meta:{
		navigation:true
	}
  },
  {
    path: '/shoplist',
    name: 'shoplist',
    component: ShopList,
  	meta:{
  		navigation:true
  	}
  },
  {
    path: '/shoplist1',
    name: 'shoplist1',
    component: ShopList1,
  	meta:{
  		navigation:true
  	}
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
	meta:{
		navigation:true
	}
  },
  {
    path: '/category',
    name: 'category',
	component: Category,
	meta:{
		navigation:true
	}
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior(){
	  return{
		  x:0,
		  y:0
	  }
  }
})


router.beforeEach(function(t,f,n){
	console.log(t);
	// n();
	if(t.meta.auth){
		// 获得login数据
		let r=localStorage.getItem("login");
		if(r){
			n();
		}
		else{
			// 将t=后面的数据储存到$route.query下 t:t.path
			n("/mine?t="+t.path);
			
		}
	}
	else{
		n();
	}
})

export default router
