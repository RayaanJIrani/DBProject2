CREATE DATABASE stadium_project;
USE stadium_project;

ALTER USER 'root'@localhost IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;

SELECT * FROM Employee;


CREATE TABLE Stadium(
     stadium_id SERIAL PRIMARY KEY,
     name VARCHAR(255),
     address VARCHAR(255) NOT NULL,
     city VARCHAR(255) NOT NULL
);

CREATE TABLE Fan(
    name VARCHAR(255) NOT NULL,
    is_disables BOOLEAN NOT NULL,
    DL_id INTEGER PRIMARY KEY NOT NULL,
    Vehicle_type VARCHAR(255) NOT NULL,
    license_plate VARCHAR(255) NOT NULL
);

CREATE TABLE Parking_lot(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    capacity INTEGER NOT NULL,
    stadium INTEGER REFERENCES Stadium(stadium_id)
);

CREATE TABLE Event(
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  location_id INTEGER REFERENCES Stadium(stadium_id),
  name VARCHAR(255) NOT NULL
);

CREATE TABLE Parking_spot(
    id SERIAL PRIMARY KEY,
    parking_lot INTEGER REFERENCES Parking_lot(id),
    event_id INTEGER REFERENCES Event(id),
    is_disabled BOOLEAN NOT NULL,
    is_used BOOLEAN NOT NULL
);

CREATE TABLE Entry_Point(
    parking_lot INTEGER REFERENCES Parking_lot(id),
    event_id INTEGER REFERENCES Event(id),
    is_open BOOLEAN NOT NULL,
    id SERIAL PRIMARY KEY,
    CONSTRAINT parking_lot_unique UNIQUE (parking_lot),
    CONSTRAINT event_id_unique UNIQUE (event_id)
);


CREATE TABLE Employee(
    username VARCHAR(255) NOT NULL UNIQUE , #This is the username (must be unique)
    password VARCHAR(255) NOT NULL, #This is the password
    employee_id SERIAL PRIMARY KEY NOT NULL,
    Entry_Point_id INTEGER REFERENCES Entry_Point(id)
);

CREATE TABLE Parking_allocation(
  id SERIAL PRIMARY KEY,
  Employee_id INTEGER REFERENCES Employee(employee_id),
  Fan INTEGER REFERENCES Fan(DL_id),
  Parking_spot_id INTEGER REFERENCES Parking_spot(id)

);






