/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

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
