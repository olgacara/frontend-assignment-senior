/// <reference types="vitest" />
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		setupFiles: "./src/setupTests.ts",
		environment: "jsdom"
	},
	resolve: {
		alias: [{ find: "src", replacement: path.resolve(__dirname, "./src/") }]
	}
});
