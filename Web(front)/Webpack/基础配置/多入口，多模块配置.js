/**
 * Created by Andy on 2017/8/15.
 */

module.exports = {
    entry: ["./index.js","./plugin.js"],    //�����
    output: {
        path:"./",
        filename:"bundle.js"    //��һ����
    }
};

module.exports = {
    entry: {
        indexPro:"./index.js",  //����ڣ�ͬʱ�����
        pluginPro:["./plugin.js","./plugin2.js"]
    },
    output: {
        path:"./",
        filename:"[name].[hash].[chunkhash].js"    //indexPro.js & pluginPro.js
    }
};
