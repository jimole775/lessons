/**���ã�super�ؼ������ڷ��ʸ����prototype����,Ҳ����˵����ֻ���ڼ̳е��У��ֽ׶ο�����ȫ���Ϊsuper���Ǹ����constructor����*/
/**�﷨��*/
/**     super([arguments]); ���ʲ����ظ����prototype����*/
/**     super.funcName([arguments]);   ���ʲ����ؾ��巽��*/
"use strict";
//ʵ��һ��Array�ĸ���
class MyArray extends Array{
    constructor(){
        super(); //��this�󶨵�������
        console.log(new.target);
        this.history = [[]];
    }
    commit(){
        this.history.push(this.slice());
    }
    revert(){
        this.splice(0,this.length,...this.history[this.history.length - 1]);
    }

}
let foo = new MyArray();
foo.push(1);
foo.push(2);
foo.push(3);
foo.push(4);
foo.commit();
console.log(foo,foo.history);
foo.revert();
console.log(foo,foo.history);
