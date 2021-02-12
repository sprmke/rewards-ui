// Libraries
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';

// Components
import RewardsListContainer from '../rewards-list-container.vue';

// Mock Data
import SharedMockData from '@/app/tests/unit/mocks/shared-mock-data';
import RewardsListContainerMockData from './rewards-list-container-mock-data';

// Utils
import TestCommonUtils from '@/app/tests/unit/utils/test-common-utils';

const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(VueRouter);

describe('RewardsListContainer component', () => {
	let wrapper, utils, sharedMD, componentMD;

	beforeEach(() => {
		utils = new TestCommonUtils(wrapper, expect);
		sharedMD = new SharedMockData;
		componentMD = new RewardsListContainerMockData;

		wrapper = shallowMount(RewardsListContainer, {
			localVue,
			router
		});
	});

	it('renders without errors', () => {
		expect(wrapper).toBeTruthy();
	});

	it('should show rewards-list-container element', () => {
		utils.doesExist('.rewards-list-container');
	});
});