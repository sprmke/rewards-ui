// Vue
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// Client View
const ClientView = () => import(/*webpackChunkName: "main-view" */ '@/app/views/client-view/client-view.vue');
const HomeContainer = () => import(/*webpackChunkName: "home-container" */ '@/app/views/client-view/home/containers/home-container/home-container.vue');

// Error
const ErrorView = () => import(/*webpackChunkName: "error-view" */ '@/app/views/error-view/error-view.vue');

const rootTitle = 'Rewards';

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
	routes: [
		 // client
		{
			path: '/',
			component: ClientView,
			children: [
				{
					path: '/',
					name: 'HomeContainer',
					component: HomeContainer,
					meta: {
						title: `${rootTitle} - Home`,
						isAuthRequired: false
					}
				}
			]
		},
		// error
		{
			path: '*',
			name: 'Error View',
			component: ErrorView,
			meta: {
				title: `${rootTitle} - Page Not Found`,
				isAuthRequired: false
			}
		}
	]
});