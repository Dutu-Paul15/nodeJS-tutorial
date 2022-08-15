const { readFile, writeFile } = require("fs");

console.log("start");

// the second argument is a callback function
// if we don't provide the utf8 encoding value (as an argument)
// we will get the buffer in console.log(result)
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});

console.log("starting next task");

// if a user makes a request, your app handles it and 
// if in the meantime another user wants something
// your app can handle that too (the async magic)