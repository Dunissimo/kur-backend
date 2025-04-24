import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProcessModule } from './process/process.module';
import { StageModule } from './stage/stage.module';
import { WorkshopModule } from './workshop/workshop.module';
import { ZakazModule } from './zakaz/zakaz.module';
import { StatusModule } from './status/status.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'mysql',
                host: configService.get('TYPEORM_HOST', 'localhost'),
                port: configService.get('TYPEORM_PORT', 3306),
                username: configService.get('TYPEORM_USERNAME'),
                password: configService.get('TYPEORM_PASSWORD'),
                database: configService.get('TYPEORM_DATABASE'),
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: false,
            }),
            inject: [ConfigService],
        }),
        ProcessModule,
        StageModule,
        WorkshopModule,
        ZakazModule,
        StatusModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
