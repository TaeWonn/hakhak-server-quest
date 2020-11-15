import path from 'path';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const env = process.env.NODE_ENV;

let host = 'localhost';

//if (env !== 'dev') host = '172.16.25.2';  //docker network host
if (env !== 'dev') host = '127.0.0.1';      //local test host

export const typeormConfig: PostgresConnectionOptions = {
  type: 'postgres',
  port: 5432,
  username: 'testuser',
  password: 'testpasswd',
  database: 'testdb',
  synchronize: true,
  entities: [`${path.join(__dirname, '..', '..', '**')}/*.model.[tj]s`],
  host,
};
