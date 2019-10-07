//3. Load employee info

var fileFoo = require('fs'); 

fileFoo.readFile('load_employee.txt', 'utf8', function(error, data) {
    if (error) throw (error)
    data = data.replace(/\(|\),|\'|\INSERT INTO `employees` VALUES /g, "");
    employeeInfo = [];
    splitEmployeeInfo = data.split("\n");

    for (var j = 0; j < splitEmployeeInfo.length; j++) {
        employeeInfo.push(splitEmployeeInfo[j].split(",")); 
    }
    console.log(employeeInfo)
}); 