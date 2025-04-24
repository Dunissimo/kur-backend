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
exports.StageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const stage_entity_1 = require("./entities/stage.entity");
const typeorm_2 = require("typeorm");
let StageService = class StageService {
    stageRepository;
    constructor(stageRepository) {
        this.stageRepository = stageRepository;
    }
    create(createStageDto) {
        const stage = this.stageRepository.create(createStageDto);
        return this.stageRepository.save(stage);
    }
    findAll() {
        return this.stageRepository.find();
    }
    findOne(id) {
        return this.stageRepository.findOne({ where: { idStages: id } });
    }
    async update(id, updateStageDto) {
        await this.stageRepository.update(id, updateStageDto);
        return this.stageRepository.findOne({ where: { idStages: id } });
    }
    remove(id) {
        return this.stageRepository.delete(id);
    }
};
exports.StageService = StageService;
exports.StageService = StageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(stage_entity_1.Stage)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StageService);
//# sourceMappingURL=stage.service.js.map