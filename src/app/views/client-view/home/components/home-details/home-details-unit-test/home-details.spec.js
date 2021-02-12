// Libraries
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';

// Components
import HomeDetails from '../home-details.vue';

// Mock Data
import SharedMockData from '@/app/tests/unit/mocks/shared-mock-data';
import HomeDetailsMockData from './home-details-mock-data';

// Utils
import TestCommonUtils from '@/app/tests/unit/utils/test-common-utils';

const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(VueRouter);

describe('HomeDetails component', () => {
	let wrapper, utils, sharedMD, componentMD;

	beforeEach(() => {
		utils = new TestCommonUtils(wrapper, expect);
		sharedMD = new SharedMockData;
		componentMD = new HomeDetailsMockData;

		wrapper = shallowMount(HomeDetails, {
			localVue,
			router
		});
	});

	it('renders without errors', () => {
		expect(wrapper).toBeTruthy();
	});

	it('should show home-details element', () => {
		utils.doesExist('.home-details');
	});
});