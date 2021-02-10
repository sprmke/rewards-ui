// Vue
import Vue from 'vue';

// Directives
import Directives from '@/app/core/directives/directives';

// Filters
import Filters from '@/app/core/filters/filters';

const vueCore = () => {
	Vue.use(Filters);
	Vue.use(Directives);
}

export default vueCore;