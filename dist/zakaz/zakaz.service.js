"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZakazService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const zakaz_entity_1 = require("./entities/zakaz.entity");
const typeorm_2 = require("typeorm");
let ZakazService = class ZakazService {
    zakazRepository;
    constructor(zakazRepository) {
        this.zakazRepository = zakazRepository;
    }
    create(createZakazDto) {
        const zakaz = this.zakazRepository.create(createZakazDto);
        return this.zakazRepository.save(zakaz);
    }
    findAll() {
        return this.zakazRepository.find();
    }
    findOne(id) {
        return this.zakazRepository.findOne({ where: { idZakaz: id } });
    }
    async update(id, updateZakazDto) {
        await this.zakazRepository.update(id, updateZakazDto);
        return this.zakazRepository.findOne({ where: { idZakaz: id } });
    }
    remove(id) {
        return this.zakazRepository.delete(id);
    }
};
exports.ZakazService = ZakazService;
exports.ZakazService = ZakazService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(zakaz_entity_1.Zakaz)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ZakazService);
//# sourceMappingURL=zakaz.service.js.map