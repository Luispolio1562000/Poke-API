import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/pokemon-response.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  constructor(private pokemonService: PokemonService) {}
  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=1000',
    );

    data.results.forEach(({ name, url }) => {
      // console.log({ name, url });
      const segments = url.split('/');
      // console.log(segments);
      const no: number = +segments[segments.length - 2];

      this.pokemonService.create({ no, name });
    });

    return data.results;
  }
}
