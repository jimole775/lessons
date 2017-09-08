/**
 * Created by Andy on 2017/8/16.
 */
module.exports = {
    entry: "",
    output: "",
    module: {
        loaders: [   //����������ؿ���ʹ�� loader:"",

            //test���������﷨�������loader�﷨�е����졣����
            {test: "/\.css$/", loader: "style!css!autoprefixer"},

            //exclude�ִ���ʲô��
            {test: "/\.js$/", loader: "babel", exclude: "/node_modules/"},

            //�ʺ���զ���£�
            {test: "/\.scss$/", loader: "style!css!sass?sourceMap"},

            //ͼƬ���أ����С��8k���Զ�ת����base64���룬
            //����ô˵�����ʺŵ��������������жϣ���������ʺź�������ݣ���ִ��ǰ�����䡿
            {test: "/\.(png|jpg|gif)/", loader: "url-loader?limit=8192"},

            //htmlģ����룿
            { test: /\.(html|tpl)$/, loader: 'html-loader' },

            // ����.vue�ļ�
            { test: /\.vue$/, loader: 'vue' }
        ]
    },

    //����blog�����ݣ�vue��module����������һ���������ˣ�������Ҫ�ٵ�������һ�Σ���
    vue:{
        loaders:{
            css:"style!css!autoprefixer",
            html:"html-loader"
        }
    }

};