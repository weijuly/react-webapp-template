module.exports = {
  entry: "./src/client/App.jsx",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  performance: {
    hints: "warning"
  }
}
