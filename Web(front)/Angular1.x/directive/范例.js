//������
myModule.directive('namespaceDirectiveName', function factory(injectables) {

    return {

        restrict: String,   //ָ���ʹ�÷�ʽ��������ǩ�����ԣ��࣬ע��
        priority: Number,   //ָ��ִ�е����ȼ�
        template: String,   //ָ��ʹ�õ�ģ�壬��HTML�ַ�������ʽ��ʾ
        templateUrl: String,    //��ָ����url��ַ����ģ��
        replace: Boolean,   //�Ƿ���ģ���滻��ǰԪ�أ���Ϊfalse����append�ڵ�ǰԪ����
        transclude: Boolean,    //�Ƿ񽫵�ǰԪ�ص�����ת�Ƶ�ģ����
        scope: [Boolean | Object],  //ָ��ָ���������

        controller: function controllerConstructor($scope, $element, $attrs, $transclude) { //����������ָ����н����Ľӿں���
            //...
        },

        require: String,    //����������ģ������ݣ�һ�㶼��������directive����controllerģ����(��������ֱ�ӵ���controller�ڲ���this����)

        link: function postLink(scope, iElement, iAttrs) {  //�Ա�̵ķ�ʽ����DOM��������Ӽ������ȣ�ע���controller������

                scope.$evalAsync(function(){
                    // executes after compile/link
                    // and before render
                });
                $timeout(function(){
                    // executes after render
                })

        },

        compile: function compile(tElement, tAttrs, transclude) {   //��̵ķ�ʽ�޸�DOMģ��ĸ��������Է������Ӻ���

            return {

                pre: function preLink(scope, iElement, iAttrs, controller) {
                    //...
                },

                post: function postLink(scope, iElement, iAttrs, controller) {
                    //...
                }

            }

        }
    };

});