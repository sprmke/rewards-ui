// Libraries
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';

// Components
import {{componentName}} from '../{{filename}}.vue';

// Mock Data
import SharedMockData from '@/app/tests/unit/mocks/shared-mock-data';
import {{componentName}}MockData from './{{filename}}-mock-data';

// Utils
import TestCommonUtils from '@/app/tests/unit/utils/test-common-utils';

const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(VueRouter);

describe('{{componentName}} component existence', () => {
	let wrapper, utils, sharedMD, componentMD;

	beforeEach(() => {
		utils = new TestCommonUtils(wrapper, expect);
		sharedMD = new SharedMockData;
		componentMD = new {{componentName}}MockData;

		wrapper = shallowMount({{componentName}}, {
			localVue,
			router
		});
	});

	it('renders without errors', () => {
		expect(wrapper.isVueInstance()).toBeTruthy();
	});

	it('should show {{filename}} element', () => {
		utils.domHas('.{{filename}}');
	});
});