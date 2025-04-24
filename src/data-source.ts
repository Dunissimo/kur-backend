import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { configDotenv } from 'dotenv';

configDotenv({ path: '.env' });

export default new DataSource({
    type: 'mysql',
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    logging: false,
    migrations: ['migrations/*_migration.ts'],
    migrationsRun: false,
});
