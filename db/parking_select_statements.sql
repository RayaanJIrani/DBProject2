--Question 6

--This is the total count of all avalible parking spaces amongst all lots during all events
SELECT COUNT(*) FROM Parking_spot;

SELECT COUNT(*) FROM parking_lot
WHERE parking_lot.stadium = 'Cowpokes Stadium';

SELECT COUNT(*) FROM Parking_spot
JOIN parking_lot lot ON parking_spot.parking_lot = lot.name
WHERE lot.stadium = 'Cowpokes Stadium';

SELECT
(SELECT COUNT(*) FROM Parking_spot)
-
(SELECT COUNT(*)
 FROM Parking_spot
 JOIN parking_allocation ON parking_spot.id = parking_allocation.parking_spot_id
);

SELECT parking_spot.* FROM Parking_spot
JOIN parking_allocation ON parking_spot.id = parking_allocation.parking_spot_id
WHERE parking_spot.event_id = 1;

--NOTE: Need to add input to make result appear
SELECT parking_spot.* FROM Parking_spot
JOIN parking_allocation ON parking_spot.id = parking_allocation.parking_spot_id
WHERE parking_spot.event_id = 2;

--NOTE: ADD In items to make result appear
SELECT employee.* FROM employee
JOIN entry_point ON entry_point.parking_lot = employee.entry_point_lot
WHERE entry_point.parking_lot = 'Lot E';


--Again, add input to make result appear
SELECT COUNT(*) FROM fan
JOIN parking_allocation pa on fan.dl_id = pa.fan
WHERE fan.vehicle_type = 'Truck';

SELECT vehicle_type, COUNT(*) FROM fan
JOIN parking_allocation pa on fan.dl_id = pa.fan
GROUP BY vehicle_type;


SELECT(
    CAST(
        (SELECT COUNT(*) FROM fan
                JOIN parking_allocation pa on fan.dl_id = pa.fan)
    AS FLOAT)
    /
    CAST(
        (SELECT COUNT(*) FROM event)
    AS FLOAT)
    );

--Question 6(b)
SELECT parking_lot.name FROM parking_lot
JOIN Vendor ON vendor.parking_lot = parking_lot.name;

SELECT COUNT(*) FROM Security_guard
WHERE event_id = 1;

SELECT COUNT(*) FROM vendor


