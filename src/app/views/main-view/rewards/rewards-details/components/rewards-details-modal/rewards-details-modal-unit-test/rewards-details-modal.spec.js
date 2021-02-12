// Libraries
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';

// Components
import RewardsDetailsModal from '../rewards-details-modal.vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Utils
import TestCommonUtils from '@/app/tests/unit/utils/test-common-utils';

// Store
import store from '@/app/stores/store';

const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(VueRouter);

describe('RewardsDetailsModal component', () => {
	let wrapper, utils;

	beforeEach(() => {
		wrapper = shallowMount(RewardsDetailsModal, {
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

	it('should show rewards-details-modal element', () => {
		utils.doesExist('.rewards-details-modal');
	});
});