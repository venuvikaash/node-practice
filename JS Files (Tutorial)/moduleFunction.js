//os function module
const osWindows = require("os");

console.log(osWindows.release()); // os version
console.log(osWindows.type()); //os type
console.log(osWindows.arch()); //os architecture (32/64 Bit)

console.log(osWindows.uptime());

console.log(osWindows.freemem()); //free memory

//path function module

const osPath = require("path");

console.log(osPath.sep);

const filePath = osPath.join("/osPathSample", "subfolder", "jsonConfig.json");
console.log(filePath);

const basePath = osPath.basename(filePath);
console.log(basePath);
