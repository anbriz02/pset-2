const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");

const length = readlineSync.question("Length: ");

let diagonal = Math.sqrt(Math.pow(width,2) + (Math.pow(length,2)));

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a diagonal of " + (diagonal).toFixed(2) + " inch(es).\n")
