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

// export let app: NestApplication;

// export default async function handler() {
//     if (!app) {
//         app = await NestFactory.create(AppModule);

//         app.enableCors({
//             origin: '*',
//         });

//         await app.init();
//     }
// }

export default async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: '*',
    });

    await app.listen(process.env.PORT ?? 3001);
}

void bootstrap();
