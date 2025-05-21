import path from "node:path"
import { defineConfig } from "vite"
import eslintPlugin from "vite-plugin-eslint"

export default defineConfig( {
	server: {
		port: 3000,
		open: true,
	},
	optimizeDeps: {
		esbuildOptions: {
			target: "esnext",
		}
	},
	build: {
		target: "esnext",
	},
	resolve: {
		alias: {
			"@app": path.resolve( __dirname, "./src/app" ),
			"@lib": path.resolve( __dirname, "./src/library" ),
		},
	},
	plugins: [
		eslintPlugin(),
	]
} )
