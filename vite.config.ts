import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/vue-currency-by-country/",
  plugins: [vue()],
  resolve: {
    alias: [
      
    ]
  },
})