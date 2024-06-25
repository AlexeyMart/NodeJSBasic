// Multiple instances of NodeJS (V8, event-loop, memory)

const cluster = require("cluster");
const http = require("http");
const OS = require("os");

console.log("CPUs length is", OS.cpus().length);

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);

  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker ${process.pid} started`);

  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home page");
    } else if (req.url === "/slow-page") {
      for (let i = 0; i < 6000000000; i++) {} // Simulate CPU work
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow Page");
    }
  });

  server.listen(8000, () => console.log("Server is running on port 8000"));
}
