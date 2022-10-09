const { ObjectId } = require("mongodb");

function geraHex(length) {
  const todos = "0123456789abcdef";
  return new Array(length)
    .fill("")
    .map((l) => todos[Math.floor(Math.random() * todos.length)])
    .join("");
}

const id = geraHex(24);
console.log(id);
const a = new ObjectId(id);
console.log(a);
