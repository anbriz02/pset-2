const readlineSync = require("readline-sync");

const salary = readlineSync.question("\nAnnual salary: ");

const contribution = 0.07*24

const fed = 0.157*24

const state = .447*24

const social = 0.062

const medicare = 0.0145

const monthly = fed*2

const annual = (salary)-(fed+state+social+medicare+contribution)

console.log("\nYour take-home pay each check will be " + "$"+ bimonthly + ".\n")
