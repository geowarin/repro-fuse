const fsbx = require('fuse-box');

const vendors =
  "+axios";

fsbx.FuseBox.init({
  debug: true,
  plugins: [
    fsbx.EnvPlugin({NODE_ENV: "production"}),
    fsbx.JSONPlugin(),
    fsbx.UglifyJSPlugin()
  ]
}).bundle({
  [`dist/vendor.js`]: vendors,
});

