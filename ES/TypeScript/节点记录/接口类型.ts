/**
 * Created by Andy on 2017/8/25.
 */

interface LabelledValue {
    label:string;
    width?:number;  /**��ѡ����*/
}

//function createSquareOrg(labelOpt:{label?:string}):any{ //��ʹ�ýӿ����͵������Ҳ��������ʹ��
//
//}

function createSquare(labelOpt:LabelledValue):any{
    return labelOpt.label;
}

createSquare({label:"div"});


/**ֻ������*/
interface Point {
    //readonly  x: number;   //��������ôд�ģ���֪��Ϊʲô�༭����֧�֣����Ǳ����������û�����
    //readonly  y: number;
    x:number;
    y:number;
}

function readPoint(coord:Point){
    return coord.x + coord.y;
}

readPoint({x:5,y:6});

let ary : ReadonlyArray<number>= [1,2.3,4];

ary[0] = 2;


/**�����ӿ�*/
interface Func{
    (foo:string,bar:string):boolean;
}

let mySearch:Func;
mySearch = function(foz,baz){ //���ﲻһ����Ҫ��������ͬ,����Ҳ����Ҫ�ٹ涨����
    return true;
};

/**�������Ľӿ�*/
//����һ��ֻ�����飬�涨�±����������ͣ�
interface ReadOnlyArray{
    //readonly [index:number]:string;
    [index:number]:string;
}
let myArray : ReadOnlyArray = [1,23,4,67,8];
myArray[0] = 2; //error
myArray["foo"]; //error


/***/



