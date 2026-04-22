const fs = require('fs');

// Read existing data
fs.readFile("student.json", "utf8", (err, data) => {
    if(err) return console.log("Error");

    let obj = JSON.parse(data);

    // Update value
    obj.marks = 95;

    // Write updated data
    fs.writeFile("student.json", JSON.stringify(obj), (err) => {
        if(err) console.log("Error");
        else console.log("Data updated successfully");
    });
});