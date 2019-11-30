'use strict'
const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    lintOnSave: process.env.NODE_ENV === 'development',
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
            }
        },
        plugins: [
            // 配置参数详解
            // 提示 compression-webpack-plugin@3.0.0的话asset改为filename
            // asset： 目标资源名称。 [file] 会被替换成原始资源。[path] 会被替换成原始资源的路径， [query] 会被替换成查询字符串。默认值是 "[path].gz[query]"。
            // algorithm： 可以是 function(buf, callback) 或者字符串。对于字符串来说依照 zlib 的算法(或者 zopfli 的算法)。默认值是 "gzip"。
            // test： 所有匹配该正则的资源都会被处理。默认值是全部资源。
            // threshold： 只有大小大于该值的资源会被处理。单位是 bytes。默认值是 0。
            // minRatio： 只有压缩率小于这个值的资源才会被处理。默认值是 0.8
            new CompressionWebpackPlugin({
                filename: '[path].gz[query]',
                algorithm: 'gzip',
                test: productionGzipExtensions,
                threshold: 10240,
                minRatio: 0.8
            })
        ]
    },
    chainWebpack(config) {
        // config.plugins.delete('preload')
        // config.plugins.delete('prefetch')

        // 设置 svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()

        // 设置保留空白
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.compilerOptions.preserveWhitespace = false
                return options
            })
            .end()
    }
}