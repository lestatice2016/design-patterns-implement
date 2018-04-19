function calculate(times) {
    var sum = 0;
    var i = 0;
    for(;i<times;i++)
    {
        sum +=i;
    }
    return sum;
}
//添加打印日志
function addLog(func) {
    return function (args) {
        var start = Date.now();
        var result = func(args);
        var duration = Date.now() - start;
        console.log(func.name+'('+args+')'+'耗时:'+duration+'ms');
        return result;
    };
}

//实现
console.log(addLog(calculate)(10));
console.log(addLog(calculate)(100000));

