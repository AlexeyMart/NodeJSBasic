const EventEmitter = require("events");

class MyEventEmitter extends EventEmitter {
  orderNumber = 0;

  constructor() {
    super();
  }

  order = () => {
    this.orderNumber++;
    this.emit("order", { detail: "my custom event" });
  };

  display = () => {
    console.log(`Current order number is ${this.orderNumber}`);
  };
}

const emitter = new MyEventEmitter();

emitter.on("order", (params) => {
  console.log(`${params.detail} order was placed`);
});
emitter.order();
emitter.display();
