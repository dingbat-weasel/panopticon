const mysql = require("mysql2");
const inquirer = require("inquirer");
const {
  viewDep,
  viewRoles,
  viewEmps,
  addDep,
  addRole,
  addEmp,
  updateEmpRole,
} = require("./logic/queries");
require("dotenv").config();
require("console.table");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to database`)
);

const beginPrompts = function () {
  inquirer.prompt(promptStart).then((response) => {
    switch (response.promptStart) {
      case "View all Departments":
        viewDep();
        break;
      case "View all Roles":
        viewRoles();
        break;
      case "View all Employees":
        viewEmps();
        break;
      case "Add a Department":
        addDep();
        break;
      case "Add a Role":
        addRole();
        break;
      case "Add an Employee":
        addEmp();
        break;
      case "Update an Employee Role":
        updateEmpRole();
        break;
      case "Quit.":
        break;
      default:
        console.log("Sorry there was an error please try again");
    }

    beginPrompts();
  });
};
