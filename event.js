import events from "events";

const myEmitter = new events.EventEmitter();

//calling cars
const carHandler = (car) => {
  console.log(`oh my god this is ${car} car`);
};
//calling bus
const busHandler = (bus) => {
  console.log(`oh my god this is ${bus} bus`);
};

myEmitter.on("car", carHandler);
myEmitter.on("bus", busHandler);

myEmitter.emit("car", "Mercedes");
myEmitter.emit("bus", "Scania");

// error handling:

myEmitter.on('error',(err)=>{
    console.log(`the error is ${err}`)
})
myEmitter.emit('error', new Error("something went wrong"))