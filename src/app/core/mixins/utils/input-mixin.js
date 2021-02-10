export const inputMixin = {
	data() {
		return {
			typingTimer : null,
			doneTypingInterval: 1000
		}
	},
	methods: {
		delayTyping(functionToExecute) {
			clearTimeout(this.typingTimer);
			
			this.typingTimer = setTimeout( () => {
				functionToExecute();
			}, this.doneTypingInterval);
		}
	}
}