export const rewardMixin = {
	methods: {
		getImageUrl(imageUrl) {
			if (imageUrl) {
				return `${process.env.VUE_APP_SERVER_URL}/${imageUrl}`;
			}
		}
	}
}