const axios = require("axios");
const getKittenByAxios = () => {
  axios.get("https://api.thecatapi.com/v1/images/search");
};
module.exports = {
  getKittenByAxios,
};
