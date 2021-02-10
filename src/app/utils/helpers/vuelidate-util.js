// Vuelidate validators
import { required, email , numeric, integer,  alpha,  url,  minLength,  maxLength, sameAs } from 'vuelidate/lib/validators';

// Date-fns helpers
import { formatISO, isBefore, parseISO, isDate, isAfter } from 'date-fns';

export const vuelidateUtil = {
	setFieldsRequired(fieldNames, isRequired, selectedRequiredFields) {
		let requiredFields = {};
		for (let fieldName in fieldNames) {
			if (isRequired) {
				requiredFields[fieldName] = { required };
			} else {
				if (selectedRequiredFields.length > 0 && selectedRequiredFields.includes(fieldName)) {
					requiredFields[fieldName] = { required };
				} else {
					requiredFields[fieldName] = { };
				}
			}
		}
		return requiredFields;
	},
	setRequiredValidation(object, fieldName) {
		// Required
		if (object[fieldName]) {
			object[fieldName].required = required;
		}
		return object;
	},
	setIsPastDate(object, fieldName) {
		if (object[fieldName]) {
			object[fieldName].isPastDate = isPastDate;
		}
		return object;
	},
	setIsFutureDate(object, fieldName) {
		if (object[fieldName]) {
			object[fieldName].isFutureDate = isFutureDate;
		}
		return object;
	},
	setEmailValidation(object, fieldName) {
		// Email
		if (object[fieldName]) {
			object[fieldName].email = email;
		}
		return object;
	},
	setNumericValidation(object, fieldName) {
		// Accepts only numerics.
		if (object[fieldName]) {
			object[fieldName].numeric = numeric;
		}
		return object;
	},
	setIntegerValidation(object, fieldName) {
		// Accepts positive and negative integers.
		if (object[fieldName]) {
			object[fieldName].integer = integer;
		}
		return object;
	},
	setAlphaValidation(object, fieldName) {
		// Accepts only alphabet characters.
		if (object[fieldName]) {
			object[fieldName].alpha = alpha;
		}
		return object;
	},
	setURLValidation(object, fieldName) {
		// Accepts only URLs.
		if (object[fieldName]) {
			object[fieldName].url = url;
		}
		return object;
	},
	setMinLengthValidation(object, fieldName, value) {
		// Requires the input to have a minimum specified length, inclusive. Works with arrays.
		if (object[fieldName]) {
			object[fieldName].minLength = minLength(value);
		}
		return object;
	},
	setMaxLengthValidation(object, fieldName, value) {
		// Requires the input to have a maximum specified length, inclusive. Works with arrays.
		if (object[fieldName]) {
			object[fieldName].maxLength = maxLength(value);
		}
		return object;
	},
	setSameFieldValueValidation(object, fieldName1, fieldName2) {
		// Requires same field value
		if (object[fieldName1] && object[fieldName2]) {
			object[fieldName1].sameAs = sameAs(vm => {
				return vm[fieldName2];
			});
		}
		return object;
	},
	setHasUpperCase(object, fieldName) {
		// Requires the input to have at least 1 Capital Letter
		if (object[fieldName]) {
			object[fieldName].hasUpperCase = hasUpperCase;
		}

		return object;
	},
	setHasNumber(object, fieldName) {
		// Requires the input to have at least 1 Number
		if (object[fieldName]) {
			object[fieldName].hasNumber = hasNumber;
		}

		return object;
	},
	setChecked(object, fieldName) {
		if (object[fieldName]) {
			object[fieldName].checked = value => value === true
		}
		return object;
	},
	setMultipleEmailValidation(object, fieldName) {
		// Comma seperated emails helper methods
		if (object[fieldName]) {
			object[fieldName] = {
				$each: {
					required,
					email
				}
			}
		}

		return object;
	},
	splitEmailAddresses(emailAddress) {
		let list = emailAddress.split(',');
		let emailListTrimmed = [];

		// Push and trims the values
		for (let i = 0; i < list.length; i++) {
			let item = list[i].trim();
			emailListTrimmed.push(item);
		}

		return emailListTrimmed;
	}
}

export const isPastDate = (date) => {
	let isValid = false;
	let dateToday = formatISO(new Date(), {representation: 'date'});

	if (!date) {
		return isValid;
	}
	if (isDate(date)) {
		isValid = !isBefore(date, parseISO(dateToday));
	} else {
		let parsedDate = formatISO(new Date(date), {representation: 'date'});
		isValid = !isBefore(parseISO(parsedDate), parseISO(dateToday));
	}
	return isValid;
}

export const isFutureDate = (date) => {
	let isValid = false;
	let dateToday = formatISO(new Date(), {representation: 'date'});

	if (!date) {
		return isValid;
	}
	if (isDate(date)) {
		isValid = !isAfter(date, parseISO(dateToday));
	} else {
		let parsedDate = formatISO(new Date(date), {representation: 'date'});
		isValid = !isAfter(parseISO(parsedDate), parseISO(dateToday));
	}
	return isValid;
}

export const hasUpperCase = (password) => {
	let validator = password.match(/[A-Z]/);
	let isValid = false;

	// Check if Validator is not Null and has Capital Letter
	if (validator && validator.length >= 1) {
		isValid = true;
	}
	return isValid;
}

export const hasNumber = (password) => {
	let validator = password.match(/[0-9]/);
	let isValid = false;

	// Check if Validator is not Null and has Number
	if (validator && validator.length >= 1) {
		isValid = true;
	}
	return isValid;
}