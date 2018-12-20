var express = require("express");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.static(path.join(__dirname, "/public")));
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

//app.use(express.static(__dirname + "/public"));
//const router2 = require("/app/routing/apiRoutes.js");
//app.use("/",router2);


app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});