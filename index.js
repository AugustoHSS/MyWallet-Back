import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

const server = express();
server.use(express.json());
server.use(cors());
dotenv.config();
const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;
mongoClient.connect(() => {
  db = mongoClient.db('myWallet');
});
server.post('/sign-in', async (request, response) => { });

server.post('/sign-up', async (request, response) => { });

server.get('/statement', async (request, response) => { });

server.post('/sign-in', async (request, response) => { });
