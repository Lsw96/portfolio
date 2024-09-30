import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import sass from 'sass';

export default defineConfig({
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				implementation: sass,
				api: 'modern-compiler',
				// silenceDeprecations: ['legacy-js-api'],
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@css': path.resolve(__dirname, './src/assets/css'),
			'@icons': path.resolve(__dirname, './src/assets/icons'),
			'@images': path.resolve(__dirname, './src/assets/images'),
			'@components': path.resolve(__dirname, './src/components'),
			'@hooks': path.resolve(__dirname, './src/components/hooks'),
			'@utils': path.resolve(__dirname, './src/components/utils'),
			'@store': path.resolve(__dirname, './src/store'),
		},
	},
});
