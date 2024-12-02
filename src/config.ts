import * as dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const POSGRES_URL = process.env.POSTGRES_URL || 'postgresql://user:password@localhost:5432/myDB'