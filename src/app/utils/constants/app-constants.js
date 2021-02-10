export const STATUS = {
	// Success
	SUCCESS: {
		code: 200,
		message: 'Success'
	},
	CREATED: {
		code: 201,
		message: 'Created'
	},
	NO_CONTENT: {
		code: 204,
		message: 'No Content'
	},
	// Errors
	BAD_REQUEST: {
		code: 400,
		message: 'Bad Request'
	},
	UNAUTHORIZED: {
		code: 401,
		message: 'Unauthorized'
	},
	NOT_FOUND: {
		code: 404,
		message: 'Not Found'
	},
	UNPROCESSABLE_ENTITY: {
		code: 422,
		message: 'Unprocessable Entity'
	},
	INTERNAL_SERVER_ERROR: {
		code: 500,
		message: 'Internal Server Error'
	}
};

export const TOKEN = {
	EXPIRY: {
		hours: '1h',
		seconds: 3600,
		milliseconds: 3600000
	}
}