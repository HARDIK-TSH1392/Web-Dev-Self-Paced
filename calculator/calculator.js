const express = require("express");

const bodyParser = require("body-parser"); // using the body-parser dependencies

const app = express();

app.use(bodyParser.urlencoded({extended: true}));    //urlencoded is used to parse the information posted by html form
                                                    //setting the extended option to be true allows us to use nested objects
                                                    //body parser allows you to go to any route and you can tap into req.body and this
                                                    // is the past version of http request

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");//__dirname give the file path of the current file no matter where the file is hosted
});


app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result of the calculation is: " + result);
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});