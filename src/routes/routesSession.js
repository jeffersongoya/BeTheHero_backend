const routes = require("express").Router();
const controllerSession = require("../controllers/controllerSession");
const { validate_logon } = require("./routesSession.schema");

routes.post("/logon", validate_logon, controllerSession.logon);

module.exports = routes;
