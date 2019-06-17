//
var a = 2;
var b = 3;
var c = true;
var d = false;
var result = a+b*a++-b++/a*2-b;
//              6    1*2=2 -4
//			2+6-2-4	
console.log(result);    //2

var result = a++>b&&c<d*b+a;
console.log(result);    //false