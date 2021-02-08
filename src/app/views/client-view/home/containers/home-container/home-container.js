// Components
const HomeHero = () => import(/* webpackPrefetch: true, webpackChunkName: 'home-hero' */ '@/app/views/client-view/home/components/home-hero/home-hero.vue');
const HomeDetails = () => import(/* webpackPrefetch: true, webpackChunkName: 'home-details' */ '@/app/views/client-view/home/components/home-details/home-details.vue');

export default {
	name: 'HomeContainer',
	components: {
		HomeHero,
		HomeDetails
	}
}