const axios = require("axios");

axios.get("https://data.etabus.gov.hk/v1/transport/kmb/route").then((res) => {
  console.log(`statusCode: ${res.status}`);
  console.log(res.data);
});
