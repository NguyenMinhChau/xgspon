import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/', // Đảm bảo base là '/' cho SPA
	build: {
		outDir: 'dist', // Thư mục đầu ra mặc định của Vite
	},
	server: {
		proxy: {
			'/api': {
				target: 'http://210.245.15.5',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
});
