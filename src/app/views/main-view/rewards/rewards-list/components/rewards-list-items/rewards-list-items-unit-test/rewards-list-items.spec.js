// Libraries
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';

// Components
import RewardsListItems from '../rewards-list-items.vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Utils
import TestCommonUtils from '@/app/tests/unit/utils/test-common-utils';

// Store
import store from '@/app/stores/store';

const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(VueRouter);

describe('RewardsListItems component', () => {
	let wrapper, utils;

	beforeEach(() => {
		wrapper = shallowMount(RewardsListItems, {
			localVue,
			router,
			store,
			components: {
				'vue-fontawesome': FontAwesomeIcon
			}
		});

		utils = new TestCommonUtils(wrapper, expect);
	});

	it('renders without errors', () => {
		expect(wrapper).toBeTruthy();
	});

	it('should show rewards-list-items element', () => {
		utils.doesExist('.rewards-list-items');
	});
});