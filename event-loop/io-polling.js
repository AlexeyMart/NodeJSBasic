// Rule: I/O events are polled and callback functions are added to the I/O queue only after the I/O completed

const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("this is read file 1");
});

process.nextTick(() => console.log("this is process.next 1"));
Promise.resolve().then(() => console.log("this is promise resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
setImmediate(() => console.log("this is setImmediate 1"));

// result: this is process.next 1, this is promise resolve 1, this is setTimeout 1, this is setImmediate 1, this is read file 1
