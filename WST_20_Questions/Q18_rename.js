const fs = require('fs');

fs.rename("student.json", "newStudent.json", (err) => {
    if(err) console.log("Error");
    else console.log("File renamed successfully");
});