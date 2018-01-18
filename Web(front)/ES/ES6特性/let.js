//...let拥有{块级作用域}，var只有全局和函数作用域
//...在ES5中，if、for、while、switch等语句都不是函数，所以它们没有作用域，这些语句内部的变量都会被【提前声明在函数作用域内】；
//...块级作用域可以无限嵌套；
//...【块级作用域可以完全取代立即执行函数】
    {{{{let foo = "bar"};let foo = "baz"}}}


//...在{块级作用域}内，就会对作用域内的变量做“绑定”，不再受外部的影响（相当于严格模式了）；
//    exp:
     let foo = "bar";
     if(true){
    	typeof foo;	//referenceErr
    	let foo;
    }
//...let需要在使用前进行声明，否则就会报错“referenceError”，不会只是undefined的问题(ES5的变量声明提前)
//...这在语法上称为暂时性死区（temporal dead zone）



