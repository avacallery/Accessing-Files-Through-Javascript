//callback function in fileFoo.readFile({}); 
//Inside of an object, a function is a method. 
//readFile is a method (technically a function) 
//Once readFile is executed first, then the callback function() is executed


var fileFoo = require('fs'); 
//What is require(fs)? What does it do?


// //1. load_dept_names.txt

// fileFoo.readFile('load_dept_names.txt', 'utf8', function(error, data) {
//     if (error) throw(error); 
//     data = data.replace(/\(|\),|\'|\);/g, ""); 
//     //REGULAR EXPRESSION 
// //the backslashes are a form of quotation, | works as or 
//     var departmentNames = []; 
//     var deptArray = data.split("\n"); 
//     //split turns it into an array

//         deptArray.shift();

//     for (var i = 0; i < deptArray.length; i++) {
//         departmentNames.push(deptArray[i].split(","));
//     }
//     console.log(departmentNames);
// } );


// //2. load_dept_emp.txt

// // fileFoo.readFile('load_dept_emp.txt', 'utf8', function(error, data) {
// //     if (error) throw (error)
// //     data = data.replace(/\(|\),|\'|\);|\INSERT INTO `dept_emp` VALUES /g, "");
// //     var departmentEmployees = [];
// //     var employeeArray = data.split("\n");
    
// //     for (var j = 0; j < employeeArray.length; j++){
// //         departmentEmployees.push(employeeArray[j].split(","));
// //     }
// //     //console.log(departmentEmployees);

// // }); 

// fileFoo.readFile('load_employee.txt', 'utf8', function(error, data) {
//     if (error) throw (error)
//     data = data.replace(/\(|\),|\'|\INSERT INTO `employees` VALUES /g, "");
//     employeeInfo = [];
//     splitEmployeeInfo = data.split("\n");

//     for (var j = 0; j < splitEmployeeInfo.length; j++) {
//         employeeInfo.push(splitEmployeeInfo[j].split(",")); 
//     }
//     console.log(employeeInfo)
// }); 

fileFoo.readFile('load_salaries.txt', 'utf8', function(error, data){
    if (error) throw (error);
    data = data.replace(/\(|\),|\'|\INSERT INTO `salaries` VALUES /g, ""); 
    var employeeSalaries = [];
    var splitEmployeeSalaries = data.split("\n");

    for (var s = 0; s < splitEmployeeSalaries.length; s++) {
        employeeSalaries.push(splitEmployeeSalaries[s].split(",")); 
        for (var m = 0; m < splitEmployeeSalaries[s].length; m++) {
            console.log(employeeSalaries[s][1]);
        }
    }
    //console.log(employeeSalaries);
}); 