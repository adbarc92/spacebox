module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
		},
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-unused-vars': [1, { vars: 'local', args: 'after-used' }],
	},
};
