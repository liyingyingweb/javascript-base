//比较运算符
var a = 3;
var b = 3;
var c = 6;
var result = a>=b;
var result1 = a<b;
var result2 = a<=b;
var result3 = a==b;
var result4 = a>b;
var result5 = a<b;
var result6 = a<c;
c++;
var result6 = a<c++;
console.log(result);         //true 满足一个条件就为true
console.log(result1);       //false
console.log(result2);      //true
console.log(result3);     //true
console.log(result4);    //false
console.log(result5);   //false
console.log(result6);   //true