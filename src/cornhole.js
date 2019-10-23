const length = 48;

const width = 24;

const diameter = 6;

let areaBoard = (length*width);

const radius = (diameter/2);

const areaCircle = Math.PI *(Math.pow(radius,2));

const area = (areaBoard-areaCircle).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 })

console.log("\nThe surface area of a standard Cornhole board is " + area + " square inch(es).\n")
