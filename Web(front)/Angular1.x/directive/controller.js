/**
 * Created by Andy on 2017/11/11.
 */
//control��������$scopeģ������ݣ�
//control���԰󶨺�����Ҳ���԰�һ���࣬Ҳ����˵���Թ���һ��ģ��
//control����ʹ��this���洢һЩ���ԣ�������ģ�飨����������ͬģ���¿��Ի���ȫ��ģ�鶼���ԣ�ʹ��require����������
(function(){
    return{
        //...
        require:"^others",  //����othersģ�������
        controller:function(others){console.log(others)}
    }
})()