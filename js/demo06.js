//算术运算符
var a = 1;
var b = 3;
var c = 1+3;
var d = a*b;
var e = c%d;
var f = d-a;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(a+b);
console.log(e);   // % 是得的余数
console.log(f);
 
// ++ 写后边  先把值赋给前边的, 再给自己加1
var g = 2;
g++;
console.log(g++);  //3  先执行g 再加1
console.log(g);   //4

var h = g++;     //先把g赋给h, e自己再加1
console.log(h);    //4
console.log(g);   //5

// ++ 写前边  自身先加1 再把值赋给前边的
var i = ++g;    //自身先加1 再把值赋给i
g--;
console.log(i);    //6
console.log(g);   //5