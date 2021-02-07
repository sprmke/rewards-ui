// core modules
const fs = require('fs');
const path = require('path');

// plugins
const Handlebars = require('handlebars');

// constants
const FILE_NAME = process.argv[2] ? process.argv[2].toLowerCase() : null;

const validateFileName = () => {
	// exit script if there is no component name specified on npm command
	if (!FILE_NAME) {
		console.log('\n× FAILED! \nPlease specify the component name on your npm command.');
		console.log('Example: npm run template maintreqs-cost-options\n\n');
		process.exit();
	} else {
		generateOutputDirectory();
	}
}

const generateOutputDirectory = () => {
	// generate output directory based from component name provided
	const dir = FILE_NAME;
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
		getTemplatePaths();
	} else {
		console.log('\n× FAILED! \nIt seems that the component has been generated already.');
		console.log('Please remove it on the project root directory and try again.\n\n');
		process.exit();
	}
}

const getTemplatePaths = () => {
	// get all files inside scaffhold vue template
	// and pass each of them to generate dynamic component
	const templateDirectoryPath = path.join(__dirname, 'template');

	fs.readdir(templateDirectoryPath, (err, files) => {
		files.forEach(file => {
			generateTemplate({
				templateName: file,
				templateFilePath: `${templateDirectoryPath}/${file}`,
			});
		});
	});
}

const generateTemplate = ({templateName, templateFilePath}) => {
	// generate dynamic component based from template files and component name given
	fs.readFile(templateFilePath, {encoding: 'utf-8'}, (err, data) => {
		if (!err) {
			const templateFormat = templateName.substr(templateName.indexOf('.'));
			const templateContent = Handlebars.compile(data.toString());
			const templateData = templateContent({ 
				filename: FILE_NAME,
				componentName: generateComponentName(FILE_NAME)
			});

			// rename and generate mock data file and append file format
			if (templateName.includes('-mock-data')) {
				templateName = `${FILE_NAME}-mock-data${templateFormat}`;
			} else {
				// rename template file with component name and append file format
				templateName = `${FILE_NAME}${templateFormat}`;
			}

			// insert spec and mock data file inside component unit test folder
			let componentPath = `${FILE_NAME}/${templateName}`;
			if (templateFormat === '.spec.js' || templateName.includes('-mock-data')) {
				componentPath = `${FILE_NAME}/${FILE_NAME}-unit-test`;
				if (!fs.existsSync(componentPath)){
					fs.mkdirSync(componentPath);
				}
				componentPath = `${componentPath}/${templateName}`;
			}

			// generate new files with dynamic content based from template and data given
			fs.writeFile(componentPath, templateData, _err => {
				if (_err) {
					return console.error(`OOps! Failed to generate template: ${_err.message}.`);
				}
			});

		} else {
			console.log(err);
			process.exit();
		}
	});
}

const generateComponentName = (name) => {
	// get component name provided on npm command
	// and convert it to proper case to be used as ComponentName
	name = name.split('-');
	name = name.map(el => {
		// convert string to proper case prototype
		String.prototype.toProperCase = function () {
			return this.replace(/\w\S*/g, (txt) => {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			});
		};
		return el.toProperCase();
	});
	name = name.join('');
	return name;
}

// init geneator
validateFileName();

// display generate component success message
console.log('\n✔ Your component is successfully generated!');
console.log('You can find the generated component directory and and its content on the project root folder.\n\n');