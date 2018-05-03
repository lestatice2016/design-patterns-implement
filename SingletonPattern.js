//通过IIFE也是单例模式实现中重要的一步.
var king = (function () {
    var instance;
    function init() {
        return {
            action : function () {
                console.log('i am a singleton');
            }
        }
    }
    return{
        getInstance :function () {
            if (!instance)
                instance = init();
            return instance;
        }
    }
})();

//实现
var emp1 = king.getInstance();
emp1.action();
var emp2 = king.getInstance();
console.log(emp1 === emp2);//true
