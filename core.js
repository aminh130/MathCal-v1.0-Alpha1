//In the name of Allah
//Developed by Mohammad Amin Hosseiny
//amin_hosseiny@ymail.com
//www.aminh.ir
// JavaScript Document
function mah() {
var a = amin.box1.value;
var b = amin.box2.value;
var c = amin.box3.value;
var delta = parseInt(b*b) - parseInt(4*a*c);
if (delta < 0){
j=document.getElementById("javabemoadele")
j.innerHTML="No answer!";
}else{
var x1 = (parseInt(-b) + parseInt(Math.sqrt(delta))) / (2*a);
var x2 = (parseInt(-b) - parseInt(Math.sqrt(delta))) / (2*a);
j=document.getElementById("javabemoadele")
j.innerHTML=x1;
jj=document.getElementById("javabemoadeleh")
jj.innerHTML=x2;
}

}