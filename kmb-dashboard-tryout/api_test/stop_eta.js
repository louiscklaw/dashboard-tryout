const axios = require("axios");

axios
  .get("https://data.etabus.gov.hk/v1/transport/kmb/stop-eta/41E81A921D79F375")
  .then((res) => {
    console.log(`statusCode: ${res.status}`);
    console.log(res.data);
  });
