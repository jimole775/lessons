/**
 * Created by Andy on 2017/8/28.
 */

/**���ʴʻ�*/
//�ṹ�����ͣ�
//��������ϵͳ��
//�ṹ����ϵͳ��


//��ν���ͼ��ݣ�����һ�����ݵĽṹ����ʱ���ڲ����Ի���ǰ���ݣ���������ҵ����õ�������
interface Foo{
    name:string;
}

let bar = {name:"andy",age:10};

let foo:Foo;
foo = bar;  //��ֵ�����󣬲��ᱨ��

console.log(foo.name);


function getter(arg:Foo){
    return arg.name;
}

getter(bar);    //��ֵ�����󣬲��ᱨ��


