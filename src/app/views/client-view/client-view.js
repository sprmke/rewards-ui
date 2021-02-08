// Components
const TheHeader = () => import(/* webpackPrefetch: true, webpackChunkName: 'the-header' */ '@/app/views/_shared/the-header/the-header.vue');
const TheFooter = () => import(/* webpackPrefetch: true, webpackChunkName: 'the-footer' */ '@/app/views/_shared/the-footer/the-footer.vue');

export default {
	name: 'ClientView',
	components: {
		TheHeader,
		TheFooter
	}
}