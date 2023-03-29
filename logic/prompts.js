const promptStart = [
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
      "Update an Employee Role",
    ],
  },
];

const addDepartmentPrompts = [
  {
    type: "input",
    name: "addDeptName",
    message: "Department Name:",
  },
];

const addRolePrompts = [
  {
    type: "input",
    name: "addRoleName",
    message: "Name of Role:",
  },
  {
    type: "input",
    name: "addRoleSalary",
    message: "Salary of Role:",
  },
  {
    type: "input",
    name: "addRoleDept",
    message: "Department of Role:",
  },
];

const addEmployeePrompts = [
  {
    type: "input",
    name: "addEmpFirst",
    message: "First Name:",
  },
  {
    type: "input",
    name: "addEmpLast",
    message: "Last Name:",
  },
  {
    type: "input",
    name: "addEmpRole",
    message: "Role at Company:",
  },
  {
    type: "input",
    name: "addEmpMngr",
    message: "Manager:",
  },
];

exports.promptStart = promptStart;
exports.addDepartmentPrompts = addDepartmentPrompts;
exports.addRolePrompts = addRolePrompts;
exports.addEmployeePrompts = addEmployeePrompts;
