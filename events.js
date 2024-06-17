const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("order", (params) => {
  console.log(`${params.detail} order was placed`);
});
emitter.on("order", (params) => {
  console.log(`second listener with ${params.detail} order was placed`);
});

emitter.emit("order", { detail: "my custom event" });
