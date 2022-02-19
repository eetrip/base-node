export class Controller {
  constructor({ service }) {
    this.service = service;
  }

  list = async (req, res, next) => {
    try {
      console.log('list');
      console.log(this.service);
      //   const {
      //     body: { limit = 15, page = 1 },
      //   } = req;
      const resp = await this.service.list();
      return res.send(resp);
    } catch (err) {
      console.error(err);
      return next(err);
    }
  };
}

export default Controller;
