import mysql from "mysql2/promise";

export default async function obterConexao() {
  if (globalThis.poolConexoes) {
    return await global.poolConexoes.getConnection();
  } else {
    global.poolConexoes = mysql.createPool({
      host: "localhost",
      user: "aluna",
      password: "123456",
      database: "cursos",
      waitForConnections: true,
      connectionLimit: 10,
      maxIdle: 10,
      idleTimeout: 60000,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
    });

    return await global.poolConexoes.getConnection();
  }
}
