import { Model } from 'mongoose';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
export declare class SeedService {
    private readonly pokemonModel;
    private readonly http;
    constructor(pokemonModel: Model<Pokemon>, http: AxiosAdapter);
    executeSeed(): Promise<void>;
}
