const path = require("path");

let fullPath = path.join(__dirname,"file.md");
let parts = path.parse(fullPath);

console.log(parts);
