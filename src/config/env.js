import dotenv from 'dotenv';
import  envvar from 'env-var';

dotenv.config();


export const envs = {
  PORT: envvar.get('PORT').required().asPortNumber(),
  PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString(),
};

// module.exports = {
//   envs
// };
