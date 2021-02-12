// Libraries
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';

// Components
import RewardsListHero from '../rewards-list-hero.vue';

// Utils
import TestCommonUtils from '@/app/tests/unit/utils/test-common-utils';

// Store
import store from '@/app/stores/store';

const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(VueRouter);

describe('RewardsListHero component', () => {
	let wrapper, utils;

	beforeEach(() => {
		wrapper = shallowMount(RewardsListHero, {
			localVue,
			router,
			store
		});

		utils = new TestCommonUtils(wrapper, expect);
	});

	it('renders without errors', () => {
		expect(wrapper).toBeTruthy();
	});

	it('should show rewards-list-hero element', () => {
		utils.doesExist('.rewards-list-hero');
	});
});