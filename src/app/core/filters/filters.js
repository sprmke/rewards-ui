// Libraries
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export default {
	install(Vue, options) {
		// Plugin: vue2-filters
		// Filters: capitalize, uppercase, lowercase, capitalize({ onlyFirstLetter: true }), 
		// placeholder, truncate, currency, pluralize, ordinal, limitBy, filterBy, find, orderBy
		// Link: https://www.npmjs.com/package/vue2-filters

		// round numbers
		Vue.filter('roundNumbers', (number, fixPoint = 2) => {
			return parseFloat(number.toFixed(fixPoint));
		});

		// round number
		Vue.filter('roundNumber', (number, fixPoint = 2) => {
			return parseFloat(number).toFixed(fixPoint);
		});

		// price formal
		Vue.filter('displayPrice', (number, fixPoint = 2) => {
			if (number) {
				return parseFloat(number).toFixed(fixPoint);
			} else {
				return '0.00';
			}
		});

		// LIST
		// array to list
		Vue.filter('arrayToList', (array, seperator) => {
			if (array && array.length > 0) {
				if (typeof array !== 'string') {
					return array.join(`${seperator} `);
				} else {
					return array;
				}
			}
		});
		
		// DATE
		// date and time display format
		Vue.filter('dateTime', (date, timeZone, dateFormat) => {
			const df = dateFormat ? dateFormat : 'dd-MMM-yyyy HH:mm a';
			const datetime = timeZone ? format(utcToZonedTime(date, timeZone), df) : format(date, df);
			return datetime;
		});

		// date and time display format
		Vue.filter('formatDate', date => {
			if (date) {
				return format(new Date(date), 'dd-MMM-yyyy');
			}
		});
	}
}
