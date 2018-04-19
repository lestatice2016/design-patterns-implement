var Event = {
    observers : [],
    on : function (registerName,callback) {
        if (!this.observers[registerName])
            this.observers[registerName] = [];
        this.observers[registerName].push(callback);
    },
    emit : function (registerName) {
        var handlers = this.observers[registerName];
        if (handlers){
            for(var i=0;i<handlers.length;i++){
                var func = handlers[i];
                func();
            }
        }
    },
    remove : function (registerName) {
       this.observers[registerName] = '';
    }
};

//实现
Event.on('test1',function () {
    console.log('this is the test1');
});
Event.on('test1',function () {
    console.log('this is also the test1');
});
Event.on('test2',function () {
    console.log('this is  the test2');
});
Event.remove('test1');
Event.emit('test1');
Event.emit('test2');
