const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const users_route = require("./routes/users");

var app = express();
const PORT = normalizePort(process.env.PORT || "5000");

require("dotenv").config();

app
  .use(express.json())
  .use(cors())
  .use(express.urlencoded({ extended: false }))
  .use(cookieParser())

/**
 * MongoDB Connection
 */
mongoose.connect(process.env.MLAB, { useNewUrlParser: true, useCreateIndex: true })
        .catch(err => console.log(" \n\n------- \nDB Auth Error\nEn .env poner MLAB=mongodb://<dbuser>:<dbpassword>@ds123500.mlab.com:23500/printeardb\nCambiando los valores de <dbuser> y <dbpassword>\n ----------- \n\n", err))
const db = mongoose.connection
db.on('error', (err) => console.log('DB Error :: ', err));
db.once('open', _ => console.log('DB Connection Established.'));
 
/**
 * Routes
 */
app.use("/api/users", users_route);

// Front - React App
app
  .use(express.static(path.join(__dirname, "../client/build")))
  .get("/", (req, res) => res.sendFile(path.join(__dirname,'../client/build/index.html')));

// 404
app.get("*", (req, res) => res.status(404).json({message: '404 not found'}));


/**
 * Listen
 */
app.listen(PORT, () => console.log(`Listening on ${PORT}`));


/**
 * Get port from environment and store in Express.
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val; // pipe
  }
  if (port >= 0) {
    return port; // port
  }
  return false;
}



