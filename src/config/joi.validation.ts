import * as joi from 'joi';

//* La siguiente clase valida las variables de entorno y en caso de que no vengan establece algunas por defecto.
//* Utiliza la libreria joi.
//* Se carga y establece las variables de entorno.
export const JoiValidationSchema = joi.object({
  MONGODB: joi.required(),
  PORTI: joi.number().default(3005),
  DEFAULT_LIMIT: joi.number().default(20),
  DBNAME: joi.string().default('pokemonsDB'),
});
