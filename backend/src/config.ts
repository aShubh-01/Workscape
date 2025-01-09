import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env')});

export const port : number = Number(process.env.PORT) || 3000;