修改元素ID的时候，最好使用原生JS，element.id = "";
如果使用
$(id).attr(id,newid)来修改，$(id)必须重新获取，否则将会变成undefined