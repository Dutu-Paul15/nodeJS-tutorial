// if you want to read something from a big file, it is
// good to use streams (you don't want to read the whole file)

const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
});

// default size of the buffer - 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

// you need to use the right name for the event
// check in NodeJS documentation for event's names
stream.on("data", (result) => {
  console.log(result);
});

stream.on('error', (error)=> {
  console.log(error)
})