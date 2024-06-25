// Rule: check queue callbacks are executed after microtask queue callbacks, timer queue callbacks and i/o queue callbacks

// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is read file 1");
//   setImmediate(() => console.log("this is inner setImmediate inside readFile"));
//   Promise.resolve().then(() =>
//     console.log("this is promise resolve inside readFile")
//   );
//   process.nextTick(() => console.log("this is process.next inside readFile"));
// });

// process.nextTick(() => console.log("this is process.next 1"));
// Promise.resolve().then(() => console.log("this is promise resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);

// result: this is process.next 1, this is promise resolve 1, this is setTimeout 1, this is read file 1,
// this is process.next inside readFile, this is promise resolve inside readFile, this is inner setImmediate inside readFile

// Rule: microtasks queue tasks are executed in between check queue callbacks

setImmediate(() => console.log("this is setImmediate 1"));
setImmediate(() => {
  console.log("this is setImmediate 2");
  process.nextTick(() => console.log("this is process.next 1"));
  Promise.resolve().then(() => console.log("this is promise resolve 1"));
});
setImmediate(() => console.log("this is setImmediate 3"));

// result: this is setImmediate 1, this is setImmediate 2, this is process.next 1, this is promise resolve 1, this is setImmediate 3
