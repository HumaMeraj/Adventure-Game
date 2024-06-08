#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.green("\n \t\t Coding with Huma - Adventure Game"));
console.log("=".repeat(70));
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter Your Name:",
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select Your Opponent",
        choices: ["Skeleton", "Alien", "Zombo"]
    }
]);
let P1 = new Player(player.name);
let O1 = new Opponent(opponent.select);
do {
    // Skeleton Game
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do? ",
                choices: ["Attack", "Drink Portion", "Run for Your Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(`${P1.name} Fuel is ${P1.fuel} `);
                console.log(`${O1.name} Fuel is ${O1.fuel} `);
                if (P1.fuel <= 0) {
                    console.log(chalk.bold.red("\n\t You Loose,Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(`${P1.name} Fuel is ${P1.fuel} `);
                console.log(`${O1.name} Fuel is ${O1.fuel} `);
                if (O1.fuel <= 0) {
                    console.log(chalk.bold.magenta("\n\t You Win the Game."));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            P1.fuelIncrease();
            console.log(chalk.bold.green(`\n\t You Drink Health Portion Your Fuel is ${P1.fuel}`));
        }
        if (ask.opt == "Run for Your Life..") {
            console.log(chalk.bold.red("\n\t You Loose,Better Luck Next Time"));
            process.exit();
        }
    }
    // Alien Game
    if (opponent.select == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do? ",
                choices: ["Attack", "Drink Portion", "Run for Your Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(`${P1.name} Fuel is ${P1.fuel} `);
                console.log(`${O1.name} Fuel is ${O1.fuel} `);
                if (P1.fuel <= 0) {
                    console.log(chalk.bold.red("\n\t You Loose,Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(`${P1.name} Fuel is ${P1.fuel} `);
                console.log(`${O1.name} Fuel is ${O1.fuel} `);
                if (O1.fuel <= 0) {
                    console.log(chalk.bold.magenta("\n\t You Win the Game."));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            P1.fuelIncrease();
            console.log(chalk.bold.green(`\n\t You Drink Health Portion Your Fuel is ${P1.fuel}`));
        }
        if (ask.opt == "Run for Your Life..") {
            console.log(chalk.bold.red("\n\t You Loose,Better Luck Next Time"));
            process.exit();
        }
    }
    // Zombo Game
    if (opponent.select == "Zombo") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do? ",
                choices: ["Attack", "Drink Portion", "Run for Your Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(`${P1.name} Fuel is ${P1.fuel} `);
                console.log(`${O1.name} Fuel is ${O1.fuel} `);
                if (P1.fuel <= 0) {
                    console.log(chalk.bold.red("\n\t You Loose,Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(`${P1.name} Fuel is ${P1.fuel} `);
                console.log(`${O1.name} Fuel is ${O1.fuel} `);
                if (O1.fuel <= 0) {
                    console.log(chalk.bold.magenta("\n\t You Win the Game."));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            P1.fuelIncrease();
            console.log(chalk.bold.green(`\n\t You Drink Health Portion Your Fuel is ${P1.fuel}`));
        }
        if (ask.opt == "Run for Your Life..") {
            console.log(chalk.bold.red("\n\t You Loose,Better Luck Next Time"));
            process.exit();
        }
    }
} while (true);
