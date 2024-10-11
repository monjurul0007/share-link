import { Db, MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const dbName = process.env.MONGODB_DB_NAME as string;

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

if (!dbName) {
    throw new Error('Please define the MONGODB_DB environment variable inside .env');
}

const initiateConnection = async () => {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db();

    cachedClient = client;
    cachedDb = db;

    return { client, db };
};

export const getDB = async () => {
    if (cachedDb) {
        return cachedDb;
    }

    const { db } = await initiateConnection();

    return db;
};

export const getDBClient = async () => {
    if (cachedClient) {
        return cachedClient;
    }

    const { client } = await initiateConnection();

    return client;
};
