const dateofbirth = "05/07/2006";
const getstudentname = () => {
    return "Ann";
};
const getcampusname = () => {
    return "Uel campus ";
};
//exploring functions and variables outside the module 
exports.getname = getstudentname;
exports.location = getcampusname;
exports.dob = dateofbirth;
//export function with parameter
exports.studentgrade = (marks) => {
    if (marks > 50 && marks < 70) {
        return "B grade";
    } else {
        return "A grade";
    }
};