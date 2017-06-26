var path = require('path');

module.exports = {
    entry: {game:'./src/client/mainGame.ts', ide:'./src/client/index.tsx'},
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist/server/public')
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    externals: [
        // Don't bundle phaser.js, assume it'll be included in the HTML via a script
        // tag, and made available in the global variable Phaser.
        {
            "phaser": "Phaser",
            "react": "React",
            "react-dom": "ReactDOM"
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
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist/server/public"),
        compress: true,
        port: 3000
    }
};