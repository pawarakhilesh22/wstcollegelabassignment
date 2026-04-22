const fs = require('fs');

fs.readFile("student.json", "utf8", (err, data) => {
    if(err) console.log("Error");
    else console.log("Data:", data);
});