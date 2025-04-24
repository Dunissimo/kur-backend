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
exports.ProcessService = void 0;
const common_1 = require("@nestjs/common");
const process_entity_1 = require("./entities/process.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ProcessService = class ProcessService {
    processRepository;
    constructor(processRepository) {
        this.processRepository = processRepository;
    }
    create(createProcessDto) {
        const process = this.processRepository.create(createProcessDto);
        return this.processRepository.save(process);
    }
    findAll() {
        return this.processRepository.find();
    }
    findOne(id) {
        return this.processRepository.findOne({ where: { idProcess: id } });
    }
    async update(id, updateProcessDto) {
        await this.processRepository.update(id, updateProcessDto);
        return this.processRepository.findOne({ where: { idProcess: id } });
    }
    remove(id) {
        return this.processRepository.delete(id);
    }
};
exports.ProcessService = ProcessService;
exports.ProcessService = ProcessService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(process_entity_1.Process)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProcessService);
//# sourceMappingURL=process.service.js.map