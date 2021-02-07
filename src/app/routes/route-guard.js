import router from '@/app/routes/router';

export default function routeGuard() {
	router.beforeEach((to, from, next) => {
		// set page title based on route meta title
		document.title = to.meta.title;
		next(true);
	});
}