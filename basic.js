document.write("Hello World1");
//alert("this is an alert!!!!"); 
var name = 'History! \'I am asd\' ';
var no1,no2;
/*no1=10,no2=21;
if(no1<no2)
	alert("wrong");*/
document.write(name);
function spam()
{
	alert("Your device has been spamed");
}
/*for (i=4;i<7;i++)
{
	spam();
}*/
/*function sayHello(name1)
{
	alert ("Hi "+name1);
}
sayHello("David");
function multiply(a,b)
{
	return a*b;
}
var x =  multiply(5,6);
alert(x);*/
var n= prompt("Your name");
var a= prompt("Your age");
var s= prompt("Your gender");
/*var result= confirm("You wanna leave?");
if(result == true)
	alert("Ok Bye");
else
	alert("Thanks for staying");*/
var person = { n, a, s};
var x=person.n;
var age=person.a;
var gen=person.s;
var output=("Your Name is " +x+ " Age is " +age+", Gen is " +gen);
alert(output);
document.write(n+parseInt(n));
var myString= "65.02 is a string";
var myInt;
var myFloat;
myInt=parseInt(myString);
alert(myInt);