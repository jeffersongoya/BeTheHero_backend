const routes = require("express").Router();
const controllerOngs = require("../controllers/incidentOng");
const {
  validate_delete,
  validate_update,
  validate_list,
  validate_create
} = require("./routesIncident.schema");

routes.get("/:id", validate_list, controllerIncidents.list);
routes.get("/", controllerIncidents.listAll);
routes.post("/", validate_create, controllerIncidents.create);
routes.put("/:id", validate_update, controllerIncidents.update);
routes.delete("/:id", validate_delete, controllerIncidents.delete);

module.exports = routes;
