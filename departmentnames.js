
var fileFoo = require('fs'); 
//What is require(fs)? What does it do?


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
    console.log(departmentNames);
} );