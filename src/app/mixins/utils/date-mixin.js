// Libraries
import { formatISO, parseISO, format, fromUnixTime } from 'date-fns';

export const dateMixin = {
	methods: {
		formatISODate(date) {
			return formatISO(new Date(date.toString().replace(/-/g, ' ')), { representation: 'date' });
		},
		parseISODate(date) {
			return parseISO(date);
		},
		formatDate(date, dateFormat = 'dd-MMM-yyyy') {
			if (typeof date === 'string') {
				date = new Date(parseISO(date));
			}
			if (typeof date === 'number') {
				date = fromUnixTime(date);
			}
			return format(date, dateFormat);
		}
	}
}