$(function(){
    function offset(ele){//��������DOMԪ�ؾ����ĵ�������ϵľ���ƫ��
        var l=ele.offsetLeft;
        var t=ele.offsetTop;
        var p=ele.offsetParent;
        while(p){
            if(window.navigator.userAgent.indexOf("MSIE 8")>-1){
                l+=p.offsetLeft;//������һ���ı߿�
                t+=p.offsetTop;
            }else{
                l+=p.offsetLeft+p.clientLeft;//������һ���ı߿�
                t+=p.offsetTop+p.clientTop;
            }
            p=p.offsetParent;
        }
        return {left:l,top:t}

    }
    var p= 0,t=0;
    $(window).scroll(function(){
        p=$(this).scrollTop();
        if(t<p){//����
            $(".rongNav").removeClass("showNav");
        }else{//����
            if(p<=930){
                $(".rongNav").removeClass("showNav");
            }else{
                $(".rongNav").addClass("showNav");
            }
        }
        setTimeout(function(){
            t=p;
        },0);
    });

});