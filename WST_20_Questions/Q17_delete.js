const fs = require('fs');

fs.unlink("student.json", (err) => {
    if(err) console.log("Error");
    else console.log("File deleted successfully");
});