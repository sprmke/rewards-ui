// Libraries
import router from '@/app/routes/router';
import store from '@/app/stores/store';

export default function routeGuard() {
	router.beforeEach((to, from, next) => {
		// get auth token
		const authToken = store.getters.getAuthToken;

		// get route details
		const requiredAuth = to.meta.isAuthRequired;
		const globalRoute = to.meta.isGloballyAccessible;
		const referrerRoute = to.fullPath ? to.fullPath : '/';

		// get page data
		let metaTitle = '';
		const rootTitle = 'Rewards';

		if (globalRoute) {
			metaTitle = to.meta.title;
			next(true);
		} else {
			// check if destination route required authentication
			if (requiredAuth) {
				// check if token exists
				if (authToken) {
					metaTitle = to.meta.title;
					next(true);
				} else {
					// redirect to home
					metaTitle = `${rootTitle} - Home`;
					next({path: '/', query: { from: referrerRoute }});
				}
			} else {
				// if user is logged in, redirect back to authenticated pages. 
				// prevent going back to login and register pages.
				if (authToken) {
					metaTitle = `${rootTitle} - Home`;
					next({path: '/', query: { from: referrerRoute }});
				} else {
					metaTitle = to.meta.title;
					next(true);
				}
			}
		}

		// set page title based on route meta title
		document.title = metaTitle;
	});
}