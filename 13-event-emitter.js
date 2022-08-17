const EventEmitter = require("events"); // importing the events module

const customEmitter = new EventEmitter()

// on - listen for an event; emit - emit an event
// the order matters; we first listen to an event and then we emit it

customEmitter.on("response", (name, id)=>{
  console.log(`data recieved ${name} with id: ${id}`)
})

customEmitter.on("response", ()=>{
  console.log(`some other logic here`)
})

customEmitter.emit("response", "John", 34)