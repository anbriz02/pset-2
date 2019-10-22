const readlineSync = require("readline-sync");

const salary = readlineSync.question("\nAnnual salary: ");

const contribution = 0.07*2

const fed = 0.157*2

const state = .447*2

const social = 0.062*2

const medicare = 0.0145*2

const monthly = salary-(contribution,fed,state,social,medicare)



console.log("\nYour take-home pay each check will be " + "$"+ monthly + ".\n")
