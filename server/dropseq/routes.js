import controller from './controller.js';

export class Routes {
  constructor(app) {
    this.app = app;
  }

  appRoutes() {
    this.app.post('/first', controller.first);
  }

  routesConfig() {
    this.appRoutes();
  }
}

export default Routes;
