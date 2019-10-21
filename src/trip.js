const readlineSync = require("readline-sync");

const nstudents = readlineSync.question("\nStudents: ");

const nteachers = readlineSync.question("Teachers: ");

const buscapacity = readlineSync.question("Bus capacity: ");

const passengers = nstudents+nteachers;

const passrem = passengers % buscapacity;

console.log(+ (passengers/buscapacity) + " bus(es) is (are) needed, with " + passrem + " passenger(s) on the last bus.\n")
