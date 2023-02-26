const axios = require("axios");
const getKittenByAxios = () => {
  axios.get("https://api.thecatapi.com/v1/images/search");
  /*.then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    })*/
};
module.exports = {
  getKittenByAxios,
};
