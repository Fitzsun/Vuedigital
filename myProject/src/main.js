// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import VueResource from 'vue-resource'
import DetailPage from './pages/detail'
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false
let router = new VueRouter({
	mode:'history',  //是否启用哈希 HTML5
	routes:[   //MAP
		{
			path:'/',
			component:IndexPage
		},
		{
			path:'/detail',
			component:DetailPage,
			children:[
				{
					path:'analysis',
					component:DetailAnaPage
				},
				{
					path:'count',
					component:DetailCouPage
				},
				{
					path:'forecast',
					component:DetailForPage
				},
				{
					path:'publish',
					component:DetailPubPage
				}
			]
		}
	]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
