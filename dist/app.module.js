"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const process_module_1 = require("./process/process.module");
const stage_module_1 = require("./stage/stage.module");
const workshop_module_1 = require("./workshop/workshop.module");
const zakaz_module_1 = require("./zakaz/zakaz.module");
const status_module_1 = require("./status/status.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: configService.get('TYPEORM_HOST', 'localhost'),
                    port: configService.get('TYPEORM_PORT', 3306),
                    username: configService.get('TYPEORM_USERNAME'),
                    password: configService.get('TYPEORM_PASWORD'),
                    database: configService.get('TYPEORM_DATABASE'),
                    entities: [__dirname + '/**/*.entity{.ts,.js}'],
                    synchronize: false,
                }),
                inject: [config_1.ConfigService],
            }),
            process_module_1.ProcessModule,
            stage_module_1.StageModule,
            workshop_module_1.WorkshopModule,
            zakaz_module_1.ZakazModule,
            status_module_1.StatusModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map