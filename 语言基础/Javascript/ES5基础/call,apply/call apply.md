#### 暂时知道两种机制：
1. 使某个对象获得其不具备的方法：
``` js
	Array.prototype.slice.call(arguments,index)	//arguments对象不是正常的数组元素，这种用法就是使arguments获得slice方法
```
2. 对象冒充：
``` js
	var old = console;
	console.log = (function(old){
		return function(){
			//do something;
			old.log.call(console,arguments);	
		}		
	})(old)
```