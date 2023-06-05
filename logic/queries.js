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

export const addDep = () => {};
export const addRole = () => {};
export const addEmp = () => {};
export const updateEmpRole = () => {};
