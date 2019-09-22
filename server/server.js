require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

/**
 * Routers
 */
const usuarios_route = require("./routes/usuarios");
const pedidos_route = require("./routes/pedidos");
const servicios_route = require("./routes/servicios");
const negocios_route = require("./routes/negocios");

var app = express();
const PORT = normalizePort(process.env.PORT || "5000");

app
  .use(express.json())
  .use(cors())
  .use(express.urlencoded({ extended: false }))
  .use(cookieParser())

/**
 * Routes
 */
app.use("/api/usuarios", usuarios_route);
app.use("/api/pedidos", pedidos_route);
app.use("/api/servicios", servicios_route);
app.use("/api/negocios", negocios_route);

app
  .use(express.static(path.join(__dirname, "../client/build")))
  .get("/", (req, res) => res.sendFile(path.join(__dirname,'../client/build/index.html')));



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



