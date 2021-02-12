<template lang="pug">
	.rewards-details-container.section.full-height
		.container(v-if="reward")
			.title-container
				h1.main-header.text-center.mb-5 Reward Details
				router-link.btn-back.btn.mb-3(to="/rewards")
					vue-fontawesome(:icon="['fas', 'chevron-left']")
					span.ml-3 Rewards
			|
			.card.details-container(:class="{'loading h-300': isAPILoading}")
				.card-body
					.left-content
						.image-container
							img.card-img-top(:src="reward.imageUrl" :alt="`${reward.name} Image`")
					.right-content
						.reward-details.mt-4.mb-4
							h3.reward-name.font-weight-bold {{ reward.name }}
							p.reward-quantity.mb-5.mt-2
								strong.mr-1 {{ reward.quantity }}
								| left in stocks
							p.reward-description {{ reward.description }}
						a.main-btn.btn.mt-4(
							:class="{'btn-disabled': isRedeemed}" 
							href='javascript:void(0);' 
							data-toggle='modal' 
							data-target='#rewardsDetailsModal'
						)
							span.mr-2 {{ isRedeemed ? 'Item redemeed' : 'Redeem' }}
							vue-fontawesome(:icon="['fas', 'chevron-right']")
		|	
		rewards-details-modal(v-if="reward" :reward="reward" :isRedeemed="isRedeemed" @successfulRedeem="rewardRedeemed")
</template>

<script src="./rewards-details-container.js"></script>

<style lang="scss" scoped>
	@import './rewards-details-container.scss';
</style>

