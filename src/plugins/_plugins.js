import vueCore from '@/plugins/vue-core';
import bootstrap from '@/plugins/bootstrap';
import fontAwesome from '@/plugins/font-awesome';
import vuelidate from '@/plugins/vuelidate';
import vueFilters from '@/plugins/vue-filters';
import babel from '@/plugins/babel';

const plugins = () => {
	vueCore();
	bootstrap();
	fontAwesome();
	vuelidate();
	vueFilters();
	babel();
}

export default plugins;