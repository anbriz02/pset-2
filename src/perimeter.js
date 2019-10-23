const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");

const length = readlineSync.question("Length: ");

const widthConversion = (width * 2.54);

const lengthConversion = (length * 2.54);

const area = 2*(widthConversion + lengthConversion).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 })

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a perimeter of " + area + " centimeter(s).\n")
