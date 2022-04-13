USE stadium_project;

INSERT INTO STADIUM(name, address, city)
VALUES ('Cowpokes Stadium','1 Cowpokes Road','Dallas'),
       ('Rodeo','1 Rodeo Way', 'Frisco');

INSERT INTO Parking_lot(name, capacity, stadium)
VALUES ('A lot',5,1),
       ('B lot',5,1),
       ('C lot',5,1),
       ('D lot',5,2),
       ('E lot',5,2),
       ('F lot',5,2);

INSERT INTO Event(date, location_id, name)
VALUES ('2022-01-01',1,'New Years day party'),
       ('2022-01-02',2,'Texas State Fair'),
       ('2022-01-03',1,'Bob Marley Concert'),
       ('2022-01-04',2,'Superbowl');

#The Cowpokes do not comply with the ADA
INSERT INTO Parking_spot(parking_lot, event_id, is_disabled, is_used)
VALUES (1,1,FALSE,FALSE),
       (1,1,FALSE,FALSE),
       (1,1,FALSE,FALSE),
       (1,1,FALSE,FALSE),
       (1,1,TRUE,TRUE),
       (1,1,TRUE,TRUE),
       (1,1,TRUE,TRUE),

       (2,1,FALSE,FALSE),
       (2,1,FALSE,FALSE),
       (2,1,FALSE,FALSE),
       (2,1,FALSE,FALSE),
       (2,1,TRUE,TRUE),
       (2,1,TRUE,TRUE),
       (2,1,TRUE,TRUE),


       (3,1,FALSE,FALSE),
       (3,1,FALSE,FALSE),
       (3,1,FALSE,FALSE),
       (3,1,FALSE,FALSE),
       (3,1,TRUE,TRUE),
       (3,1,TRUE,TRUE),
       (3,1,TRUE,TRUE),

       (4,1,FALSE,FALSE),
       (4,1,FALSE,FALSE),
       (4,1,FALSE,FALSE),
       (4,1,FALSE,FALSE),
       (4,1,TRUE,TRUE),
       (4,1,TRUE,TRUE),
       (4,1,TRUE,TRUE),


       (5,1,FALSE,FALSE),
       (5,1,FALSE,FALSE),
       (5,1,FALSE,FALSE),
       (5,1,FALSE,FALSE),
       (5,1,TRUE,TRUE),
       (5,1,TRUE,TRUE),
       (5,1,TRUE,TRUE),

       (6,1,FALSE,FALSE),
       (6,1,FALSE,FALSE),
       (6,1,FALSE,FALSE),
       (6,1,FALSE,FALSE),
       (6,1,TRUE,TRUE),
       (6,1,TRUE,TRUE),
       (6,1,TRUE,TRUE),

       (1,2,FALSE,FALSE),
       (1,2,FALSE,FALSE),
       (1,2,FALSE,FALSE),
       (1,2,FALSE,FALSE),
       (1,2,TRUE,TRUE),
       (1,2,TRUE,TRUE),
       (1,2,TRUE,TRUE),

       (2,2,FALSE,FALSE),
       (2,2,FALSE,FALSE),
       (2,2,FALSE,FALSE),
       (2,2,FALSE,FALSE),
       (2,2,TRUE,TRUE),
       (2,2,TRUE,TRUE),
       (2,2,TRUE,TRUE),

       (3,2,FALSE,FALSE),
       (3,2,FALSE,FALSE),
       (3,2,FALSE,FALSE),
       (3,2,FALSE,FALSE),
       (3,2,TRUE,TRUE),
       (3,2,TRUE,TRUE),
       (3,2,TRUE,TRUE),

       (4,2,FALSE,FALSE),
       (4,2,FALSE,FALSE),
       (4,2,FALSE,FALSE),
       (4,2,FALSE,FALSE),
       (4,2,TRUE,TRUE),
       (4,2,TRUE,TRUE),
       (4,2,TRUE,TRUE),

       (5,2,FALSE,FALSE),
       (5,2,FALSE,FALSE),
       (5,2,FALSE,FALSE),
       (5,2,FALSE,FALSE),
       (5,2,TRUE,TRUE),
       (5,2,TRUE,TRUE),
       (5,2,TRUE,TRUE),

       (6,2,FALSE,FALSE),
       (6,2,FALSE,FALSE),
       (6,2,FALSE,FALSE),
       (6,2,FALSE,FALSE),
       (6,2,TRUE,TRUE),
       (6,2,TRUE,TRUE),
       (6,2,TRUE,TRUE),

       (1,3,FALSE,FALSE),
       (1,3,FALSE,FALSE),
       (1,3,FALSE,FALSE),
       (1,3,FALSE,FALSE),
       (1,3,TRUE,TRUE),
       (1,3,TRUE,TRUE),
       (1,3,TRUE,TRUE);

#Fans must be added via API call
/*

#Representative of the total number of cowpoke fans
INSERT INTO Fan(name, DL_id, is_disables,vehicle_type,license_plate)
VALUES ('A',1,FALSE,'Coupe','A'),
       ('B',2,FALSE,'Coupe','B'),
       ('C',3,FALSE,'Sedan','C'),
       ('D',4,FALSE,'Hatchback','D'),
       ('E',5,FALSE,'SUV','E'),
       ('F',6,FALSE,'MiniVan','F'),
       ('G',7,FALSE,'Van','G'),
       ('H',8,FALSE,'Truck','H');


 */


INSERT INTO Entry_Point(parking_lot, event_id, is_open)
VALUES ('A lot',1,TRUE),
       ('D lot',2,TRUE),
       ('B lot',3,TRUE),
       ('E lot',4,TRUE);


#These items have to be done via the API
/*
INSERT INTO Employee(name, employee_id,Entry_Point_lot,Entry_Point_event)
VALUES ('A',1,'A lot',1),
       ('B',2,'B lot',3);

INSERT INTO Parking_allocation(employee_id, fan, parking_spot_id)
VALUES (1,1,1),
       (1,2,2),
       (1,3,3),
       (1,4,4),
       (1,5,5);


 */




