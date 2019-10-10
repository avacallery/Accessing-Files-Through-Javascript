var fileFoo = require('fs');


//1. load_dept_names.txt
var fileData = fileFoo.readFileSync('load_dept_names.txt', 'utf8');
data = fileData.replace(/\(|\),|\'|\);/g, "");
var departmentNames = [];
var deptArray = data.split("\n");
deptArray.shift();

for (var i = 0; i < deptArray.length; i++) {
    departmentNames.push(deptArray[i].split(","));
}
console.log(departmentNames);

//2. load_dept_emp.txt
var employeeData = fileFoo.readFileSync('load_dept_emp.txt', 'utf8');
var tempDepartmentEmployees = employeeData.replace(/\(|\'\),|\;/g, "");

tempDepartmentEmployees = tempDepartmentEmployees.replace(/'/g, "");
tempDepartmentEmployees = tempDepartmentEmployees.replace("INSERT INTO `dept_emp` VALUES ", "");
tempDepartmentEmployees = tempDepartmentEmployees.split("\n");

var departmentEmployees = [];

for (var i = 0; i < tempDepartmentEmployees.length; i++) {
    if (tempDepartmentEmployees[i] == '') {
        tempDepartmentEmployees.splice(i, 1);
        i--
    } else {
        departmentEmployees.push(tempDepartmentEmployees[i].split(","));
    }
};
console.log(departmentEmployees);



var departmentEmployeesArray3D = [];

for (var i = 0; i < departmentNames.length; i++) {
    departmentEmployeesArray3D.push([])
}

for (var i = 0; i < departmentEmployees.length; i++) {
    for (var j = 0; j < departmentNames.length; j++) {
        if (departmentEmployees[i][1] == departmentNames[j][0]) { 
            departmentEmployeesArray3D[j].push(departmentEmployees[i]); 
            //[j] is the subarray number we want to push into
            
        }
    }
} 
console.log(departmentEmployeesArray3D)