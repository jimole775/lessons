/**
 * Created by Andy on 2017/9/2.
 */
class Animal {
    constructor(a,b){
        console.log(a,b);
    }
}
class Cat extends Animal {
    //static self = new.target; //��̬��������ES7����
    constructor(a,b){
        super(a,b); //�нӸ����constructor
        let self = new.target;  //��ȡ���������
        console.log("say something");
    }
}

var cat = new Cat("a","b");