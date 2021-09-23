import { connect } from "../database";

export const getGCuentas = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM CUENTA WHERE CODGRU = ?",
    [req.params.CODGRU]
  );
  res.json(rows);
};
export const getCuenta = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM CUENTA WHERE CODIGO =? AND CODGRU = ?",
    [req.params.CODIGO, req.params.CODGRU]
  );
  res.json(rows[0]);
};

export const getCuentaCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT COUNT(*) FROM CUENTA WHERE CODGRU = ?",
    [req.params.CODGRU]
  );
  res.json(rows[0]["COUNT(*)"]);
};

export const saveCuenta = async (req, res) => {
  console.log(req.body.NUMCUEN);
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO CUENTA(CODGRU,NOMBRE,TOTAL) VALUES(?,?,?)",
    [req.params.CODGRU, req.body.NOMBRE, req.body.TOTAL]
  );
  res.json({
    CODIGO: results.insertId,
    ...req.params,
    ...req.body,
  });
};
export const deleteCuenta = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "DELETE FROM CUENTA WHERE CODIGO = ? AND CODGRU = ?",
    [req.params.CODIGO, req.params.CODGRU]
  );
  res.sendStatus(204);
};

export const updateCuenta = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "UPDATE CUENTA SET ? WHERE CODIGO = ? AND CODGRU = ?",
    [req.body, req.params.CODIGO, req.params.CODGRU]
  );
  res.sendStatus(204);
};
