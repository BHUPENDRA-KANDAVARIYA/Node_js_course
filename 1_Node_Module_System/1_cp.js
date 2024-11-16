//child process module is used to run a child process in the system. 
// This module provides different methods to spawn a new process, 

const cp = require('child_process');

// cp.execSync('start chrome') // opens chrome browser

// cp.execSync('calc') // opens calculator


// cp.execSync('notepad') // opens notepad

console.log('output ' + cp.execSync('node Node_js/1_Node_Module_System/demo.js').toString());

