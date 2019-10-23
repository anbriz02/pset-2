const readlineSync = require("readline-sync");

const students = readlineSync.question("\nStudents: ");

const teachers = readlineSync.question("Teachers: ");

const busCapacity = readlineSync.question("Bus capacity: ");

let passengers = +students+ +teachers;

let bus = (passengers/busCapacity);

let passRem = passengers % busCapacity;

console.log("\n" + Math.round(bus) + " bus(es) is (are) needed, with " + passRem + " passenger(s) on the last bus.\n")
