export class Service {
  constructor({ db }) {
    this.db = db;
  }

  async list() {
    return this.db.Scrna.list();
  }
}

export default Service;
