USE todo;

CREATE TABLE users(
    id INT AUTO_INCREMENT,
    email VARCHAR(50),
    password VARCHAR(255),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    PRIMARY KEY(id)
);

CREATE TABLE todos(
    id INT AUTO_INCREMENT,
    user_id INT,
    todo_title VARCHAR(100),
    todo_body TEXT,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES users(id)
);