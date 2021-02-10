<template lang="pug">
	.rewards-list-items.section
		.container
			h5.list-title.text-center.font-weight-normal Here is the full list of prizes that you can win.
			
			.list-container(:class="{'loading': isAPILoading}")
				template(v-if="rewardsList.rewards.length > 0")
					.card.rewards(v-for="reward of rewardsList.rewards" :key="reward._id")
						.img-container
							img.card-img-top(:src="getImageUrl(reward.imageUrl)" :alt="`${reward.name} Image`")
						.card-body
							h5.card-title.text-center.mt-4.font-weight-bold {{ reward.name }}
							a.main-btn.btn.btn-primary(href='javascript:void(0);' @click="toToRewardDetails(reward._id)")
								span.mr-2 Redeem
								vue-fontawesome(:icon="['fas', 'chevron-right']")
				template(v-else)
					h5.no-rewards.text-center.w-100
						span.mr-2 No rewards available
						vue-fontawesome(:icon="['far', 'frown']")
</template>

<script src="./rewards-list-items.js"></script>

<style lang="scss" scoped>
	@import './rewards-list-items.scss';
</style>

