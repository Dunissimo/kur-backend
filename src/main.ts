// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//     const app = await NestFactory.create(AppModule);

//     app.enableCors({
//         origin: '*',
//     });

//     await app.listen(process.env.PORT ?? 3000);

//     return app;
// }

// const app = bootstrap();

// export default app;

import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

const server = express();

export async function bootstrap() {
    const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

    app.enableCors({
        origin: '*',
    });

    await app.init();
}

void bootstrap();

export default server;
