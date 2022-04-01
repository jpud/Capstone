const http = require("http");
const server = http
  .createServer((request, response) => {
    response.write("Yep you hit me");
    // End and return the response
    response.end();
  })
  .listen(4040);

console.log("Listening on port 4040");

function count(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}
var final = count(10, 21);
console.log(final);
