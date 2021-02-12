// Libraries
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';

// Components
import HomeContainer from '../home-container.vue';

// Mock Data
import SharedMockData from '@/app/tests/unit/mocks/shared-mock-data';
import HomeContainerMockData from './home-container-mock-data';

// Utils
import TestCommonUtils from '@/app/tests/unit/utils/test-common-utils';

// Store
import store from '@/app/stores/store';

const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(VueRouter);

describe('HomeContainer component', () => {
	let wrapper, utils, sharedMD, componentMD;

	beforeEach(() => {
		utils = new TestCommonUtils(wrapper, expect);
		sharedMD = new SharedMockData;
		componentMD = new HomeContainerMockData;

		wrapper = shallowMount(HomeContainer, {
			store,
			localVue,
			router
		});
	});

	it('renders without errors', () => {
		expect(wrapper).toBeTruthy();
	});

	it('should show home-container element', () => {
		utils.doesExist('.home-container');
	});
});