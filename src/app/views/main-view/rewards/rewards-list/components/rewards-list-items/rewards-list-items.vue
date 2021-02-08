<template lang="pug">
	.rewards-list-items.section
		.container
			h5.list-title.text-center.font-weight-normal Here is the full list of prizes that you can win.
			
			.list-container
				.card.rewards(v-for="prize of prizes" :key="prize.id")
					img.card-img-top(:src="prize.image_url" :alt="`${prize.name} Image`")
					.card-body
						h5.card-title.text-center.mt-4.font-weight-bold {{ prize.name }}
						a.main-btn.btn.btn-primary(href='javascript:void(0);' @click="goToPrizePage(prize.id)")
							span.mr-2 Redeem
							vue-fontawesome(:icon="['fas', 'chevron-right']")
</template>

<script src="./rewards-list-items.js"></script>

<style lang="scss" scoped>
	@import './rewards-list-items.scss';
</style>

