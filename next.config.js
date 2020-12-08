const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    APP_URL: process.env.APP_URL,
    LOCAL: process.env.LOCAL,
  },
};
