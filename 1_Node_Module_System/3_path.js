const path = require('path');

// file f1.txt is in the same directory as this file

let ext = path.extname('f1.txt'); // returns the extension of a path
let baseName = path.basename('f1.txt'); // returns the base name of a path
let dirName = path.dirname('f1.txt'); // returns the directory name of a path
console.log(ext); // .txt

console.log(baseName); // f1.txt

console.log(dirName); // . - returns the directory name of a path as a string in the last portion of the path (after the last path separator), excluding the file name. If the path ends with a path separator, it returns the path itself.

console.log(__filename); // C:\Users\HP\Desktop\Node_js\1_Node_Module_System\3_path.js - returns the absolute path of the current module.

console.log(__dirname); // C:\Users\HP\Desktop\Node_js\1_Node_Module_System - returns the absolute path of the directory containing the currently executing file.

