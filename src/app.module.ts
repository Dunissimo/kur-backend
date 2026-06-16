import { Module } from '@nestjs/common';
import { DurationModule } from './duration/duration.module';
import { StageModule } from './stage/stage.module';
import { WorkshopModule } from './workshop/workshop.module';
import { ZakazModule } from './zakaz/zakaz.module';
import { StatusModule } from './status/status.module';
import { ProductModule } from './product/product.module';
import { ProductStageModule } from './productStage/product-stage.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'cfif31.ru',
            port: 3306,
            username: 'ISPr25-22_SosnovskiySE',
            password: 'ISPr25-22_SosnovskiySE',
            database: 'ISPr25-22_SosnovskiySE_kursach',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: false,
            logging: false,
        }),
        DurationModule,
        StageModule,
        WorkshopModule,
        ZakazModule,
        StatusModule,
        ProductModule,
        ProductStageModule,
        UserModule,
        AuthModule,
    ],
    controllers: [],
})
export class AppModule {}
