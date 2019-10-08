var fileFoo = require('fs'); 

fileFoo.readFile('load_dept_emp.txt', 'utf8', function(error, data) {
    if (error) throw (error); 

    var newData = data.replace(/\(|\'\),|\;/g, "");
    newData = newData.replace(/'/g, ""); 
    newData = newData.replace("INSERT INTO `dept_emp` VALUES ", "");

    newData = newData.split("\n");
    for (var i = 0; i < newData.length; i++) {
        if (newData[i] == '') {
            newData.splice(i, 1); 
            i-- 
            //splice will go to the index (i) and the second parameter (1) is how many you remove. If the parameteres match the given instructions, then it will delete (1) index
        } 
    }
    console.log(newData);
}); 
