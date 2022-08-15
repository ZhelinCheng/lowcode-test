/*
 * @Author       : 程哲林
 * @Date         : 2022-08-12 17:05:10
 * @LastEditors  : 程哲林
 * @LastEditTime : 2022-08-15 15:27:44
 * @FilePath     : /one-piece-joda-fe/vite.config.ts
 * @Description  : 未添加文件描述
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import resolveExternalsPlugin from 'vite-plugin-resolve-externals';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    resolveExternalsPlugin({
      'prop-types': 'PropTypes',
      lodash: () => `
      const _ = window._;
      export default _;
      export const isEmpty = _.isEmpty;
    `,
      '@id/lodash': () => `
      const _ = window._;
      export default _;
      export const isEmpty = _.isEmpty;
      export const pick = _.pick;
      export const isEqualWith = _.isEqualWith;
      export const cloneDeep = _.cloneDeep;
      export const throttle = _.throttle;
      export const throttle = _.debounce;
    `
    })
  ],
  optimizeDeps: {
    exclude: ['@alilc/lowcode-react-renderer']
  },
  build: {
    rollupOptions: {
      external: ['prop-types']
    }
  }
});
