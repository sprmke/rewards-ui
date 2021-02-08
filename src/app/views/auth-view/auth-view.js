// Components
const TheHeader = () => import(/* webpackPrefetch: true, webpackChunkName: 'the-header' */ '@/app/views/_shared/the-header/the-header.vue');

export default {
	name: 'AuthView',
	components: {
		TheHeader
	}
}