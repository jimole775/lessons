
# cellIndex
tableCell 有一个cellIndex属性
可以判断当前的单元格在单行里面的下标,如果经过ng-if处理过而被删除（或者未渲染）的, 这个cellIndex的值是 -1

# offsetParent
所有的元素在隐藏的情况下, 这个值就为null, 那么js可以根据这个值来判断元素是否隐藏！！

# offsetTop
这个属性存储的是当前元素的顶部边框到body顶部边框的距离（包括margin的值）