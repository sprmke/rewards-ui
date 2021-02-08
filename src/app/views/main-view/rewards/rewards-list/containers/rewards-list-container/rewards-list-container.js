// Components
const RewardsListHero = () => import(/* webpackPrefetch: true, webpackChunkName: 'rewards-list-hero' */ '@/app/views/main-view/rewards/rewards-list/components/rewards-list-hero/rewards-list-hero.vue');
const RewardsListItems = () => import(/* webpackPrefetch: true, webpackChunkName: 'rewards-list-items' */ '@/app/views/main-view/rewards/rewards-list/components/rewards-list-items/rewards-list-items.vue');

export default {
	name: 'RewardsListContainer',
	components: {
		RewardsListHero,
		RewardsListItems
	}
}