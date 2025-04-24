"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateZakazDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_zakaz_dto_1 = require("./create-zakaz.dto");
class UpdateZakazDto extends (0, mapped_types_1.PartialType)(create_zakaz_dto_1.CreateZakazDto) {
}
exports.UpdateZakazDto = UpdateZakazDto;
//# sourceMappingURL=update-zakaz.dto.js.map