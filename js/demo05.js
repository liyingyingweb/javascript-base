//复合数据类型
var xiaoming = new Object();
xiaoming.age = 21;
xiaoming.fuse = "black";   //fuse 是否结婚
xiaoming.tui = 2;
xiaoming.ismale = false;
xiaoming.idcard = '12738917989089';
// function 功能 行为 方法
xiaoming.say = function(){
	console.log("hello");
}
console.log(xiaoming);
console.log(xiaoming.age);
xiaoming.say();
