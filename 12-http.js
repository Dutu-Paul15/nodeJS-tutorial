const http = require("http");

// with http module, we can set up our API

// in the req object (giant object) I have information about
// methods and all kinds of useful stuff that
// refers to the user's request
// res - response
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }

  if (req.url === "/about") {
    res.end("Here is our short history");
  }

  res.end(`<h1> Oops! </h1>
  <p> We can't seem to find the page you are looking for </p>
  <a href="/"> Back home </a>`);
});

// what port our server is listening to

server.listen(5000);
