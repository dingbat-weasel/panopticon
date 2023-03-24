DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

USE business_db;

CREATE TABLE departments (
    id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE roles (
    id INT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id)
    FOREIGN KEY (department_id),
    REFERENCES departments(id),
    ON DELETE SET NULL
)

CREATE TABLE employees (
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id),
    REFERENCES roles(id),
    ON DELETE SET NULL
)