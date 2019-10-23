const readlineSync = require("readline-sync");

const hw1 = readlineSync.question("\nEnter three homework grades.\n")
const hw2 = readlineSync.question()
const hw3 = readlineSync.question();

const qz1 = readlineSync.question("\nEnter three quiz grades.\n")
const qz2 = readlineSync.question()
const qz3 = readlineSync.question();

const tst1 = readlineSync.question("\nEnter three test grades.\n")
const tst2 = readlineSync.question()
const tst3 = readlineSync.question();

let hw = (hw1*0.15)+(hw2*0.15)+(hw3*0.15);

let qz = (qz1*0.35)+(qz2*0.35)+(qz3*0.35);

let tst = (tst1*0.50)+(tst2*0.50)+(tst3*0.50);

const grade = (hw+qz+tst)/3;

console.log("\nYour marking period grade is " + grade.toFixed(2) + "%.\n")
