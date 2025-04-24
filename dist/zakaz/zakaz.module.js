"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZakazModule = void 0;
const common_1 = require("@nestjs/common");
const zakaz_service_1 = require("./zakaz.service");
const zakaz_controller_1 = require("./zakaz.controller");
const typeorm_1 = require("@nestjs/typeorm");
const zakaz_entity_1 = require("./entities/zakaz.entity");
let ZakazModule = class ZakazModule {
};
exports.ZakazModule = ZakazModule;
exports.ZakazModule = ZakazModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([zakaz_entity_1.Zakaz])],
        controllers: [zakaz_controller_1.ZakazController],
        providers: [zakaz_service_1.ZakazService],
    })
], ZakazModule);
//# sourceMappingURL=zakaz.module.js.map