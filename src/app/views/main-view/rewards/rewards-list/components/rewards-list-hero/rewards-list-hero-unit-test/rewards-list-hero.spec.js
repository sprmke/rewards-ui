// Libraries
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';

// Components
import RewardsListHero from '../rewards-list-hero.vue';

// Mock Data
import SharedMockData from '@/app/tests/unit/mocks/shared-mock-data';
import RewardsListHeroMockData from './rewards-list-hero-mock-data';

// Utils
import TestCommonUtils from '@/app/tests/unit/utils/test-common-utils';

const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(VueRouter);

describe('RewardsListHero component', () => {
	let wrapper, utils, sharedMD, componentMD;

	beforeEach(() => {
		utils = new TestCommonUtils(wrapper, expect);
		sharedMD = new SharedMockData;
		componentMD = new RewardsListHeroMockData;

		wrapper = shallowMount(RewardsListHero, {
			localVue,
			router
		});
	});

	it('renders without errors', () => {
		expect(wrapper).toBeTruthy();
	});

	it('should show rewards-list-hero element', () => {
		utils.doesExist('.rewards-list-hero');
	});
});