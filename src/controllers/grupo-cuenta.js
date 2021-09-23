import { connect } from "../database";

export const getGrupos = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM GRUPOCUENTA WHERE NUMCUEN = ?",
    [req.params.NUMCUEN]
  );
  res.json(rows);
};
export const getGrupo = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM GRUPOCUENTA WHERE NUMCUEN =? AND CODGRU = ?",
    [req.params.NUMCUEN, req.params.CODGRU]
  );
  res.json(rows[0]);
};

export const getGrupoCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT COUNT(*) FROM GRUPOCUENTA WHERE NUMCUEN = ?",
    [req.params.NUMCUEN]
  );
  res.json(rows[0]["COUNT(*)"]);
};

export const saveGrupo = async (req, res) => {
  console.log(req.body.NUMCUEN);
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO GRUPOCUENTA(NUMCUEN,TIPO) VALUES(?,?)",
    [req.params.NUMCUEN, req.body.TIPO]
  );
  res.json({
    CODGRU: results.insertId,
    ...req.params,
    ...req.body,
  });
};
export const deleteGrupo = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "DELETE FROM GRUPOCUENTA WHERE NUMCUEN = ? AND CODGRU = ?",
    [req.params.NUMCUEN, req.params.CODGRU]
  );
  res.sendStatus(204);
};

export const updateGrupo = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "UPDATE GRUPOCUENTA SET ? WHERE NUMCUEN = ? AND CODGRU = ?",
    [req.body, req.params.NUMCUEN, req.params.CODGRU]
  );
  res.sendStatus(204);
};
