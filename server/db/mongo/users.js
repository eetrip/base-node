import mongodb from 'mongodb';
import { Users as BaseUsers } from '../users.js';

const { ObjectId } = mongodb;

export class Users extends BaseUsers {
  get Collection() {
    return this.db.collection(this.name);
  }

  findOneById(id) {
    return this.Collection.findOne({ _id: new ObjectId(id) });
  }
}

export default Users;
