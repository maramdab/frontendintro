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


function changeBackground(){
    if(body[0].style.backgroundColor=='lightgrey'){
    body[0].style.backgroundColor='grey';}
    else{
        body[0].style.backgroundColor='lightgrey'
    }
}