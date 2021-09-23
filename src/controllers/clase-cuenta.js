import { connect } from "../database";

export const getClases = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM CLASECUENTA");
  res.json(rows);
};
export const getClase = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM CLASECUENTA WHERE NUMCUEN = ?",
    [req.params.NUMCUEN]
  );
  res.json(rows[0]);
};
export const getClaseCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT COUNT(*) FROM CLASECUENTA");

  res.json(rows[0]["COUNT(*)"]);
};

export const saveClase = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO CLASECUENTA(CLASE) VALUES(?)",
    [req.body.CLASE]
  );
  res.json({
    NUMCUEN: results.insertId,
    ...req.body,
  });
};

export const deleteClase = async (req, res) => {
  const connection = await connect();
  await connection.query("DELETE FROM CLASECUENTA WHERE NUMCUEN = ?", [
    req.params.NUMCUEN,
  ]);
  res.sendStatus(204);
};

export const updateClase = async (req, res) => {
  const connection = await connect();
  await connection.query("UPDATE CLASECUENTA SET ? WHERE NUMCUEN = ?", [
    req.body,
    req.params.NUMCUEN,
  ]);
  res.sendStatus(204);
};
