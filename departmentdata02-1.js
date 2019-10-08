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
    console.log(departmentNames)
    }
 );

fileFoo.readFile('load_dept_emp.txt', 'utf8', function (error, data) {
    if (error) throw (error);

    var tempDepartmentEmployees = data.replace(/\(|\'\),|\;/g, "");

    tempDepartmentEmployees = tempDepartmentEmployees.replace(/'/g, "");
    tempDepartmentEmployees = tempDepartmentEmployees.replace("INSERT INTO `dept_emp` VALUES ", "");
    tempDepartmentEmployees = tempDepartmentEmployees.split("\n");

    var departmentEmployees = [];

    //we need to create this multidimencial array
    //we already have a for loop & we are testing for blank lines/deleting blank lines
    //but what happens when it is not a blank line? Then it is a useful line.
    //Therefore use ELSE {} 


    for (var i = 0; i < tempDepartmentEmployees.length; i++) {
        if (tempDepartmentEmployees[i] == '') {
            tempDepartmentEmployees.splice(i, 1);
            i--
            //i-- resets the index
            //splice will go to the index (i) and the second parameter (1) is how many you remove. If the parameteres match the given instructions, then it will delete (1) index
        } else {
            departmentEmployees.push(tempDepartmentEmployees[i].split(","));
        }
    }

    setTimeout( function() {
        
        console.log(departmentEmployees)}, 2000);
        
        var departmentEmployeesArray = [];



    for (var i = 0; i < departmentEmployees.length; i++) {
        //console.log(departmentEmployees[i][1])
    }
    //console.log(departmentEmployees);
});

//From there, the splice method is used, and the code will remove any string component from the array that is blank. Once the item is removed, the remaining elements will shift sequentially by -1. 
//

// > var currentDepartment = "d005"; 
// undefined
// > var departmentIds = ["d001","d002","d003","d004","d005","d006"];
// undefined
// > departmentIds.indexOf("d005");
// 4
// > departmentIds.indexOf(currentDepartment);
// 4
// > var departmentArray = [];
// undefined
// > for (var i = 0; i < departmentIds.length; i++) { 
// ... departmentArray.push([]);
// ... } 
// 6
// > departmentArray
// [ [], [], [], [], [], [] ]
// > departmentArray[departmentIds.indexOf(currentDepartment)].push(currentDepartment);
// 1 (as in one element was pushed) 
// > departmentArray
// [ [], [], [], [], [ 'd005' ], [] ]