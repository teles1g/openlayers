const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', 'whatwg-fetch', './src/app/assets/js/script.js'],
  output: {
    path: path.resolve(__dirname, './src/app/assets/js/'),
    filename: 'main.js',
  },
  performance: { hints: false },
};
