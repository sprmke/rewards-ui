# STYLES
This directory contains all global application css and scss related styles.

**IMPORTANT NOTES**
Each scss files must be organized into different modules and submodules.
Never use .css file unless it is a vendor style, use .scss instead to seperate or organize styles.

There are two types of styles main directory:
1. generated
- these are the styles that will be generated into css upon build
- cannot be reused on other css or scss file
2. reference
- these are the styles that will not be generated upon build.
- they only contains sass variable, mixins and other helper functions
- they are used to import these reference styles to other css or scss file and use them

Directory details:
* generated
	1. base
	- heads up when you are going to use any third party theme styles, it may conflict its base styles
	- you can also modify the default base styles
	- must only contain base styles of our application
	2. classes
	- contains most of the common css classes that can be used on our template
	- this will prevent us to declare css rules with the same styles all over again
	3. components
	- contains our application component styles which is organized into multiple scss files (buttons, dropdown, card, modal, table, etc)
	
* reference
	1. helpers
	- must only contain sass helper functions and utilities
	2. variables
	- must only contain sass variables

Learn more:
https://sass-lang.com/documentation