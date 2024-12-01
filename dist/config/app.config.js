"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvConfiguration = void 0;
const EnvConfiguration = () => ({
    enviroment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3002,
    defaultLimit: +process.env.DEFAULT_LIMIT || 10,
});
exports.EnvConfiguration = EnvConfiguration;
//# sourceMappingURL=app.config.js.map