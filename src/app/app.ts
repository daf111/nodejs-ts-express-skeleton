import express from 'express';
import { registerRoutes } from './routes';

export class App {
  _app = express();
  _port = 3000;
  _server = null;

  start() {
    this._app.use(express.json());
    const router = express.Router();
    this._app.use(router);
    registerRoutes(router);

    this._server = this._app.listen(this._port, () => {
      return console.log(`Express is listening at http://localhost:${this._port}`);
    });
  }

  get app() {
    return this._app;
  }

  stop() {
    this._server.close();
  }
}