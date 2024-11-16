const fs = require('fs');


//Reading file
// let fileContent = fs.readFileSync('f1.txt');
// console.log("data of file 1 is: "+fileContent);

//Writing file
// fs.writeFileSync('f2.txt', 'This is File 2 written by fs module');

// console.log("File written successfully");


//Appending file

// fs.appendFileSync('f3.txt', 'This is appended data');

// console.log("File appended successfully");


//Deleting file

// fs.unlinkSync('f2.txt');
// console.log("File deleted successfully");


// Directories 

// create a directory

// fs.mkdirSync('myDirectory');


// check content of directory

let folderPath = 'C:\\Users\\Bhupendra\\Downloads\\Codechef contest\\Node_js\\1_Node_Module_System\\myDirectory';
let content = fs.readdirSync(folderPath);
console.log(content);


// check if it is directory or file exists or not

// let doesExist = fs.existsSync(folderPath);
// console.log("Directory exist or not: "+doesExist);


// Deleting directory

fs.rmdirSync('myDirectory');

console.log("Directory deleted successfully");