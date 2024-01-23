import { defineConfig } from "vite";
import path, { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts(),
  viteStaticCopy({
    targets: [
      {
        src: "node_modules/vue-multiselect/dist/vue-multiselect.css",
        dest: "./",
        rename: 'vue-currency-by-country.css'
      }// Provide the desired name
    ],
  })
  ],

  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "VueCurrencyByCountry",
      fileName: "vue-currency-by-country"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
});

