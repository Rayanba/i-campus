CREATE DATABASE icampus;
USE Icampus;
CREATE TABLE users (
user_id INT NOT NULL AUTO_INCREMENT,
username VARCHAR(25) NOT NULL,
pwd VARCHAR(100) NOT NULL,
email VARCHAR(50) NOT NULL UNIQUE,
first_name VARCHAR(15) NOT NULL,
last_name VARCHAR(15) NOT NULL,
phone_number VARCHAR(15) NOT NULL,
image VARBINARY(255),
roles INT(15) NOT NULL,
refreshtoken varchar(255),
socket_id varchar(255), 
PRIMARY KEY (user_id)
);
..............................................................................................................
USE Icampus;
CREATE TABLE utility(
utility_id INT NOT NULL AUTO_INCREMENT,
utility_name VARCHAR(40) NOT NULL,
utility_number INT NOT NULL,
facility_id INT NOT NULL,
utility_avaliability boolean NOT NULL DEFAULT TRUE,
utility_avaliability boolean NOT NULL,
FOREIGN KEY (facility_id) REFERENCES facility(facility_id),
PRIMARY KEY (utility_id)
);
.................................................................................................................
USE Icampus;
CREATE TABLE facility(
facility_id INT NOT NULL AUTO_INCREMENT,
facility_number INT NOT NULL,
facility_name VARCHAR(30) NOT NULL,
facility_floor INT NOT NULL,
facility_capacity INT NOT NULL,
is_busy BOOLEAN NOT NULL,
facility_avaliability BOOLEAN NOT NULL,
building_number INT NOT NULL,


PRIMARY KEY (facility_id)
);
....................................................................................................................
USE Icampus;
CREATE TABLE course(
course_id INT NOT NULL AUTO_INCREMENT,
course_start_time TIME NOT NULL,
course_end_time TIME NOT NULL,
course_name VARCHAR(30) NOT NULL,
course_date DATE NOT NULL,
course_number INT NOT NULL,
course_crn VARCHAR(10),
facility_id INT NOT NULL,
FOREIGN KEY (facility_id) REFERENCES facility(facility_id),
PRIMARY KEY (course_id)
);
........................................................................................................................
USE Icampus;
CREATE TABLE side_course(
side_course_id INT NOT NULL AUTO_INCREMENT,
side_course_name VARCHAR(30) NOT NULL,
side_course_number INT NOT NULL,
side_course_date DATE NOT NULL,
facility_id INT NOT NULL,
FOREIGN KEY (facility_id) REFERENCES facility(facility_id),
PRIMARY KEY (side_course_id)
);
..........................................................................................................................
USE Icampus;
CREATE TABLE side_attendance (
side_attendance_id INT NOT NULL AUTO_INCREMENT,
side_attendance_time DATETIME NOT NULL,
side_course_id INT NOT NULL,
user_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(user_id),
FOREIGN KEY (side_course_id) REFERENCES side_course(side_course_id),
PRIMARY KEY (side_attendance_id)
);
.............................................................................................................................
USE Icampus;
CREATE TABLE attendance (
attendance_id INT NOT NULL AUTO_INCREMENT,
attendance_time DATETIME NOT NULL,
course_id INT NOT NULL,
user_id INT NOT NULL,
FOREIGN KEY (course_id) REFERENCES course(course_id),
FOREIGN KEY (user_id) REFERENCES users(user_id),
PRIMARY KEY (attendance_id)
);
...............................................................................................................................
USE Icampus;
CREATE TABLE lecture (
lecture_id INT NOT NULL AUTO_INCREMENT,
user_id INT NOT NULL,
course_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES user(user_id),
FOREIGN KEY (course_id) REFERENCES course(course_id),
PRIMARY KEY (lecture_id)
);
.................................................................................................................................
USE Icampus;
CREATE TABLE report (
report_id INT NOT NULL AUTO_INCREMENT,
report_message TEXT NOT NULL,
report_date DATETIME NOT NULL,
report_status BOOLEAN NOT NULL,
user_id INT NOT NULL,
utility_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES user(user_id),
FOREIGN KEY (utility_id) REFERENCES utility(utility_id),
PRIMARY KEY (report_id)
);
......................................................................................................................................