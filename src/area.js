const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");

const length = readlineSync.question("Length: ");

const widthConversion = (width * 25.4);

const lengthConversion = (length * 25.4);

const area = (widthConversion * lengthConversion).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 })

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + area + " square millimeter(s).\n")
