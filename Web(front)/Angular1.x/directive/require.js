/**
 * Created by Andy on 2017/11/12.
 */

/**�ֽ׶β���,ֻ�С����Ӽ�����directive�Ż�ʹ���require������Ч,
 �����Ҫ��ͬ��ʹ�õĻ�,��Ҫ������$scopeProvider��ע��~*/

//html:
String(
    `
    <father>
        <son>

        </son>
    </father>
    `
);

//js:
angular.module("app", [])
    .directive("father", function () {
        return {
            controller: function () {
                this.export = "got me!";
            }
        }
    }).directive("son", function () {
        return {
            require:"^father",
            //require:"son",    //���require����son�����൱�ڰѵ�ǰ��ctrl���뵽LINK��
            link:function(A,B,C,D){ //�������ڵ��ĸ���������
                console.log("what is required:",D);
            }
        }
    }
);


/**���Ͼ���ô�򵥾�ִ����~~*/

