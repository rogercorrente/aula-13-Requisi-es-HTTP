const axios = require("axios");

//http://localhost:3000/

exports.api = axios.create({
  baseURL: "http://localhost:3000",
});
