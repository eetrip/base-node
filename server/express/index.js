/* eslint-disable import/no-import-module-exports */
import express from 'express';
import http from 'http';
import Route from '../dropseq/routes.js';

import AppConfig from './config.js';

export class Server {
  constructor() {
    this.app = express();
    this.http = http.Server(this.app);
  }

  appConfig() {
    new AppConfig(this.app).includeConfig();
  }

  includeRoutes() {
    new Route(this.app).routesConfig();
  }

  appExecute() {
    this.appConfig();
    this.includeRoutes();

    const port = process.env.PORT || 3000;
    const host = process.env.HOST || 'localhost';

    this.http.listen(port, host, () => {
      console.log(`Server listening on port ${port}`);
    });
  }
}

export default Server;
