import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
/**
 * Crea un Schema en BD usando mongoose.
 * * Document: genera la coleccion en Mongo, agregando las funcionalidades de un documento.
 * * @Schema(): Decorador que define un schema de DB
 */
@Schema()
export class Pokemon extends Document {
     
    //* Propiedades de la BD
    @Prop({
    unique: true,
    index1: true,
  })
  name: string;
  @Prop({
    unique: true,
    index1: true,
  })
  no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
