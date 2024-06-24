// console.log("console.log 1");
// process.nextTick(() => console.log("this is process.next 1"));
// console.log("console.log 2");
// result: console.log 1, console.log 2, this is process.next 1

// Promise.resolve().then(() => console.log("this is promise resolve 1"));
// process.nextTick(() => console.log("this is process.next 1"));
// result: this is process.next 1, this is promise resolve 1

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
