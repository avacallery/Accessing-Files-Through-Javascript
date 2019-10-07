//2. load_dept_emp.txt

var fileFoo = require('fs'); 

fileFoo.readFile('load_dept_emp.txt', 'utf8', function(error, data) {
    if (error) throw (error)
    data = data.replace(/\(|\),|\'|\);|\INSERT INTO `dept_emp` VALUES /g, "");
    var departmentEmployees = [];
    var employeeArray = data.split("\n");
    
    for (var j = 0; j < employeeArray.length; j++){
        departmentEmployees.push(employeeArray[j].split(","));
    }
    console.log(departmentEmployees);

}); 