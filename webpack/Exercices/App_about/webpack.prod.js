import path from "path"

import MiniCssExtractPlugin from 'mini-css-extract-plugin' ;

import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default {
  entry: path.resolve(__dirname, "./src/app.js"),

  module:{
    rules : [
        {
            test : /\.(js)$/,
            exclude : /node_modules/,
            use : ['babel-loader']
        },
        {
            test : /\.(scss)$/,
            use : [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
    ]
  },
  plugins :[
    new MiniCssExtractPlugin()
  ],
  resolve : {
    extensions : ['*', '.js']
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  }
};
