const logger = (req, res, next) => {
  //prints the url console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  current_datetime = new Date();
  formatted_date =
      current_datetime.getFullYear() +
      "-" +
      (current_datetime.getMonth() + 1) +
      "-" +
      current_datetime.getDate() +
      " " +
      current_datetime.getHours() +
      ":" +
      current_datetime.getMinutes() +
      ":" +
      current_datetime.getSeconds();
  console.log("Timestamp: " + formatted_date);
  verb = req.method;
  console.log("Verb: " + verb);
  url = req.url;
  console.log("URL: " +`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  status = res.statusCode;
  console.log("Status: " + status);
  request_body = req.body;
  console.log("Request Body: ");
  console.log(request_body);
  next();
};

module.exports = { logger };