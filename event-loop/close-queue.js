// Rule: close queue in the last order

const fs = require("fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
  console.log("this is from readable stream close event callback");
});

setImmediate(() => console.log("this is setImmediate 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
Promise.resolve().then(() => console.log("this is promise resolve 1"));
process.nextTick(() => console.log("this is process.next 1"));

// result: this is process.next 1, this is promise resolve 1, this is setTimeout 1, this is setImmediate 1, this is from readable stream close event callback
