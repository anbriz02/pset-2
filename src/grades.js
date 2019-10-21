const readlineSync = require("readline-sync");

const homework = readlineSync.question("\nEnter three homework grades.\n");

const quiz = readlineSync.question("\nEnter three quiz grades.\n");

const test = readlineSync.question("\nEnter three test grades.\n");

const hw = (homework*0.15)

const qz = (quiz*0.35)

const tst = (test*0.50)

console.log("\nYour marking period grade is " + (hw + qz + tst).toFixed(2) + "%.\n")
