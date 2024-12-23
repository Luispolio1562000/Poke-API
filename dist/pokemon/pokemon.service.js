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
exports.PokemonService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const pokemon_entity_1 = require("./entities/pokemon.entity");
const mongoose_2 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
let PokemonService = class PokemonService {
    constructor(pokemonModel, configService) {
        this.pokemonModel = pokemonModel;
        this.configService = configService;
        this.defaultLimit = this.configService.get('defaultLimit');
    }
    async create(createPokemonDto) {
        createPokemonDto.name = createPokemonDto.name.toLowerCase();
        try {
            const pokemon = await this.pokemonModel.create(createPokemonDto);
            return pokemon;
        }
        catch (error) {
            this.handleExeptions(error);
        }
    }
    findAll(paginationDto) {
        const { limit = this.defaultLimit, offset = 0 } = paginationDto;
        const response = this.pokemonModel
            .find()
            .limit(limit)
            .skip(offset)
            .sort({ no: 1 })
            .select('-__v')
            .exec();
        const total = limit;
        return response;
    }
    async findOne(id) {
        let pokemon;
        if (!isNaN(+id)) {
            pokemon = await this.pokemonModel.findOne({ no: id });
        }
        if (!pokemon && (0, mongoose_1.isValidObjectId)(id)) {
            pokemon = await this.pokemonModel.findById(id);
        }
        if (!pokemon) {
            pokemon = await this.pokemonModel.findOne({
                name: id.toLowerCase().trim(),
            });
        }
        if (!pokemon)
            throw new common_1.NotFoundException(`Pokemon not find`);
        return pokemon;
    }
    async update(id, updatePokemonDto) {
        const pokemon = await this.findOne(id);
        if (updatePokemonDto.name) {
            updatePokemonDto.name = updatePokemonDto.name.toLowerCase();
        }
        try {
            await pokemon.updateOne(updatePokemonDto, {
                new: true,
            });
            return { ...pokemon.toJSON(), ...updatePokemonDto };
        }
        catch (error) {
            this.handleExeptions(error);
        }
    }
    async remove(id) {
        const { deletedCount } = await this.pokemonModel.deleteOne({ _id: id });
        if (deletedCount === 0) {
            throw new common_1.BadRequestException(`Pokemon with ${id} not found`);
        }
        return;
    }
    handleExeptions(error) {
        if (error.code === 11000) {
            throw new common_1.BadRequestException(`Pokemon exists in DB ${JSON.stringify(error.keyValue)}`);
        }
        console.error(error);
        throw new common_1.InternalServerErrorException(`Internal server error - Check server logs`);
    }
};
exports.PokemonService = PokemonService;
exports.PokemonService = PokemonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(pokemon_entity_1.Pokemon.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        config_1.ConfigService])
], PokemonService);
//# sourceMappingURL=pokemon.service.js.map