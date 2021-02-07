// Vue
import Vue from 'vue';

// Font awesome core
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Solid icons
import { 
	fas,
	faSearch
} from "@fortawesome/free-solid-svg-icons";

const fontAwesome = () => {
	library.add(
		fas,
		faSearch
	);

	Vue.component('vue-fontawesome', FontAwesomeIcon);
	return library;
}

export default fontAwesome;