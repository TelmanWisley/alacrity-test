import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';

import{
    TestEntity
} from '../entities';

const { PG_HOST, PG_PORT, PG_USERNAME, PG_PASSWORD, PG_NAME, PG_URL } = process.env;

export const dbOptions:  DataSourceOptions = {
    type: "postgres",
    url: PG_URL,
    host: PG_HOST,
    port: parseInt(PG_PORT ? PG_PORT : "5432"),
    username: PG_USERNAME,
    password: PG_PASSWORD,
    database: PG_NAME,
    logging: false,
    synchronize: false,
    ssl: {
        rejectUnauthorized: false,
    },
    entities: [
        TestEntity,
    ],
    extra: {
        connectionLimit: 10,
    }
}