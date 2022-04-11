CREATE DATABASE stadium_project;

--Question 5

CREATE TABLE Stadium(
     name VARCHAR(255) PRIMARY KEY,
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
    name VARCHAR(255) PRIMARY KEY NOT NULL,
    capacity INTEGER NOT NULL,
    stadium VARCHAR(255) REFERENCES Stadium(name) NOT NULL
);

CREATE TABLE Event(
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  location_id VARCHAR(255) REFERENCES Stadium(name) NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE Parking_spot(
    id SERIAL PRIMARY KEY,
    parking_lot VARCHAR(255) REFERENCES Parking_lot(name) NOT NULL,
    event_id INTEGER REFERENCES Event(id) NOT NULL,
    is_disabled BOOLEAN NOT NULL,
    is_used BOOLEAN NOT NULL
);

CREATE TABLE Entry_Point(
    parking_lot VARCHAR(255) REFERENCES Parking_lot(name) NOT NULL,
    event_id INTEGER REFERENCES Event(id) NOT NULL,
    is_open BOOLEAN NOT NULL,
    PRIMARY KEY (parking_lot, event_id),
    CONSTRAINT parking_lot_unique UNIQUE (parking_lot),
    CONSTRAINT event_id_unique UNIQUE (event_id)
);

CREATE TABLE Employee(
    name VARCHAR(255) NOT NULL,
    employee_id INTEGER PRIMARY KEY NOT NULL,
    Entry_Point_lot VARCHAR NOT NULL,
    Entry_Point_event INTEGER NOT NULL,
    FOREIGN KEY (Entry_Point_lot) REFERENCES Entry_Point(parking_lot),
    FOREIGN KEY (Entry_Point_event) REFERENCES Entry_Point(event_id)
);

CREATE TABLE Parking_allocation(
  Employee_id INTEGER REFERENCES Employee(employee_id) NOT NULL,
  Fan INTEGER REFERENCES Fan(DL_id) NOT NULL,
  Parking_spot_id INTEGER REFERENCES Parking_spot(id) NOT NULL,
  PRIMARY KEY (Employee_id, Parking_spot_id,Fan)
);

CREATE TABLE Security_guard(
   name VARCHAR(255) NOT NULL,
   Parking_lot VARCHAR(255) REFERENCES Parking_lot(name) NOT NULL,
   badge_id INTEGER PRIMARY KEY NOT NULL
);

CREATE TABLE Vendor(
  name VARCHAR(255) NOT NULL,
  Parking_lot VARCHAR(255) REFERENCES Parking_lot(name) NOT NULL,
  vendor_id INTEGER PRIMARY KEY NOT NULL,
  product_name VARCHAR(255) NOT NULL
);






