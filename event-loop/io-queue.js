// Rule: callbacks in the microtasks queue are executed before callbacks in the i/o queue
// I/O callbacks are executed after microtasks queue callbacks and timer queue callbacks

// !!when running only setTimeout with 0 delay and i/o async method, the order of execution can never be guaranteed

const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("this is read file 1");
});

process.nextTick(() => console.log("this is process.next 1"));
Promise.resolve().then(() => console.log("this is promise resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);

// result: this is process.next 1, this is promise resolve 1, this is setTimeout 1, this is read file 1
