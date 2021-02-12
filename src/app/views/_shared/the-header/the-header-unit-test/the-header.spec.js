// Libraries
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';

// Components
import TheHeader from '../the-header.vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Utils
import TestCommonUtils from '@/app/tests/unit/utils/test-common-utils';

// Store
import store from '@/app/stores/store';

const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(VueRouter);

describe('TheHeader component', () => {
	let wrapper, utils;

	beforeEach(() => {
		wrapper = shallowMount(TheHeader, {
			localVue,
			router,
			store,
			components: {
				'vue-fontawesome': FontAwesomeIcon
			}
		});

		utils = new TestCommonUtils(wrapper, expect);
	});

	it('renders without errors', () => {
		expect(wrapper).toBeTruthy();
	});

	it('should show the-header element', () => {
		utils.doesExist('.the-header');
	});
});