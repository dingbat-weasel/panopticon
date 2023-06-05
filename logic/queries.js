export const viewDep = () => {
  const sql = "SELECT * FROM department;";
  db.promise()
    .query({ sql, rowsAsArray: true })
    .then(([rows]) => {
      console.table("\n", rows, "\n");
      mainPage();
    });
};

export const viewRoles = () => {
  const sql = "SELECT * FROM role;";
  db.promise()
    .query({ sql, rowsAsArray: true })
    .then(([rows]) => {
      console.table("\n", rows, "\n");
      mainPage();
    });
};

export const viewEmps = () => {
  const sql = "SELECT * FROM employee;";
  db.promise()
    .query({ sql, rowsAsArray: true })
    .then(([rows]) => {
      console.table("\n", rows, "\n");
      mainPage();
    });
};

export const addDep = () => {
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
export const addRole = () => {
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
export const addEmp = () => {};
export const updateEmpRole = () => {};
