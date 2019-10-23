const readlineSync = require("readline-sync");

const salary = readlineSync.question("\nAnnual salary: ");

const biMonthly = salary/24

const contribution = (0.07*biMonthly)

const check401 = biMonthly-(contribution)

const fed = (0.157*check401)

const state = (0.0447*check401)

const social = (0.062*check401)

const medicare = (0.0145*check401)

const afterTax = (fed+state+social+medicare)

const check = (check401-afterTax).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 })



console.log("\nYour take-home pay each check will be " + "$"+ (check) + ".\n")
