/*
//exercise 1
console.log("Exercise 1"); 

function EmployeeInfo(name, Salary) 
{ 
    console.log("Welcome " + name + " Your monthly Salary is " + Salary); 
} 
// Display current date and time  
const currentDateTime = new Date(); 
console.log("This is my first program"); 
console.log("Programe run on : " +  currentDateTime.toLocaleString()); 
var EmpName = "John"; 
var EmpSalary = 50000; 
// Calling the function
EmployeeInfo(EmpName, EmpSalary); 

console.log("__________________________________________________________"); 
*/

/*
//exercise 2
console.log("Exercise 2"); 

function EmployeeInfo(name, Salary) { 
    console.log("Welcome " + name + " Your monthly Salary is " + Salary); 
}   
// Display current date and time 
const currentDateTime = new Date();   
console.log("This is my first program"); 
console.log("Programe run on : " +  currentDateTime.toLocaleString());   
var EmpName = "John"; 
var EmpSalary = 50000;   
// Calling the function 
EmployeeInfo(EmpName, EmpSalary); 
// second exercise 
const EmpSkills= (skills,Name,LabGrp)=> {   
    console.log(" Student ID"+ Name+ "Expert in "+ skills)   
    console.log("Lab Group Name",LabGrp) 
} 
EmpSkills("java","2819156 ","group-4") 
console.log("__________________________________________________________"); 

*/

//full exercises

//ex1
function EmployeeInfo(name, Salary) {
     console.log("Welcome " + name + " Your monthly Salary is " + Salary); 
} 
// Display current date and time 
const currentDateTime = new Date();   
console.log("This is my first program"); 
console.log("Programe run on : " +  currentDateTime.toLocaleString());   
var EmpName = "Ann"; 
var EmpSalary = 50000;   
// Calling the function 
EmployeeInfo(EmpName, EmpSalary); 
// ex2 
const EmpSkills= (skills,Name,LabGrp)=> {   
    console.log(" Student ID: "+ Name+ "Expert in "+ skills)   
    console.log("Lab Group number",LabGrp) 
} 
EmpSkills("java","2819156 ","group-4") 

// ex3
const student= require('./studentinfo')
const person = require('./person') 
// because getName is the function so we use ()  
console.log("Student Name:" +student.getname())   
console.log(student.location())  
console.log(student.dob)  
// because dob is a variable so we do nt use ()  
console.log(student.studentgrade())  
console.log("grade is "+student.studentgrade(55) ) 
person1= new person("Jim","USA","myemail@gmail.com")  
console.log("using Person Module",person1.getPersonInfo()) 
console.log("Programe ended");


