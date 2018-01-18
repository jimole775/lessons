//1,创建一个package.json,使用npm init命令；
//2，安装本地的webpack，使用npm install webpack --save-dev




//=========================§WEBPACK配置§=========================

//1，首先，在项目根目录新建一个 webpack.config.js，这是 webpack 默认的配置文件名称，
//然后添加输入，输出路径：***下面的所有路径都支持动态变量***；
module.exports = {
  entry: './main.js',		//一个bundle文件只有一个入口文件，如果引入其他文件，就使用require命令；当然，其他文件必须有导出端口，否则引用没有任何意义
  output:{
	 publicPath:"",	//全部资源的加载都以这个设置为基础, 效果相当于：path.join(publicPath,yourDir)
     path:'./',
     filename:'bundle.js'
  }
};

//2,配置完成之后，运行webpack命令，目录里面就多出了一个bundle.js的文件


//****************# 如果没有写入权限，请尝试如下代码更改权限 *************
//chflags -R nouchg .
//sudo chmod  775 package.json




//=========================§实时刷新§=========================

//1，使用 webpack --watch 命令可以重新生成bundle.js；
//2，使用 webpack-dev-server 可以解决实时刷新界面的问题，
//   不过必须安装一下 npm install webpack-dev-server -g，然后在项目根目录执行 webpack-dev-server；
//   不过访问地址需要改成localhost:8080/webpack-dev-server/index.html否则不会生效；
//   当然，也可以使用webpack-dev-server --inline命令之后直接访问localhost:8080/index.html,不过有几率会卡住，无法更新，所以使用上面一种方法比较安全一点





//=========================§加载第三方库§=========================

//可以使用npm进行安装，比如：

//需要在根目录下安装jQ,
//	npm install jquery --save    //使用save而不是save-dev的原因在于，这些库也是输出代码的一部分
//这样我们就在当前目录下安装了jQ,而且还自动配置了package.json的依赖




//=========================§加载CSS和IMG§=========================

//1，首先，安装必要的加载器  css-loader img-loader style-loader
//2, 使用 require("!style!css!./style.css")   //在这里的调用的用法应该要查阅node require命令的用法
//3, 如果嫌弃上面的引用方法太麻烦,可以自行绑定loader,使用以下命令:
//	webpack entery.js bundle.js --module-bind "css=style!css"	//有些环境下需要使用双引号
//	webpack entery.js bundle.js --module-bind 'css=style!css'


//=========================§压缩打包JS§=========================

//此插件不需要另行安装，属于webpack自带插件

	new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			output: {
				comments: false
			}
		});


//=========================§webpack配置对象的调用§=========================

//有2种配置方法：
//1.运行时采用命令行方式，就采用这种方式进行配置
	module.exports = {
    		// configuration
	};

//2.运行时采用node命令，就需要采用另一种方式
	webpack({
    		// configuration
	}, callback);
