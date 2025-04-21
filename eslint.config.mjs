import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
// import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		plugins: { js },
		extends: [js.configs.recommended],
		languageOptions: { globals: globals.browser },
		// rules中可以写一些自己想用的规则， 以下两个规则其实 js.configs.recommended 中已包括， 可以不用写
		rules: {
			'no-unused-vars': 'error',
			'no-undef': 'error',
		},
	},
	tseslint.configs.recommended,
	eslintConfigPrettier,
]);
