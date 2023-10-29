// alert("hello");
// var name="Maram";
// let age=25;
// const isMarried=true;
// const salary=400;
// const skills=["js","css","html"];
// var person={
//     Name: "Maram",
//     Age: 25,
//     isMarried:true,
//     Salary:400,
//     skills:["HTML","CSS","JS"]
// };
// console.log(typeof(name),"name:",name);
// console.log(typeof(age),"age",age);
// console.log(typeof(isMarried),"isMarried",isMarried);
// console.log(typeof(salary),"salary:",salary);
// console.log(typeof(skills),"skills:",skills)
// console.log(typeof(person),"person:",person);


// function Summation(num1,num2){
//     let sum=num1+num2;
//     console.log(sum);
//     return sum;
// }
// Summation(10,20);

// sum=sum+1;
// console.log(sum);

var body=document.getElementsByTagName('body');
console.log(body[0]);
var navBar=document.getElementById('headerDiv');
var headerH1=document.getElementById('h1Id');

function changeBackground(){
    if(body[0].style.backgroundColor=='black'){
    body[0].style.backgroundColor='rgb(246, 245, 247)'}
    else{
        body[0].style.backgroundColor='black'
    }
    if (navBar.style.backgroundColor== 'black' ){
        navBar.style.backgroundColor='rgb(153, 146, 160)';
        
    }
    else{
        navBar.style.backgroundColor='black';
       
    }
    if (headerH1.style.color== 'rgb(246, 245, 247)'){
        headerH1.style.color='black'
    }
    else{
        headerH1.style.color='rgb(246, 245, 247)'
    }
    if(navBar.style.border== 'solid rgb(246, 245, 247)'){
        navBar.style.border=' solid black';

    }
    else{
        navBar.style.border= 'solid rgb(246, 245, 247)';
    }
}