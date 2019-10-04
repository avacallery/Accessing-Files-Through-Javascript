var fileFoo = require('fs'); 


//1. load_dept_names.txt


fileFoo.readFile('load_dept_names.txt', 'utf8', function(error, data) {
    if (error) throw(error); 
    data = data.replace(/\(|\),|\'|\);/g, ""); 
    //REGULAR EXPRESSION 
//the backslashes are a form of quotation, | works as or 
    var departmentNames = []; 
    var deptArray = data.split("\n"); 
    //split turns it into an array

        deptArray.shift();

    for (var i = 0; i < deptArray.length; i++) {
        departmentNames.push(deptArray[i].split(","));
    }
    //console.log(departmentNames);
} );


//2. load_dept_emp.txt

fileFoo.readFile('load_dept_emp.txt', 'utf8', function(error, data) {
    if (error) throw (error)
    data = data.replace(/\(|\),|\'|\);|\INSERT INTO `dept_emp` VALUES /g, "");
    var employeeID = [];
    var employeeArray = data.split("\n");
    
    for (var j = 0; j < employeeArray.length; j++){
        employeeID.push(employeeArray[j].split(","));
    }
    console.log(employeeID);

}); 


//filesystem02 make new file and experiment


//callback function in fileFoo.readFile({}); 
//Inside of an object, a function is a method. 
//readFile is a method (technically a function) 
//Once readFile is executed first, then the callback function() is executed
