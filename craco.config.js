const CracoLessPlugin = require('craco-less');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = {
  webpack: {
    plugins: [new AntdDayjsWebpackPlugin()],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@text-color': '#244658',
              '@text-color-secondary': '#1a3d56',
              '@primary-color': '#0a9396ff',
              '@body-background': '#f5f6f8',
              '@component-background': '#ffffff',
              '@border-radius-base': '8px',
              '@height-base': '48px',
              '@height-lg': '56px',
              '@height-sm': '32px',
              '@font-size-base': '16px',
              '@line-height-base': 1.5,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
