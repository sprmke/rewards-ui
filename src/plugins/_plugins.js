import vueCore from '@/plugins/vue-core';
import bootstrap from '@/plugins/bootstrap';
import fontAwesome from '@/plugins/font-awesome';
import vuelidate from '@/plugins/vuelidate';
import vueFilters from '@/plugins/vue-filters';

const plugins = () => {
	vueCore();
	bootstrap();
	fontAwesome();
	vuelidate();
	vueFilters();
}

export default plugins;