/*
 * @Author       : 程哲林
 * @Date         : 2022-08-12 17:05:10
 * @LastEditors  : 程哲林
 * @LastEditTime : 2022-08-15 14:55:29
 * @FilePath     : /one-piece-joda-fe/src/main.tsx
 * @Description  : 未添加文件描述
 */
import ReactRenderer from '@alilc/lowcode-react-renderer';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '@alifd/next';

const schema = {
  componentName: 'Page',
  props: {},
  children: [
    {
      componentName: 'Button',
      props: {
        type: 'primary',
        style: {
          color: '#2077ff'
        },
      },
      children: '确定',
    },
  ],
};

const components: any = {
  Button,
};

console.log(ReactRenderer)


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    111
  </React.StrictMode>
);
