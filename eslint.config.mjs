import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		plugins: { js },
		extends: [js.configs.recommended],
		languageOptions: { globals: globals.browser },
		rules: {
			'no-unused-vars': 'error',
			'no-undef': 'error',
		},
	},
	tseslint.configs.recommended,
	eslintConfigPrettier,
	eslintPluginPrettierRecommended,
]);
