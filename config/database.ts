/**MySQL 数据库连接 请按照自有数据库对应相关库名*/
import { Database } from "../resources.ts";

const defaultMySQLOptions = {
  database: "test", // mysql 数据库
  host: "127.0.0.1", // mysql host
  username: "root", // mysql 帐号
  password: "root", // mysql 密码
  port: 3306, // mysql 端口
};

const getMySQLConnection = (options = {}, debug = false): Database => {
  const connection: Database = new Database(
    {
      dialect: "mysql",
      disableDialectUsageDeprecationWarning: true,
      debug,
    },
    {
      ...defaultMySQLOptions,
      ...options,
    },
  );
  return connection;
};

export { getMySQLConnection };
