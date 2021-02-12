// Libraries
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';

// Components
import HomeDetails from '../home-details.vue';

// Utils
import TestCommonUtils from '@/app/tests/unit/utils/test-common-utils';

// Store
import store from '@/app/stores/store';

const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(VueRouter);

describe('HomeDetails component', () => {
	let wrapper, utils;

	beforeEach(() => {
		wrapper = shallowMount(HomeDetails, {
			localVue,
			router,
			store
		});

		utils = new TestCommonUtils(wrapper, expect);
	});

	it('renders without errors', () => {
		expect(wrapper).toBeTruthy();
	});

	it('should show home-details element', () => {
		utils.doesExist('.home-details');
	});
});