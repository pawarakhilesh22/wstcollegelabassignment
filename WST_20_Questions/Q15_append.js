const fs = require('fs');

let newData = {
    city: "Mumbai"
};

fs.appendFile("student.json", JSON.stringify(newData), (err) => {
    if(err) console.log("Error");
    else console.log("Data appended successfully");
});