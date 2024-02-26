import { createPool } from 'mysql2/promise';

const dbConfig = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "new-recycling",
};

const dbPool = createPool(dbConfig);

export default dbPool;
