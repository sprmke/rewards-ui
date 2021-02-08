export default {
	name: 'RewardsListItems',
	data() {
		return {
			prizes: [
				{
					id: 1,
					name: 'Prize 1',
					description: 'This is the prize number 1',
					image_url: 'https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2020-09/gsSXdOaEQE.jpg',
					quantity: 5
				},
				{
					id: 12,
					name: 'Prize 2',
					description: 'This is the prize number 2',
					image_url: 'https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2020-09/gsSXdOaEQE.jpg',
					quantity: 3
				},
				{
					id: 3,
					name: 'Prize 3',
					description: 'This is the prize number 3',
					image_url: 'https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2020-09/gsSXdOaEQE.jpg',
					quantity: 12
				},
				{
					id: 4,
					name: 'Prize 4',
					description: 'This is the prize number 4',
					image_url: 'https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2020-09/gsSXdOaEQE.jpg',
					quantity: 7
				},
				{
					id: 5,
					name: 'Prize 5',
					description: 'This is the prize number 5',
					image_url: 'https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2020-09/gsSXdOaEQE.jpg',
					quantity: 2
				},
				{
					id: 6,
					name: 'Prize 6',
					description: 'This is the prize number 6',
					image_url: 'https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2020-09/gsSXdOaEQE.jpg',
					quantity: 15
				},
			]
		}
	},
	methods: {
		goToPrizePage(prizeId) {
			this.$router.push(`/rewards/${prizeId}`);
		}
	}
}