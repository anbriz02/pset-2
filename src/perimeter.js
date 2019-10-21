const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");

const length = readlineSync.question("Length: ");

const widthconversion = (width * 2.54);

const lengthconversion = (length * 2.54);

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a perimeter of " + 2 * (widthconversion + lengthconversion) + " centimeter(s).\n")
