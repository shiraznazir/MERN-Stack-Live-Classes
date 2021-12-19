let express = require("express");

let app = express();

app.use(express.json());

let handle = function(req, res){
    console.log(req.body);
    res.send("wow, we got the request");
}

app.get("/", handle);

app.listen(3000);