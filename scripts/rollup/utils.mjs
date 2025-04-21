import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import ts from 'rollup-plugin-typescript2';
import cjs from '@rollup/plugin-commonjs';

// ESM 无法使用commonjs的环境变量，所以需要通过以下方式达到同一效果
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packPath = path.resolve(__dirname, '../../packages');
const distPath = path.resolve(__dirname, '../../dist/node_modules');

// 区分环境， 打包前和打包后环境
export function resolvePkgPath(pkgName, isDest) {
	if (isDest) {
		return `${distPath}/${pkgName}`;
	}
	return `${packPath}/${pkgName}`;
}

// 获取package.json中的JSON
export function getPackageJSON(pkgName) {
	const pkgPath = `${resolvePkgPath(pkgName)}/package.json`;
	const content = fs.readFileSync(pkgPath, { encoding: 'utf-8' });
	return JSON.parse(content);
}

export function getBaseRollupPlugins({ typescript = {} } = {}) {
	return [cjs(), ts(typescript)];
}
