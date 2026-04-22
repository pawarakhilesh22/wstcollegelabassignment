// server.js
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write("<h1>My College Website</h1>");
    res.write("<p>Welcome to MCA Department</p>");
    res.write("<p>Courses: MCA, BCA, BSc IT</p>");

    res.end();
}).listen(3000);

console.log("Server running at http://localhost:3000");