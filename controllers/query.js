const { connection } = require("../config/db");

////////////////////////////////////////////////////////////////////////!
exports.query = async (req, res) => {
  const { query } = req.body;
  try {
    await connection.query(query, (error, result, fields) => {
      if (error) return res.status(400).send(error);
      return res.send(result);
    });
  } catch (error) {
    console.log(error);
  }
};
