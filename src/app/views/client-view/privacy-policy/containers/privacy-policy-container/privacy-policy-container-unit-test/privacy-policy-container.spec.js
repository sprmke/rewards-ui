// Libraries
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';

// Components
import PrivacyPolicyContainer from '../privacy-policy-container.vue';

// Utils
import TestCommonUtils from '@/app/tests/unit/utils/test-common-utils';

// Store
import store from '@/app/stores/store';

const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(VueRouter);

describe('PrivacyPolicyContainer component', () => {
	let wrapper, utils;

	beforeEach(() => {
		wrapper = shallowMount(PrivacyPolicyContainer, {
			localVue,
			router,
			store
		});

		utils = new TestCommonUtils(wrapper, expect);
	});

	it('renders without errors', () => {
		expect(wrapper).toBeTruthy();
	});

	it('should show privacy-policy-container element', () => {
		utils.doesExist('.privacy-policy-container');
	});
});