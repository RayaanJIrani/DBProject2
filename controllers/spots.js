const spots = require('../models/spots');

const cleanQueryResult = async (query) => {
  result = [];
  for (let i = 0; i < query.length; i++) {
    result.push(query[i].id);
   console.log("Element " + i + ": " );
   console.log(query[i].id);
  }
  return result;
}


const getFilters = async(lot, avalible) => {
  output = {}; //this is the ouput with the filters
  if(!(lot == null)){ //if there is a lot value
    console.log("Hit the inside of lot condition");
    output['parking_lot'] = lot; //add the lot filter to the output
  }
  if(!(avalible == null)){ //if there is a avalible value
    console.log("Hit the inside of avalible condition");
    console.log(avalible);
    //is_used is the inverse of avalible

    if(avalible == "true"){ //pase the avalible value to a boolean
      output['is_used'] = false; //set the filter based on is_used which is the inverse of avalible
    }
    else{
      output['is_used'] = true;
    }
  }

  return output;
}



const getStadiumLots = async (stadium_id) => {
  //step 1 check if a stadium was given
  queryResult = {};
  if(stadium_id == null){
    console.log("No stadium id was given");
    //if no stadium was given, select all of the parking lots are return them
   queryResult =  await spots.getParkingLots({});

  } else {
    //if a stadium was given, select all of the parking lots that are in that stadium and return them
    //these lots can be found by looking at the parking_lot table and slecting based on the stadium_id
    console.log("A stadium id was given");
    queryResult = await spots.getParkingLots({"stadium": stadium_id});
  }
  const output = await cleanQueryResult(queryResult);
  console.log("The output is: ");
  console.log(output);

  return output;
}

const getSpots = async (stadium, lot, avalible) => {
  try {

    const filters =  await getFilters(lot,avalible); //creates dictionary of filters to be used in the query
    const stadiumLots = await getStadiumLots(stadium); //creates list of parking lots in stadium (if not stadium provided, retruns all lots)
    //the getSpots function takes in two parameters, the first is the filters for lot & avalible, the second is the values for the Parking spots which are in the stadium
    const result = await spots.getSpots(filters,  stadiumLots);

    return result;

  } catch(err) {
    console.log("Error thrown: " + err);
    return err;
  }
};

module.exports = {
  getSpots
};