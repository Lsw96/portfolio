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
			'@icons': path.resolve(__dirname, './src/assets/icons'),
			'@images': path.resolve(__dirname, './src/assets/images'),
			'@components': path.resolve(__dirname, './src/components'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@scss': path.resolve(__dirname, './src/styles/scss'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@store': path.resolve(__dirname, './src/store'),
		},
	},
});
