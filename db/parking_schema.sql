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
   event_id INTEGER REFERENCES Event(id) NOT NULL,
   badge_id INTEGER PRIMARY KEY NOT NULL
);

CREATE TABLE Vendor(
  name VARCHAR(255) NOT NULL,
  Parking_lot VARCHAR(255) REFERENCES Parking_lot(name) NOT NULL,
  vendor_id INTEGER PRIMARY KEY NOT NULL,
  event_id INTEGER REFERENCES Event(id) NOT NULL,
  product_name VARCHAR(255) NOT NULL
);

--Inserting data

INSERT INTO STADIUM(name, address, city)
VALUES ('Cowpokes Stadium','1 Cowpokes Road','Dallas'),
       ('Rodeo','1 Rodeo Way', 'Frisco');

INSERT INTO Parking_lot(name, capacity, stadium)
VALUES ('A lot',5,'Cowpokes Stadium'),
       ('B lot',5,'Cowpokes Stadium'),
       ('C lot',5,'Cowpokes Stadium'),
       ('D lot',5,'Rodeo'),
       ('E lot',5,'Rodeo'),
       ('F lot',5,'Rodeo');

INSERT INTO Event(date, location_id, name)
VALUES ('2022-01-01','Cowpokes Stadium','New Years day party'),
       ('2022-01-02','Rodeo','Texas State Fair'),
       ('2022-01-03','Cowpokes Stadium','Bob Marley Concert'),
       ('2022-01-04','Rodeo','Superbowl');

--The Cowpokes do not comply with the ADA
INSERT INTO Parking_spot(parking_lot, event_id, is_disabled, is_used)
VALUES ('A lot',1,FALSE,FALSE),
       ('A lot',1,FALSE,FALSE),
       ('A lot',1,FALSE,FALSE),
       ('A lot',1,FALSE,FALSE),
       ('A lot',1,FALSE,FALSE),

       ('B lot',1,FALSE,FALSE),
       ('B lot',1,FALSE,FALSE),
       ('B lot',1,FALSE,FALSE),
       ('B lot',1,FALSE,FALSE),
       ('B lot',1,FALSE,FALSE),

       ('C lot',1,FALSE,FALSE),
       ('C lot',1,FALSE,FALSE),
       ('C lot',1,FALSE,FALSE),
       ('C lot',1,FALSE,FALSE),
       ('C lot',1,FALSE,FALSE),

       ('D lot',2,FALSE,FALSE),
       ('D lot',2,FALSE,FALSE),
       ('D lot',2,FALSE,FALSE),
       ('D lot',2,FALSE,FALSE),
       ('D lot',2,FALSE,FALSE),

       ('E lot',2,FALSE,FALSE),
       ('E lot',2,FALSE,FALSE),
       ('E lot',2,FALSE,FALSE),
       ('E lot',2,FALSE,FALSE),
       ('E lot',2,FALSE,FALSE),

       ('F lot',2,FALSE,FALSE),
       ('F lot',2,FALSE,FALSE),
       ('F lot',2,FALSE,FALSE),
       ('F lot',2,FALSE,FALSE),
       ('F lot',2,FALSE,FALSE),
       ('F lot',2,FALSE,FALSE),

       ('A lot',3,FALSE,FALSE),
       ('A lot',3,FALSE,FALSE),
       ('A lot',3,FALSE,FALSE),
       ('A lot',3,FALSE,FALSE),
       ('A lot',3,FALSE,FALSE),

       ('B lot',3,FALSE,FALSE),
       ('B lot',3,FALSE,FALSE),
       ('B lot',3,FALSE,FALSE),
       ('B lot',3,FALSE,FALSE),
       ('B lot',3,FALSE,FALSE),

       ('C lot',3,FALSE,FALSE),
       ('C lot',3,FALSE,FALSE),
       ('C lot',3,FALSE,FALSE),
       ('C lot',3,FALSE,FALSE),
       ('C lot',3,FALSE,FALSE),

       ('D lot',4,FALSE,FALSE),
       ('D lot',4,FALSE,FALSE),
       ('D lot',4,FALSE,FALSE),
       ('D lot',4,FALSE,FALSE),
       ('D lot',4,FALSE,FALSE),

       ('E lot',4,FALSE,FALSE),
       ('E lot',4,FALSE,FALSE),
       ('E lot',4,FALSE,FALSE),
       ('E lot',4,FALSE,FALSE),
       ('E lot',4,FALSE,FALSE),

       ('F lot',4,FALSE,FALSE),
       ('F lot',4,FALSE,FALSE),
       ('F lot',4,FALSE,FALSE),
       ('F lot',4,FALSE,FALSE),
       ('F lot',4,FALSE,FALSE),
       ('F lot',4,FALSE,FALSE);

--Representative of the total number of cowpoke fans
INSERT INTO Fan(name, DL_id, is_disables,vehicle_type,license_plate)
VALUES ('A',1,FALSE,'Coupe','A'),
       ('B',2,FALSE,'Coupe','B'),
       ('C',3,FALSE,'Sedan','C'),
       ('D',4,FALSE,'Hatchback','D'),
       ('E',5,FALSE,'SUV','E'),
       ('F',6,FALSE,'MiniVan','F'),
       ('G',7,FALSE,'Van','G'),
       ('H',8,FALSE,'Truck','H');

INSERT INTO Entry_Point(parking_lot, event_id, is_open)
VALUES ('A lot',1,TRUE),
       ('D lot',2,TRUE),
       ('B lot',3,TRUE),
       ('E lot',4,TRUE);



INSERT INTO Security_guard(name, parking_lot, badge_id, event_id)
VALUES ('A', 'A lot',1,1),
       ('B', 'B lot',2,3);

INSERT INTO Vendor(name, parking_lot, vendor_id, product_name, event_id)
VALUES ('A', 'A lot',1,'Coke',1),
       ('B', 'B lot',2,'Pepsi',3);

INSERT INTO Employee(name, employee_id,Entry_Point_lot,Entry_Point_event)
VALUES ('A',1,'A lot',1),
       ('B',2,'B lot',3);

INSERT INTO Parking_allocation(employee_id, fan, parking_spot_id)
VALUES (1,1,1),
       (1,2,2),
       (1,3,3),
       (1,4,4),
       (1,5,5);


