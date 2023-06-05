INSERT INTO department(name)
VALUES  ("Hermeneutics"),
        ("Metaphysics"),
        ("Epistemology"),
        ("Ethics");

INSERT INTO role(title, salary, department_id)
VALUES  ("Sales Lead", 100000, 4),
        ("Salesperson", 80000, 4),
        ("Lead Engineer", 150000, 1),
        ("Software Engineer", 120000, 1),
        ("Account Manager", 160000, 2),
        ("Accountant", 125000, 2),
        ("Legal Team Lead", 250000, 3),
        ("Lawyer", 190000, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES  ("Michel","Foucault", 1, null),
        ("Gilles","Deleuze", 2, 1),
        ("Jean","Baudrillard", 3, null),
        ("Jacques","Lacan", 4, 3),
        ("Friedrich","Nietzsche", 5, null),
        ("Julia","Kristeva", 6, 5),
        ("Louis","Althusser", 7, null),
        ("Jacques","Derrida", 8, 7);