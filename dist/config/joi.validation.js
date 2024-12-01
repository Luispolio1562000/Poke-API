"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoiValidationSchema = void 0;
const joi = require("joi");
exports.JoiValidationSchema = joi.object({
    MONGODB: joi.required(),
    PORTI: joi.number().default(3005),
    DEFAULT_LIMIT: joi.number().default(20),
    DBNAME: joi.string().default('pokemonsDB'),
});
//# sourceMappingURL=joi.validation.js.map