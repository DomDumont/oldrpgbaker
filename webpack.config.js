var path = require('path');

module.exports = {
    entry: './src/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/public')
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    externals: [
        // Don't bundle phaser.js, assume it'll be included in the HTML via a script
        // tag, and made available in the global variable Phaser.
        {
            "phaser": "Phaser"
        }

    ],
    module: {
        rules: [
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',

                options:
                {
                    name: 'data/images/img-[hash].[ext]'
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist/public"),
        compress: true,
        port: 3000
    }
};