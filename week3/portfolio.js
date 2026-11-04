const name = "Ann Maria Vincent";
const studentID = "2819156";
const labGroup = "group-4";

console.log('Student name: ' + name);
console.log('Student ID: ' + studentID);
console.log('Lab group: ' + labGroup    );

//display current date and time
const now = new Date();
console.log('Current date and time: ' + '\n' + now.toLocaleString());

// this creates a arrow function that displlays favourite programming language
const showfavlanguage = (lang) => {
    console.log("favourite programming language: " + lang );
};
showfavlanguage("JavaScript");

//calculating unique value using my student ID using the last 4 digits.
function calculateuniquevalue(id) {
    const last4 = id.slice(-4);
    const sum = last4
    .split ("")
    .reduce ((acc, digit) => acc + parseInt(digit, 10) || 0, 0);
    return sum;
}

const uniqueValue = calculateuniquevalue(studentID);
console.log("Unique value calculated from student ID: " + uniqueValue);