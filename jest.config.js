module.exports = {
	"moduleFileExtensions": [
		"js",
		"json",
		"vue"
	],
	"transform": {
		".*\\.(vue)$": "vue-jest",
		".*\\.(js)$": "babel-jest"
	}, 
	"moduleNameMapper": { 
		"^@/(.*)$": "<rootDir>/src/$1",
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetsTransformer.js", "\\.(css|less)$": "<rootDir>/assetsTransformer.js"
	},
	transformIgnorePatterns: [
		"/node_modules/"]
		,
	testPathIgnorePatterns: [
		"/generator/"
	],	
	setupFiles: [
		"<rootDir>/src/app/tests/unit/config/setup-jest.js"
	]
};