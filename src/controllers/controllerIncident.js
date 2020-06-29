const connection = require("../database/connection");
const { prepareSuccess200, throwError } = require("../utils/responses_struct");
const crypto = require("crypto");

module.exports.listAll = async (req, res, next) => {
  try {
    const result = await connection("incidents").select("*");

    return res.json(prepareSuccess200(result));
  } catch (errorMsg) {
    throwError(res, error);
  }
};

module.exports.list = async (req, res, next) => {
  try {
    let { id } = req.params;

    const result = await connection("incidents")
      .select("*")
      .where({ id: id });

    return res.json(prepareSuccess200(result));
  } catch (errorMsg) {
    throwError(res, error);
  }
};

module.exports.create = async (req, res, next) => {
  try {
    let {
      /*TO-DO*/
    } = req.body;

    await connection("incidents").insert({
      name: name,
      email: email,
      whatsapp: whatsapp,
      city: city,
      uf: uf
    });

    return res.json(prepareSuccess200({ id: id }));
  } catch (errorMsg) {
    throwError(res, error);
  }
};

module.exports.update = async (req, res, next) => {
  try {
    let {
      /*TO-DO*/
    } = req.body;
    let { id } = req.params;

    await connection("incidents")
      .update({
        /*TO-DO*/
      })
      .where({ id: id });

    return res.json(prepareSuccess200({ id: id }));
  } catch (errorMsg) {
    throwError(res, error);
  }
};

module.exports.delete = async (req, res, next) => {
  try {
    let { id } = req.params;

    await connection("incidents")
      .delete()
      .where({ id: id });

    return res.json(prepareSuccess200({ id: id }));
  } catch (errorMsg) {
    throwError(res, error);
  }
};
