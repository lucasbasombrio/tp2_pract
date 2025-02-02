import mysql from "mysql2/promise";

const connection = async () => {
  try {
    const conn = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "miercoles",
      port: "3306",
    });

    const ok = await conn.connect();

    if (ok) {
      //console.log("🚀 ~ connection ~ ok:", ok)
      console.log("🚀 ~ connection ~ ok:")
      return conn;
    }
  } catch (error) {
    console.log("🚀 ~ error:", error);
  }
};

const connectionDb = await connection();

export default connectionDb;
