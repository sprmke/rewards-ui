// vue
import Vue from 'vue';
import App from '@/app/app.vue';

// router
import router from '@/app/routes/router';
import routeGuard from '@/app/routes/route-guard.js';

// store
import store from '@/app/stores/store';

// styles
import '@/app/styles/generated/main.scss';

// plugins
import plugins from '@/plugins/_plugins';
plugins();

// service worker
import '@/registerServiceWorker';

// production configs
Vue.config.productionTip = false;

// register route guard
routeGuard();

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
