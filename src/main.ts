import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

const server = express();

export async function bootstrap() {
    const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

    const corsOptions: CorsOptions = {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    };

    app.enableCors(corsOptions);

    const port = process.env.PORT || 3000;
    await app.listen(port);
}

void bootstrap();

export default server;
