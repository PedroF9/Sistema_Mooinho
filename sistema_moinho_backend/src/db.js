import pg from 'pg';
import env from 'dotenv';
import { text } from 'express';

env.config();

const db = new pg.Client({

    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    database:process.env.DB_DATABASE,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
});

db.connect();

db.on('error', (err) => {
    console.log("Unexpected error on idle client",err);
})

export const querry = (text, params) => db.query(text, params);