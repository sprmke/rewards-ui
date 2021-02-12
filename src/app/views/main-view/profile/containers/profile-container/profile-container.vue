<template lang="pug">
	.profile-container.section.full-height
		.container
			.title-container
				h1.main-header.text-center.mb-5 Profile Details
			|
			.card.profile-content(:class="{'loading h-400': isAPILoading}")
				.card-body
					.top
						.image-container
							img.card-img-top(:src="userImage" :alt="'User image'")
						.user-details
							.form-group.mb-0
								p.label Name:
								p.value {{ user.name }}
							.form-group.mb-0
								p.label Email:
								p.value {{ user.email }}
					.bottom
						.list-container
							.rewards-container(v-if="rewardsList && rewardsList.length > 0")
								.card.rewards(v-for="reward of rewardsList" :key="reward._id")
									.img-container
										img.card-img-top(:src="reward.imageUrl" :alt="`${reward.name} Image`")
									.card-body
										h5.card-title.text-center.mt-4.font-weight-bold {{ reward.name }}
							.no-rewards-container(v-else)
								h5.no-rewards.text-center.w-100.mb-4
									span.mr-2 No rewards yet
									vue-fontawesome(:icon="['far', 'frown']")
								router-link.main-btn.btn(to="/rewards")
										span.mr-2 Get rewards
										vue-fontawesome(:icon="['fas', 'chevron-right']")
</template>

<script src="./profile-container.js"></script>

<style lang="scss" scoped>
	@import './profile-container.scss';
</style>

