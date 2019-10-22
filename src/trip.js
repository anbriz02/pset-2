const readlineSync = require("readline-sync");

const students = readlineSync.question("\nStudents: ");

const teachers = readlineSync.question("Teachers: ");

const buscapacity = readlineSync.question("Bus capacity: ");

let passengers = +students+ +teachers;

let bus = (passengers/buscapacity);

let passrem = passengers % buscapacity;

console.log("\n" + Math.round(bus) + " bus(es) is (are) needed, with " + passrem + " passenger(s) on the last bus.\n")
