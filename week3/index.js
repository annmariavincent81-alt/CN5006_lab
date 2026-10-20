/*
//exercise 1
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
*/
/*
//exercise 2
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
// Add this for Second Exercise 
const EmpSkills= (skills,Name,LabGrp)=> {   
    console.log(" Student ID"+ Name+ "Expert in "+ skills)   
    console.log("Lab Group Name",LabGrp) 
} 
EmpSkills("java","2819156 ","group-4") 
*/
/*
//excersise 2
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
// Add this for Second Exercise 
const EmpSkills= (skills,Name,LabGrp)=> {   
    console.log(" Student ID: "+ Name+ "Expert in "+ skills)   
    console.log("Lab Group number",LabGrp) 
} 
EmpSkills("java","2819156 ","group-4") 

// code for third Exercise 
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
*/

//exercise 4 
os=require("os") 
const util=require('util') 
console.log("temporary directory"+ os.tmpdir() ) 
console.log("hostname: "+ os.hostname()) 
console.log("OS : " + os.platform() +"release:"+ os.release()) 
console.log("Uptime"+ (os.uptime())/3600 +" hours") 
console.log("userInfo" + util.inspect(os.userInfo())) 
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte") 
console.log(" free: "+os.freemem()/1000000000 + "Giga byte") 
console.log("CPU "+ util.inspect(os.cpus())) 
console.log("Network"+ util.inspect(os.networkInterfaces())) 
console.log("programe end") 