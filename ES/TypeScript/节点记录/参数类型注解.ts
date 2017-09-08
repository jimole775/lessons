function greeter(person:string){    //�ִ���ʽ
    return "Hello " + person;
}

var user1 = "Andy";

console.log(greeter(user1));


interface Person {
    firstName:string;
    lastName:string;
}

function greeter2(person:Person){   //������ʽ,���ڽӿ�����
    return "Hello " + person.firstName + "." + person.lastName;
}

var user2 = {firstName:"Andy",lastName:"Rong"};

//console.log(greeter2(user2));   //����user2��������֤��js����һ���ֲ���˳��ִ�еģ�class���η�������ǰ����


class Person{
    fullName:string;
    constructor (public firstName:string, public middleInitial:string, public lastName:string){ //�����public��ͬ��ֱ�Ӵ����˳�Ա����
        this.fullName = firstName + middleInitial + lastName;
    }
}

var user3 = new Person("John","Snow","Rong");

console.log(greeter2(user3));

//����ܽ�һ�¹�������ע�������֧�����ͣ�
//�ֱ��У� string, number, boolean, [class|object], Array<number|string|class|object>