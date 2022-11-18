import { Request, Response } from 'express';
import { Controller } from './Controller';

export default class StatusGetController implements Controller {
  run(req: Request, res: Response) {
    res.json({ status: 'ok' });
  }
}
