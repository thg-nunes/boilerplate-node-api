import 'dotenv/config';
import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (host = `${process.env.DB_SERVICENAME}`): Promise<Connection> => {
  const connection = await getConnectionOptions();

  return createConnection(Object.assign(connection, { host }));
};
