var isIE = (navigator.appName == "Microsoft Internet Explorer");
//�ж�IEԶԶ��ֹ����һ�ַ���,����ʹ��IE�������еĶ���,��:window.ActiveXObject,document.all��,��Щ�����ڶ���/������ⷨ��!ͨ��Ҫ�ڲ�ͬ���������д��ͬ����ʽ(��ΪIE��ʽ����Ҳ���в�ͬ),�Ǿ͵��жϰ汾��.����������
//������������汾�Ĵ���


//�������� codego.net  �뿴Դ����:
function getBrowser() {
    var browser = {
            msie: false, firefox: false, opera: false, safari: false,
            chrome: false, netscape: false, appname: 'unknown', version: 0
        },
        userAgent = window.navigator.userAgent.toLowerCase();
    if (/(msie|firefox|opera|chrome|netscape)\D+(\d[\d.]*)/.test(userAgent)) {
        browser[RegExp.$1] = true;
        browser.appname = RegExp.$1;
        browser.version = RegExp.$2;
    } else if (/version\D+(\d[\d.]*).*safari/.test(userAgent)) { // safari
        browser.safari = true;
        browser.appname = 'safari';
        browser.version = RegExp.$2;
    }
    return browser.appname + browser.version;
}


//����/������ⷨ
//user-agent�ַ����ṩ�˹���Web������Ĵ�����Ϣ,--codego.net--����������������ƺͰ汾��
//�÷�����һ���ж�����������������������ȷ���ͺţ���ͨ�÷������󲿷�JSר����Ϊ�����������ʣ���Ϊ������Ϊ���ո÷�������д�Ľű��Ǿ�����δ������ġ�
//��ȡIE������İ汾��
//������ֵ����ʾIE�����汾��
function getIEVer1() {
    var ua = navigator.userAgent; //��ȡ�û�����Ϣ
    var b = ua.indexOf("MSIE "); //��������ַ���"MSIE "��λ��
    if (b < 0) {
        return 0;
    }
    return parseFloat(ua.substring(b + 5, ua.indexOf(";", b))); //��ȡ�汾���ַ�������ת��Ϊ��ֵ
}

console.log(getIEVer1()); //������ֵ8(�ҵ�IE8)
//�������ע����������������ں���ʵ�ʵ���ݣ��Ϳ���ʹ�����ַ�����
var ua = navigator.userAgent.toLowerCase(); //��ȡ�û�����Ϣ
var info = {
    ie: /msie/.test(ua) && !/opera/.test(ua), //ƥ��IE�����
    op: /opera/.test(ua), //ƥ��Opera�����
    sa: /version.*safari/.test(ua), //ƥ��Safari�����
    ch: /chrome/.test(ua), //ƥ��Chrome�����
    ff: /gecko/.test(ua) && !/webkit/.test(ua) //ƥ��Firefox�����
};
(info.ie) && console.log("IE�����");
(info.op) && console.log("Opera�����");
(info.sa) && console.log("Safari�����");
(info.ff) && console.log("Firefox�����");
(info.ch) && console.log("Chrome�����");
//ͨ��������������,�����ж��Ƿ���IE��,�������������һ�㶼����ϱ�׼.��Щ�ͻ�ֻ��Ҫ����IE��FF���Ѿ�������.��ô���ǿ���������:


//user-agent�ַ�����ⷨ

//��ȡIE������İ汾��
//������ֵ����ʾIE�����汾��
function getIEVer2() {
    var ua = navigator.userAgent; //��ȡ�û�����Ϣ
    var b = ua.indexOf("MSIE "); //��������ַ���"MSIE "��λ��
    if (b < 0) {
        return 0;
    }
    return parseFloat(ua.substring(b + 5, ua.indexOf(";", b))); //��ȡ�汾���ַ�������ת��Ϊ��ֵ
}
console.log(getIEVer2()); //������ֵ7 ������ϵͳ:
var isWin = (navigator.userAgent.indexOf("Win") != -1); //�����Windowsϵͳ���򷵻�true
var isMac = (navigator.userAgent.indexOf("Mac") != -1); //�����Macintoshϵͳ���򷵻�true
var isUnix = (navigator.userAgent.indexOf("X11") != -1); //�����Unixϵͳ���򷵻�true
var isLinux = (navigator.userAgent.indexOf("Linux") != -1); //�����Linuxϵͳ���򷵻�true ���´󲿷����������ڡ�Javascript��;��