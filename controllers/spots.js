const spots = require('../models/spots');

/*
const getFilters = async(lot, avalible) => {
  output = {};
  if(lot){
    output['parking_lot'] = lot;
  }
  if(avalible) {
    output['is_used'] = !avalible; //is used is the opposite of avalible
  }
  
//  output['is_used'] = false;
//  output['parking_lot'] = 'A lot';
  console.log("output from get Filters: " + output);
  return output;
}
*/


const getStadiumLots = async (stadium_id) => {
  //step 1 check if a stadium was given
  if(!stadium_id){
    //if no stadium was given, select all of the parking lots are return them
    
  } else {
    //if a stadium was given, select all of the parking lots that are in that stadium and return them
    //these lots can be found by looking at the parking_lot table and slecting based on the stadium_id
  }
  return ['1','2'];
}

const getSpots = async (stadium, lot, avalible) => {
  try {
    const filters = {'parking_lot': '1', 'is_used' : true} //await getFilters('A lot',false); //creates dictionary of filters to be used in the query
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