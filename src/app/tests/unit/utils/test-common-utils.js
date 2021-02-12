class TestCommonUtils {
	constructor(wrapper, expect) {
		this.wrapper = wrapper
		this.expect = expect
	}

	// find
	find(selector) {
		return this.wrapper.find(selector)
	}

	// element existence
	doesExist(selector) {
		this.expect(this.wrapper.find(selector).exists()).toBe(true)
	}
	doesntExist(selector) {
		this.expect(this.wrapper.find(selector).exists()).toBe(false)
	}
	domHas(selector) {
		this.expect(this.wrapper.contains(selector)).toBe(true)
	}
	domHasNot(selector) {
		this.expect(this.wrapper.contains(selector)).toBe(false)
	}
	domHasLength(selector, length) {
		this.expect(this.wrapper.findAll(selector).length).toBe(length)
	}

	// element visibility
	isVisible(selector) {
		this.expect(selector).not.toEqual('none')
	}
	isHidden(selector) {
		expect(this.wrapper.find(selector).hasStyle('display', 'none')).toBe(true)
	}

	// text visibility
	seeInText(text, selector) {
		let wrap = selector ? this.wrapper.find(selector) : this.wrapper
		this.expect(wrap.text()).toContain(text)
	}
	doNotSeeInText(text) {
		this.expect(this.wrapper.text()).not.toContain(text)
	}
	seeInHtml(text, selector) {
		let wrap = selector ? this.wrapper.find(selector) : this.wrapper
		this.expect(wrap.html()).toContain(text)
	}
	doNotSeeInHtml(text) {
		this.expect(this.wrapper.html()).not.toContain(text)
	}
	seeInWrappers(text, selector) {
		let wrappers = this.wrapper.findAll(selector);
		let html = '';
		for (let i in wrappers.wrappers){
			html += wrappers.wrappers[i].html();
		}
		this.expect(html).toContain(text);
	}
	doNotseeInWrappers(text, selector) {
		let wrappers = this.wrapper.findAll(selector);
		let html = '';
		for (let i in wrappers.wrappers){
			html += wrappers.wrappers[i].html();
		}
		this.expect(html).not.toContain(text);
	}

	// check class and attribute
	hasClass(selector, className) {
		return this.expect(this.wrapper.find(selector).classes()).toContain(className);
	}
	hasNotClass(selector, className) {
		return this.expect(this.wrapper.find(selector).classes()).not.toContain(className);
	}
	hasAttribute(selector, attribute) {
		return this.expect(this.wrapper.find(selector).attributes()[attribute]).toBeTruthy()
	}
	hasNotAttribute(selector, attribute) {
		return this.expect(this.wrapper.find(selector).attributes()[attribute]).not.toBeTruthy();
	}
	attributeEqualTo(selector, attribute, expected) {
		return this.expect(this.wrapper.find(selector).attributes()[attribute]).toBe(expected);
	}
	
	// mouse
	click(selector) {
		this.wrapper.find(selector).trigger('click')
	}
	hover(selector) {
		this.wrapper.find(selector).trigger('mouseover')
	}

	// input
	type(text, input) {
		let node = this.wrapper.find(input)
		node.setValue(text)
		node.trigger('input')
	}
	inputChange(text, input) {
		let node = this.find(input)
		node.element.value = text
		node.trigger('input')
		this.wrapper.find(input).trigger('keyup');
	}
	inputBlur(text, input) {
		let node = this.find(input)
		node.element.value = text
		node.trigger('input')
		this.wrapper.find(input).trigger('blur');
	}
	inputValueIs(text, selector) {
		this.expect(this.find(selector).element.value).toBe(text)
	}
	inputValueIsNot(text, selector) {
		this.expect(this.find(selector).element.value).not.toBe(text)
	}
}

export default TestCommonUtils
