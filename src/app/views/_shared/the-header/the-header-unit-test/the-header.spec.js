// Libraries
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';

// Components
import TheHeader from '../the-header.vue';

// Mock Data
import SharedMockData from '@/app/tests/unit/mocks/shared-mock-data';
import TheHeaderMockData from './the-header-mock-data';

// Utils
import TestCommonUtils from '@/app/tests/unit/utils/test-common-utils';

const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(VueRouter);

describe('TheHeader component existence', () => {
	let wrapper, utils, sharedMD, componentMD;

	beforeEach(() => {
		utils = new TestCommonUtils(wrapper, expect);
		sharedMD = new SharedMockData;
		componentMD = new TheHeaderMockData;

		wrapper = shallowMount(TheHeader, {
			localVue,
			router
		});
	});

	it('renders without errors', () => {
		expect(wrapper.isVueInstance()).toBeTruthy();
	});

	it('should show the-header element', () => {
		utils.domHas('.the-header');
	});
});