//旧的数据接口
var arr = [
    'grace',22,'famale'
];
//新的接口
function getData(obj){
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.sex);
}
//适配接口
function arrToObjAdapter(arr) {
    return{
        name : arr[0],
        age : arr[1],
        sex :arr[2]
    }
}

//实现
var obj=arrToObjAdapter(arr);
getData(obj);

