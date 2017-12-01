/**
 * Created by Andy on 2017/10/15.
 */
const webpack = require('webpack');

const vendors = [
    'iscroll',
    'json2',
    'lazyload'
    // ...������
];

module.exports = {
    output: {
        path: __dirname + "/lib",
        filename: '[name].js',
        library: '[name]'   //dll������ƣ���������ļ�"vendor.js"������Բ鿴
    },
    entry: {
        vendor: vendors
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]', //�������൱��Ҫ����dll�⣬�������Ʊ���Ͷ���Ŀ���һ��
            context:  __dirname
        })
    ]
};



