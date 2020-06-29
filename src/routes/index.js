const mainRoutes = require("express").Router();
const ong = require("./routesOng");
const session = require("./routesSession");

mainRoutes.use("/ongs", ong);
mainRoutes.use("/sessions", session);
mainRoutes.get("/", (req, res) => {
  return res.send("Be The Hero API");
});

module.exports = mainRoutes;
