import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (host = 'database_c-car'): Promise<Connection> => {
  const connection = await getConnectionOptions();

  return createConnection(Object.assign(connection, { host }));
};
