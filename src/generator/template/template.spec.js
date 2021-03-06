// Libraries
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';

// Components
import {{componentName}} from '../{{filename}}.vue';

// Mock Data
// import SharedMockData from '@/app/tests/unit/mocks/shared-mock-data';
// import {{componentName}}MockData from './{{filename}}-mock-data';

// Utils
import TestCommonUtils from '@/app/tests/unit/utils/test-common-utils';

// Store
import store from '@/app/stores/store';

const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(VueRouter);

describe('{{componentName}} component', () => {
	// const sharedMD = new SharedMockData;
	// const componentMD = new {{componentName}}MockData;

	let wrapper, utils;

	beforeEach(() => {
		wrapper = shallowMount({{componentName}}, {
			localVue,
			router,
			store
		});

		utils = new TestCommonUtils(wrapper, expect);
	});

	it('renders without errors', () => {
		expect(wrapper).toBeTruthy();
	});

	it('should show {{filename}} element', () => {
		utils.doesExist('.{{filename}}');
	});
});