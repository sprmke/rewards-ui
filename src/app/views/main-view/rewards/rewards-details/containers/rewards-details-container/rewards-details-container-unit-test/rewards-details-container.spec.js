// Libraries
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';

// Components
import RewardsDetailsContainer from '../rewards-details-container.vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Utils
import TestCommonUtils from '@/app/tests/unit/utils/test-common-utils';

// Store
import store from '@/app/stores/store';

const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(VueRouter);

describe('RewardsDetailsContainer component', () => {
	let wrapper, utils;

	beforeEach(() => {
		wrapper = shallowMount(RewardsDetailsContainer, {
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

	it('should show rewards-details-container element', () => {
		utils.doesExist('.rewards-details-container');
	});
});