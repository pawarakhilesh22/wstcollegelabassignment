const fs = require('fs');

let data = {
    name: "Samiksha",
    course: "MCA",
    marks: 85
};

fs.writeFile("student.json", JSON.stringify(data), (err) => {
    if(err) console.log("Error");
    else console.log("Data written successfully");
});