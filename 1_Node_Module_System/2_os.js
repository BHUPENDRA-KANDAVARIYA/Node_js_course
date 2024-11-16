const os = require('os');

console.log(os.arch()); // x64 - Returns the operating system CPU architecture for which the Node.js binary was compiled. Possible values are 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', and 'x64'.


console.log(os.platform()); // win32 - Returns a string identifying the operating system platform. The value is set at compile time. Possible values are 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', and 'win32'.

console.log(os.networkInterfaces()); // Returns an object containing information about the network interfaces of the host system.

console.log(os.cpus()); // Returns an array of objects containing information about each logical CPU core.

console.log(os.totalmem()); // 17179869184 - Returns the total amount of system memory in bytes as an integer.

console.log(os.freemem()); // 17179869184 - Returns the amount of free system memory in bytes as an integer.