module.exports = {
	parser: '@typescript-eslint/parser', // add the TypeScript parser
	plugins: [
		'svelte3',
		'@typescript-eslint' // add the TypeScript plugin
	],
	overrides: [ // this stays the same
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3'
		}
	],
	rules: {
		// ...
	},
	settings: {
		'svelte3/typescript': () => require('typescript'), // pass the TypeScript package to the Svelte plugin
	}
};