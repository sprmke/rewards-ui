// Vue
import Vue from 'vue';

// Font awesome core
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Solid icons
import { 
	fas
} from "@fortawesome/free-solid-svg-icons";

// Regualr Icons
import { 
	far
} from '@fortawesome/free-regular-svg-icons';

// Brand icons
import {
	fab
} from '@fortawesome/free-brands-svg-icons';

const fontAwesome = () => {
	library.add(
		fas,
		far,
		fab
	);

	Vue.component('vue-fontawesome', FontAwesomeIcon);
	return library;
}

export default fontAwesome;