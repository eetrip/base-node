import MongoDbDriver from 'mongodb';
import { DB } from '../index.js';
import { Users } from './users.js';

const uri = process.env.MONGODB_URL;
const { MongoClient } = MongoDbDriver;

const mongoDb = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const startsession = () => mongoDb.startSession();

await mongoDb.connect();

const db = mongoDb.db('dropseq');

export class MongoDB extends DB {
  constructor() {
    super({
      users: new Users({ db }),
    });
  }
}

export default MongoDB;
