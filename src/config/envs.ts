

import 'dotenv/config'
import * as joi from 'joi';

interface EnvVars {
    PORT: number,
    MONGODB: string,
    DEFAULT_LIMIT: number
}


const envsSchema = joi.object({
    PORT: joi.number().required(),
    MONGODB: joi.string().required(),
    DEFAULT_LIMIT: joi.number().default(5)
})
.unknown(true);

const {error, value} = envsSchema.validate( process.env );

if( error ){
    throw new Error(`Config Validation error: ${ error.message }`);
}

const envVars: EnvVars = value;

export const envs = {
    port: envVars.PORT,
    default_limit: envVars.DEFAULT_LIMIT,
    mongoDb: envVars.MONGODB
}
