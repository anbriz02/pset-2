const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");

const length = readlineSync.question("Length: ");

const widthconversion = (width * 25.4);

const lengthconversion = (length * 25.4);

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + (widthconversion * lengthconversion).toFixed(2) + " square millimeter(s).\n")
