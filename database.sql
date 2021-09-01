// This is a file to more cleanly store the code we need to set up our initial database.
create database perntodo;

CREATE TABLE todo (
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);