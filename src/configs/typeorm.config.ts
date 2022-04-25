import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

export const typeORMConfig: TypeOrmModuleOptions = {
  // Database Type
  type: dbConfig.type,
  host: process.env.RDS_HOSTNAME || dbConfig.host,
  port: process.env.RDS_PORT || dbConfig.port,
  username: process.env.RDS_USERNAME || dbConfig.username,
  password: process.env.RDS_PASSWORD || dbConfig.password,
  database: process.env.RDS_DB_NAME || dbConfig.database,
  // Entities to be loaded for this connection
  entities: [__dirname + '/../**/*.entity.{js, ts}'],
  // Indicates if database schema should be auto created on
  // Be careful with this option and don't use this in production
  synchronize: dbConfig.synchronize,
};
