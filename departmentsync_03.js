var fileFoo = require('fs');


//1. load_dept_names.txt
var fileData = fileFoo.readFileSync('load_dept_names.txt', 'utf8');
//console.log(fileData);
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
    }
 
        console.log(departmentEmployees);
        
        var departmentEmployeesArray = [];



    for (var i = 0; i < departmentEmployees.length; i++) {
    };
