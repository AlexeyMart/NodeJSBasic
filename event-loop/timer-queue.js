// Rule: callbacks in the microtasks queue are executed before callbacks in the timer queue
// callback in microtask queue are executed in between the execution of callbacks in the timer queue

setTimeout(() => console.log("this is setTimeout 1"), 0);
setTimeout(() => {
  console.log("this is setTimeout 2");
  process.nextTick(() => {
    console.log("this is the inner next tick inside setTimeout");
  });
}, 0);
setTimeout(() => console.log("this is setTimeout 3"), 0);

process.nextTick(() => console.log("this is process.next 1"));
process.nextTick(() => {
  console.log("this is process.next 2");
  process.nextTick(() => {
    console.log("this is the inner next tick inside next tick");
  });
});
process.nextTick(() => console.log("this is process.next 3"));

Promise.resolve().then(() => console.log("this is promise resolve 1"));
Promise.resolve().then(() => {
  console.log("this is promise resolve 2");
  process.nextTick(() => {
    console.log("this is the inner next tick inside promise block");
  });
});
Promise.resolve().then(() => console.log("this is promise resolve 3"));

// result:
// this is process.next 1, this is process.next 2, this is process.next 3, this is the inner next tick inside next tick,
// this is promise resolve 1, this is promise resolve 2, this is promise resolve 3, this is the inner next tick inside promise block
// this is setTimeout 1, this is setTimeout 2, this is the inner next tick inside setTimeout, this is setTimeout 3,
