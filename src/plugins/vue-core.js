// Vue
import Vue from 'vue';

// Directives
import Directives from '@/app/directives/directives';

// Filters
import Filters from '@/app/filters/filters';

const vueCore = () => {
	Vue.use(Filters);
	Vue.use(Directives);
}

export default vueCore;