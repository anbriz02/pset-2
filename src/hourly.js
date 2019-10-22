const readlineSync = require("readline-sync");

const hourly = readlineSync.question("\nHourly wage: ");

const mon = readlineSync.question("\nMonday: ");

const tues = readlineSync.question("Tuesday: ");

const wed = readlineSync.question("Wednesday: ");

const thurs = readlineSync.question("Thursday: ");

const fri = readlineSync.question("Friday: ");

const sat = readlineSync.question("Saturday: ");

const sun = readlineSync.question("Sunday: ");

const weekly = (mon*hourly)+(tues*hourly)+(wed*hourly)+(thurs*hourly)+(fri*hourly)+(sat*hourly)+(sun*hourly)

console.log("\nYou'll make " + "$"+Math.abs(weekly).toFixed(2) + " this week.\n")
