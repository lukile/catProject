import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: async () => await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'postgres',
            synchronize: true,
            logging: false,
            entities: [
                 'src/entity/**/*.ts',
            ],
        }),
    },
];