-- In the db folder, create a file named schema.sql. Write SQL queries this file that do the following:
-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
-- date: a TIMESTAMP.
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	id INT(11) AUTO_INCREMENT NOT NULL, 
	PRIMARY KEY(id), 
	burger_name VARCHAR(255) NOT NULL, 
	devoured BOOLEAN,
	dt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

