let file_path = "./playground/somefile.txt";
const fs = require("fs");

//Read Async
fs.readFile(file_path,(err,data)=>{
    console.log(`Data: ${data}`);
});

//Read file Sync version
const sync_data = fs.readFileSync(file_path);
console.log(`Sync version : ${sync_data}`);

//Write file Async
fs.writeFile(file_path,"New file content",(err)=>{
    let msg;
    if (err)
        msg = "Error found";
    else
        msg = "Successfully wrote to the file";
    
    console.log(msg);
});

let file_data = `{"name":"Allan Jeremy","age":23}`;
//Write file Sync version
let file_err = fs.writeFileSync("testfile.json",file_data);

console.log(`File error in sync: ${file_err}`);