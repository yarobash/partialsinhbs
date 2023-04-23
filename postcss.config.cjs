const path = require('path');

module.exports = {
  plugins: [
    require('postcss-preset-env'),
    require('postcss-mixins')({
      mixinsDir: path.join(__dirname, 'src/shared/styles/mixins/')
    }),
    require('postcss-nested'),
    require('postcss-simple-vars'),
  ],
}
