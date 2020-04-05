const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'build/src/client/App.js'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    performance: {
        hints: 'warning'
    }
}
