// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import path from 'path'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
//   build: {
//     rollupOptions:{
//       output: {
//         entryFileNames:"[name].js",
//         chunkFileNames:"[name].js",
//         assetFileNames:"[name].[has].[ext]"
//       }
//     }
//   }

  
// })


// import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // resolve: {
  //   alias: {
  //     "@": fileURLToPath(new URL("src", import.meta.url)),
  //   },
  // },
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, 'index.html'),
  //       dist: resolve(__dirname, 'index.html')
  //     },
  //     external: [
  //       'vue', resolve(__dirname, 'src/main.js'), /node_modules/
  //     ]
  //   }
  // },
});