const routes = require("express").Router();
const controllerOngs = require("../controllers/controllerOng");
const {
  validate_delete,
  validate_update,
  validate_list,
  validate_create
} = require("./routesOng.schema");

routes.get("/:id", validate_list, controllerOngs.list);
routes.get("/", controllerOngs.listAll);
routes.post("/", validate_create, controllerOngs.create);
routes.put("/:id", validate_update, controllerOngs.update);
routes.delete("/:id", validate_delete, controllerOngs.delete);

module.exports = routes;
