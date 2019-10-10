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
     //departmentEmployeesArray3D[4].push(departmentEmployees[0]); 
    //  departmentEmployeesArray3D[departmentNames[0].indexOf(tempDepartmentEmployees[0][1])].push(departmentEmployees[0]);
     //WE NEED THE COMPUTER TO DETERMINE WHAT [4] IS 


     //push elements into specific position javascript 
     //if there are 9 elements to the departmentNames array... 
     //push the departmentID index or (departmentEmployee[i][1]) into corresponding index of departmentEmployeeArray3D


    

//How to create a report that gives you a list of employees in each department
//The department name, the department ID, and the total number of employees in that department

//a. create a report that contains: deptID, deptName: total#EmpInDept
//b. utilize data from two files (deptNames + deptEmp)
//c. deptArray = 2 dimensional sorted by departmentID
//d. 3dDeptEmployeeArray = 3 dimensional arranged by departmentID
//e. 1. 3dDeptEmployeeArray shall have the following form: 
    // 3dDeptEmployeeArray = [ [ [ employee, employee, employee ], [employee, employee] ], ]
//f. create empty 3dDeptEmployeeArray = []; 
//g. iterate through deptEmployeeArray and calculate the number of instances where (deptID) is the same 
//e. Find corresponding deptID in departmentNamesArray and console.log() results 

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Use nested for loops to iterate through both sets of data to find department IDs
//Create empty array for departmentDataArray
//Use if statement:
//if the department ID in load_dept_emp.txt or departmentEmpArray[i][1] == departmentIdArray[0]
//Then we would push into departmentDataArray
