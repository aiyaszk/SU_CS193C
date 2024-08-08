const os = require('os');
console.log(os.platform());
//.platform() works (it returned darwin for mac)
// identifying the operating system platform as set during compile time of Node.js.

//type (it returned darwin for mac)
// the operating system name as returned by uname(3). For example 'Linux' on Linux, 'Darwin' on macOS and 'Windows_NT' on Windows.