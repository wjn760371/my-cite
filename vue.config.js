//vue-cli的配置文件

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://test.my-site.com"
            }
        }
    },
    configureWebpack: require("./webpack.config"),
    publicPath: './',
}