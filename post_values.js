const http = require("http");
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <form method="POST">
        Name: <input name="name"><br>
        Email: <input name="email"><br>
        <button type="submit">Submit</button>
      </form>
    `);
  } else if (req.method === "POST") {
    let body = "";
    req.on("data", chunk => {
      body += chunk;
    });
    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Form submitted: " + body);
    });
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
});
server.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
