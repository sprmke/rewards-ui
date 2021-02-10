// Vue
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// Client View
const ClientView = () => import(/*webpackChunkName: "client-view" */ '@/app/views/client-view/client-view.vue');
const HomeContainer = () => import(/*webpackChunkName: "home-container" */ '@/app/views/client-view/home/containers/home-container/home-container.vue');
const TermsConditionContainer = () => import(/*webpackChunkName: "terms-condition-container" */ '@/app/views/client-view/terms-conditions/containers/terms-condition-container/terms-condition-container.vue');
const PrivacyPolicyContainer = () => import(/*webpackChunkName: "privacy-policy-container" */ '@/app/views/client-view/privacy-policy/containers/privacy-policy-container/privacy-policy-container.vue');

// Main View
const MainView = () => import(/*webpackChunkName: "main-view" */ '@/app/views/main-view/main-view.vue');
const RewardsListContainer = () => import(/*webpackChunkName: "rewards-list-container" */ '@/app/views/main-view/rewards/rewards-list/containers/rewards-list-container/rewards-list-container.vue');
const RewardsDetailsContainer = () => import(/*webpackChunkName: "rewards-details-container" */ '@/app/views/main-view/rewards/rewards-details/containers/rewards-details-container/rewards-details-container.vue');

// Main View
const AuthView = () => import(/*webpackChunkName: "auth-view" */ '@/app/views/auth-view/auth-view.vue');
const AuthContainer = () => import(/*webpackChunkName: "auth-container" */ '@/app/views/auth-view/auth/containers/auth-container/auth-container.vue');
const AuthLogin = () => import(/*webpackChunkName: "auth-login" */ '@/app/views/auth-view/auth/components/auth-login/auth-login.vue');
const AuthRegister = () => import(/*webpackChunkName: "auth-register" */ '@/app/views/auth-view/auth/components/auth-register/auth-register.vue');

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
						isAuthRequired: false,
						isGloballyAccessible: true
					}
				},
				{
					path: '/terms-and-conditions',
					name: 'TermsConditionContainer',
					component: TermsConditionContainer,
					meta: {
						title: `${rootTitle} - Terms & Conditions`,
						isAuthRequired: false,
						isGloballyAccessible: true
					}
				},
				{
					path: '/privacy-policy',
					name: 'PrivacyPolicyContainer',
					component: PrivacyPolicyContainer,
					meta: {
						title: `${rootTitle} - Privacy Policy`,
						isAuthRequired: false,
						isGloballyAccessible: true
					}
				}
			]
		},
		// main
		{
			path: '/',
			component: MainView,
			children: [
				{
					path: '/rewards',
					name: 'RewardsListContainer',
					component: RewardsListContainer,
					meta: {
						title: `${rootTitle} - Rewards List`,
						isAuthRequired: true
					}
				},
				{
					path: '/rewards/:rewardId',
					name: 'RewardsDetailsContainer',
					component: RewardsDetailsContainer,
					meta: {
						title: `${rootTitle} - Rewards Details`,
						isAuthRequired: true
					}
				}
			]
		},
		// auth
		{
			path: '/auth',
			component: AuthView,
			children: [
				{
					path: '/auth',
					name: 'AuthContainer',
					component: AuthContainer,
					redirect: '/auth/register',
					children: [
						{
							path: 'login',
							name: 'AuthLogin',
							component: AuthLogin,
							meta: {
								title: `${rootTitle} - Login`,
								isAuthRequired: false
							}
						},
						{
							path: 'register',
							name: 'AuthRegister',
							component: AuthRegister,
							meta: {
								title: `${rootTitle} - Register`,
								isAuthRequired: false
							}
						}
					]
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
				isAuthRequired: false,
				isGloballyAccessible: true
			}
		}
	]
});