const mysql = require("mysql2");
const inquirer = require("inquirer");

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
  inquirer
    .prompt([
      {
        type: "list",
        name: "promptStart",
        message: "What would you like to do?",
        choices: [
          "View all Departments",
          "View all Roles",
          "View all Employees",
          "Add a Department",
          "Add a Role",
          "Add an Employee",
          "Quit.",
        ],
      },
    ])
    .then((res) => {
      switch (res.promptStart) {
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
        case "Quit.":
          break;
        default:
          console.log("Sorry there was an error please try again");
      }
    });
};

const viewDep = () => {
  const sql = "SELECT * FROM department;";
  db.promise()
    .query({ sql, rowsAsArray: true })
    .then(([rows]) => {
      console.table("\n", rows, "\n");
      beginPrompts();
    });
};

const viewRoles = () => {
  const sql = "SELECT * FROM role;";
  db.promise()
    .query({ sql, rowsAsArray: true })
    .then(([rows]) => {
      console.table("\n", rows, "\n");
      beginPrompts();
    });
};

const viewEmps = () => {
  const sql = "SELECT * FROM employee;";
  db.promise()
    .query({ sql, rowsAsArray: true })
    .then(([rows]) => {
      console.table("\n", rows, "\n");
      beginPrompts();
    });
};

const addDep = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addDeptName",
        message: "Department Name:",
      },
    ])
    .then((res) => {
      const sql = `INSERT INTO department (name) VALUES ("${res.addDeptName}")`;
      db.promise()
        .query(sql)
        .then(beginPrompts())
        .catch((err) => console.error(err));
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Name of Role:",
      },
      {
        type: "input",
        name: "salary",
        message: "Salary of Role:",
      },
      {
        type: "input",
        name: "dept",
        message: "Department ID of Role:",
      },
    ])
    .then((res) => {
      const sql = `INSERT INTO role (title, salary, department_id) VALUES
    ("${res.title}","${res.salary}","${res.dept}");`;
      db.promise()
        .query(sql)
        .then(beginPrompts())
        .catch((err) => console.error(err));
    });
};
const addEmp = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first",
        message: "First Name:",
      },
      {
        type: "input",
        name: "last",
        message: "Last Name:",
      },
      {
        type: "input",
        name: "role",
        message: "Role ID:",
      },
      {
        type: "input",
        name: "manager",
        message: "Manager ID:",
      },
    ])
    .then((res) => {
      const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ("${res.first}","${res.last}","${res.role}","${res.manager}");`;
      db.promise()
        .query(sql)
        .then(beginPrompts())
        .catch((err) => console.error(err));
    });
};

beginPrompts();
