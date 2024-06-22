import dotenv from 'dotenv';
import path from 'path';


dotenv.config({path: path.join(process.cwd(), '.env')});


export default {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    default_pass: process.env.DEFAULT_PASSWORD,
    bcrypt_salt_round: process.env.BCRYPY_SALT_ROUND
}