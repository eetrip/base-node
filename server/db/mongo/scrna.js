import mongodb from 'mongodb';
import { Scrna as BaseScrna } from '../scrna.js';

const { ObjectId } = mongodb;

export class Scrna extends BaseScrna {
  constructor({ db }) {
    super();
    this.name = 'scrnaMatrix';
    this.db = db;
  }

  get Collection() {
    return this.db.collection(this.name);
  }

  list() {
    return this.Collection.find().limit(10).toArray();
  }

  findOneById(id) {
    return this.Collection.findOne({ _id: new ObjectId(id) });
  }
}

export default Scrna;
