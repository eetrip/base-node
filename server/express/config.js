import { json } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import Express from './express-config.js';

export class AppConfig {
  constructor(app) {
    config();
    this.app = app;
  }

  includeConfig() {
    this.app.use(json());
    this.app.use(cors());
    new Express(this.app);
  }
}

export default AppConfig;
