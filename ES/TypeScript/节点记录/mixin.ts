/**
 * Created by Andy on 2017/8/29.
 */

//��ϼ̳У���Ȼ���Լ̳г����࣬Ҳ���Լ̳нӿ�

class Cat {
    name:string;
    age:number;
    cry<T,U>(name:T,age:U):any{
        return {name,age};
    };
}