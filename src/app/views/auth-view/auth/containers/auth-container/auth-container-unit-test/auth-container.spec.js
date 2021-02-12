// Libraries
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';

// Components
import AuthContainer from '../auth-container.vue';

// Mock Data
import SharedMockData from '@/app/tests/unit/mocks/shared-mock-data';
import AuthContainerMockData from './auth-container-mock-data';

// Utils
import TestCommonUtils from '@/app/tests/unit/utils/test-common-utils';

const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(VueRouter);

describe('AuthContainer component', () => {
	let wrapper, utils, sharedMD, componentMD;

	beforeEach(() => {
		utils = new TestCommonUtils(wrapper, expect);
		sharedMD = new SharedMockData;
		componentMD = new AuthContainerMockData;

		wrapper = shallowMount(AuthContainer, {
			localVue,
			router
		});
	});

	it('renders without errors', () => {
		expect(wrapper).toBeTruthy();
	});

	it('should show auth-container element', () => {
		utils.doesExist('.auth-container');
	});
});