var model;
var View;
var Controller;
//Model
var Model = function () {
    this.val = 0;
    this.obsevers = [];
};
Model.prototype.add = function () {
    this.val ++;
    this.emit();
};
Model.prototype.cut = function () {
    this.val --;
    this.emit();
}
Model.prototype.get = function () {
    return this.val;
}
Model.prototype.addObserver = function (obj) {
    this.obsevers.push(obj);
}
Model.prototype.emit = function () {
    var self = this;
    for(var i=0;i<this.obsevers.length;i++){
        var val=self.get();
        self.obsevers[i].show(val);
    }
}
//View
View = {
    view : document.querySelector('.view'),
    add : document.querySelector('.add'),
    cut :document.querySelector('.cut'),
    addListener:function() {
        var self = this;
        document.querySelector('.operate').addEventListener('click',function (e){
            switch (e.target){
                case self.add : Controller.add();break;
                case self.cut : Controller.cut();break
            }
        });
    },
    show :function(val) {
        this.view.innerText = val +'元';
    },
}
//Controller
Controller ={
    init : function () {
        model = new Model();
        View.addListener();
        model.addObserver(View);
    },
    add : function () {
        model.add();
    },
    cut : function () {
        model.cut();
    }
}

Controller.init();
