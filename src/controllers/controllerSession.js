const connection = require("../database/connection");
const { prepareSuccess200, throwError } = require("../utils/responses_struct");
const crypto = require("crypto");

module.exports.logon = async (req, res, next) => {
  try {
    let { id, email } = req.body;

    const result = await connection("ongs")
      .select("*")
      .where({
        id: id,
        email: email
      });

    const loggedIn = result.length > 0;

    return res.json(
      prepareSuccess200({
        success: loggedIn,
        key: id
      })
    );
  } catch (errorMsg) {
    throwError(res, error);
  }
};
