offsetTop：(offset().top !== offsetTop)

在jq里面的offset().top和dom原生的offsetTop会得到不同的结果
offsetTop会计算出当前元素到html的绝对距离；
而offset().top会计算出当前元素到window窗口顶部的距离（也就是说这个值会随滚动条的高度而变化）

offsetHeight:
jq没有offset().height，所以只能使用dom原生的属性offsetHeight


//具体的细节需要查看源码

// 获取到两个新的API

elem.getBoundingClientRect()，获取当前元素的所有的布局属性，包括四个角的坐标（left,top,right,bottom）和实际宽高

jQuery.contains( document.documentElement, elem )    //判断当前元素是否脱离文档流，false代表已经脱离文档流

