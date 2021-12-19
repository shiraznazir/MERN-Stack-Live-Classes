let axios = require("axios");

axios.post("http://localhost:3000/", {name: "Shiraz"}).then(function(response){
    console.log(response.data);
})