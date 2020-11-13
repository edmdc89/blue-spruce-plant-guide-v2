import webpack from 'webpack';

const common: webpack.Configuration = {
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                { useBuiltIns: 'usage', corejs: { version: 3, proposals: 'true' } },
              ],
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
            plugins: ['@emotion', '@loadable/babel-plugin'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'imgs',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

export default common;
