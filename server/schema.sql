
CREATE DATABASE chat;

USE chat;

CREATE TABLE users ( 
  id int auto_increment,
  username varchar(20) unique,
  PRIMARY KEY (id)


);

CREATE TABLE rooms (
  id int auto_increment,
  room_name varchar(20) unique,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id int auto_increment,
  user_id int,
  room_id int,
  text varchar(200),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) references users(id),
  FOREIGN KEY (room_id) references rooms(id)
);

/* Create other tables and define schemas for them here! */






/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

