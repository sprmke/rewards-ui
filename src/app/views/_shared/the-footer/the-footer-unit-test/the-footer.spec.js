// Libraries
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';

// Components
import TheFooter from '../the-footer.vue';

// Mock Data
import SharedMockData from '@/app/tests/unit/mocks/shared-mock-data';
import TheFooterMockData from './the-footer-mock-data';

// Utils
import TestCommonUtils from '@/app/tests/unit/utils/test-common-utils';

const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(VueRouter);

describe('TheFooter component existence', () => {
	let wrapper, utils, sharedMD, componentMD;

	beforeEach(() => {
		utils = new TestCommonUtils(wrapper, expect);
		sharedMD = new SharedMockData;
		componentMD = new TheFooterMockData;

		wrapper = shallowMount(TheFooter, {
			localVue,
			router
		});
	});

	it('renders without errors', () => {
		expect(wrapper.isVueInstance()).toBeTruthy();
	});

	it('should show the-footer element', () => {
		utils.domHas('.the-footer');
	});
});