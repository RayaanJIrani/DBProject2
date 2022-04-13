const spots = require('../models/spots');

const getSpots = async (req, res) => {
  res.json("getSpots");
};

module.exports = {
  getSpots
};