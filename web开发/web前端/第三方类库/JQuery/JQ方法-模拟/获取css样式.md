```js
// element:需要设置样式的目标元素;name:样式属性;
function getStyle(element, name) {
    var computedStyle
    try {
        computedStyle = document.defaultView.getComputedStyle(element, null)
    } catch (e) {
        computedStyle = element.currentStyle
    }
    if (name != "float") {
        return computedStyle[name]
    } else {
        return computedStyle["cssFloat"] || computedStyle["styleFloat"]
    }
}
```