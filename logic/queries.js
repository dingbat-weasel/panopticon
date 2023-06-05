const viewDep = () => {
  const sql = "SELECT * FROM department;";
  db.promise()
    .query({ sql, rowsAsArray: true })
    .then(([rows]) => {
      console.table("\n", rows, "\n");
      mainPage();
    });
};

const viewRoles = () => {
  const sql = "SELECT * FROM role;";
  db.promise()
    .query({ sql, rowsAsArray: true })
    .then(([rows]) => {
      console.table("\n", rows, "\n");
      mainPage();
    });
};

const viewEmps = () => {
  const sql = "SELECT * FROM employee;";
  db.promise()
    .query({ sql, rowsAsArray: true })
    .then(([rows]) => {
      console.table("\n", rows, "\n");
      mainPage();
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
      const sql = `INSERT INTO department (name) VALUES ("${res.name}")`;
      db.promise()
        .query(sql)
        .then(mainPage())
        .catch((err) => console.error(err));
    });
};

const addRole = () => {
  inquirer
    .prompt([
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
    ])
    .then((res) => {
      const sql = `INSERT INTO role (title, salary, department_id) VALUES
    ("${res.title}","${res.salary}","${res.department_id}");`;
      db.promise()
        .query(sql)
        .then(mainPage())
        .catch((err) => console.error(err));
    });
};
const addEmp = () => {
  inquirer
    .prompt([
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
    ])
    .then((res) => {
      const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ("${res.firstName}","${res.lastName}","${res.roleId}","${res.managerId}");`;
      db.promise()
        .query(sql)
        .then(mainPage())
        .catch((err) => console.error(err));
    });
};
const updateEmpRole = () => {
  inquirer
    .prompt([
      {
        name: "employeeId",
        type: "input",
        message: "Employee ID to update:",
      },
      {
        name: "roleId",
        type: "input",
        message: "Employee Role to update:",
      },
    ])
    .then((res) => {
      const sql = `UPDATE employees SET roleId = "${res.roleId}"
        WHERE id = "${res.employeeId}";`;

      db.promise()
        .query(sql)
        .then(mainPage())
        .catch((err) => console.error(err));
    });
};

module.exports = {
  viewDep,
  viewRoles,
  viewEmps,
  addDep,
  addRole,
  addEmp,
  updateEmpRole,
};
