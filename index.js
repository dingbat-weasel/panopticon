const mysql = require("mysql2");
const inquirer = require("inquirer");
require("dotenv").config();
const {
  promptStart,
  addDepartmentPrompts,
  addRolePrompts,
  addEmployeePrompts,
} = require("./logic/prompts.js");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to database`)
);

inquirer.prompt(promptStart).then((response) => {
  switch (response) {
    case "View all Departments":
      db.query("SELECT * FROM departments", function (err, results) {
        console.log(results);
      });
      break;
    case "View all Roles":
    case "View all Employees":
    case "Add a Department":
    case "Add a Role":
    case "Add an Employee":
    case "Update an Employee Role":
    default:
      console.log("Sorry there was an error please try again");
  }
});
