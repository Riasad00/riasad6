// document.querySelector("button").addEventListener("mouseover", function listenerfunction(){
//     alert("Hello");
// });
// // document.querySelector("button").addEventListener("mouseover",listenerfunction);
// // document.write("Hello");
// function listenerfunction(a,b){
//     alert(a+b);
// }
// document.querySelector("button").addEventListener("click")
// document.querySelectorAll(".myButton")[0].addEventListener("click",function(){
//     var text=this.innerHTML;
//     document.querySelector("h1").innerHTML=text+ "is clicked";
// });
// var len=document.querySelectorAll(".myButton").length;
// for(var i=0;i<len;i++){
//     document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
//         var text=this.innerHTML;
//         document.querySelector("h1").innerHTML=text+ "is clicked";

// })
// }
// const names=["karim","rahim","John"];
// document.write("for of use </br>");
// for(let name of names){
//     document.write(name+ "\t");
// }
// document.write("for in loop use</br>");
// let person1=[{
//     id:1,
//     name:'Noman',
//     profession:'student'
// },{
//     id:2,
//     name:'Burl',
//     profession:'Cricketer'
// } ]
// for(let t of person1){
//     for(let x in t)
//     document.write(x+" : "+t[x]+"</br>");
// } 
// // for each loop
// // document.write("for each loop use </br>");
// // var numbers=[1,2,5,7];
// // numbers.forEach(myfunction);

// // function myfunction(x){
// //     document.write(x*x+"</br>");
// // }
// // document.write("map use</br>");
// // var squarenumbers= numbers.map(function(x){
// //     return x*x;
// // })
// // document.write(squarenumbers+ "</br>");

document.write("use filter</br>");

var number_filter=[1,21,41,51,95];
var filteredNumbers=number_filter.filter(function(x){
    return x<50;
});
document.write(filteredNumbers+"</br>");
//arrow function
const display=()=>{
    document.write("arrow function</br>");
}
display();
function abc(){
    return "hello without return keyword";
}
//without return keyword
var display2=()=>"hello without return keyword";
document.write("</br>" +display2()+ "</br>");
var students=[
    {
        id:101,
        name:'rakib',
        cgpa:3.40
    },
    {
        id:102,
        name:'kabir',
        cgpa:4.00
    }
]
function showStudents(){
    return students.filter(function(x){
        return x.cgpa>3.67;
    }).map(function(y){
        return y.name;
    });
}
document.write("check:"+students[1].name);
document.write("</br>" + showStudents()+"</br>");

const showStudentswithArrow=()=>students.filter((x)=>x.cgpa>3.67).(map(y)=>y.name);

document.write("</br>"+showStudentswithArrow()+"</br>");



