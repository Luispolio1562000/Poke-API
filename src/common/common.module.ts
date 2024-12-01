import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adapter';

@Module({
    providers: [AxiosAdapter],
    //*Visible y accesible desde otro modulo.
    exports: [AxiosAdapter]
})
export class CommonModule {}
