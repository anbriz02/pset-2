const readlineSync = require("readline-sync");

const homework = readlineSync.question("\nEnter three homework grades.\n");

readlineSync.question()
readlineSync.question()

const quiz = readlineSync.question("\nEnter three quiz grades.\n");

readlineSync.question()
readlineSync.question()

const test = readlineSync.question("\nEnter three test grades.\n");

readlineSync.question()
readlineSync.question()

const hw = (homework*0.15)

const qz = (quiz*0.35)

const tst = (test*0.50)

const grade = (hw + qz +tst)

console.log("\nYour marking period grade is " + grade.toFixed(2) + "%.\n")
