# FSReqWrap
出现在fs.open方法中的一个构造函数,new之后得到的req实例，有个oncomplete时间可以绑定callback
代码片段：
``` js
fs.open = function(path, flags, mode, callback_) {
  var callback = makeCallback(arguments[arguments.length - 1])
  mode = modeNum(mode, 0o666)
  if (handleError(( path = getPathFromURL(path)), callback )) return
  if (!nullCheck(path, callback)) return
  var req = new FSReqWrap()
  req.oncomplete = callback
  binding.open(pathModule._makeLong(path), stringToFlags(flags), mode, req)
}
```
# fs.js{process.binding}
