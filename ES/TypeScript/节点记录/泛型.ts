/**
 * Created by Andy on 2017/8/26.
 */

/**������ɬ�Ĵʻ�*/
//���ͱ�����<T>����Ȼ��������������T�ַ���Ҳ�������κ������Ϸ��ַ��� ��һ���any���Ͳ�࣬����ʹ��any��ʱ��ᶪʧ�̳е���Ϣ��
//Ԫ�����ͣ�ָһ�������Ԫ�ص����ͣ�ԭ�������Ǹ�Ԫ��������T�����飬������Ԫ��������T�����顣��
//����ǩ����������

/**���ͽӿ�*/
interface Foo<T> {  //������͵�ֵֻҪ��ֵ��һ�Σ�����ĳ�Ա�Ϳ���ֱ�Ӽ̳���ͬ��ֵ
    bar:T;  //��������ͺ������һ��
    baz:(x:any, y:any) => any;  //����ڲ������͵�ʱ��ʹ��any���ڷ���ֵ����Ͳ���̳в����ڵ����Ͷ���
}


/**������ͷ��ͽӿڲ��*/
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

/**����Լ��*/

//��ʼ����Ĭ�ϲ������κη��������ԣ������ڱ����ʱ�����ʾ����
function loggingIdentity<T>(arg: T): T {
    //console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}

interface Lengthwise{
    length:number;
}

function loggingIdentity1<T extends Lengthwise> (arg : T) : T{
    console.log(arg.length);  // access
    return arg;
}

