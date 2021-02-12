// Libraries
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';

// Components
import PrivacyPolicyContainer from '../privacy-policy-container.vue';

// Mock Data
import SharedMockData from '@/app/tests/unit/mocks/shared-mock-data';
import PrivacyPolicyContainerMockData from './privacy-policy-container-mock-data';

// Utils
import TestCommonUtils from '@/app/tests/unit/utils/test-common-utils';

const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(VueRouter);

describe('PrivacyPolicyContainer component', () => {
	let wrapper, utils, sharedMD, componentMD;

	beforeEach(() => {
		utils = new TestCommonUtils(wrapper, expect);
		sharedMD = new SharedMockData;
		componentMD = new PrivacyPolicyContainerMockData;

		wrapper = shallowMount(PrivacyPolicyContainer, {
			localVue,
			router
		});
	});

	it('renders without errors', () => {
		expect(wrapper).toBeTruthy();
	});

	it('should show privacy-policy-container element', () => {
		utils.doesExist('.privacy-policy-container');
	});
});