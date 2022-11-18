import { Request, Response } from 'express';

export default class StatusGetController {
  run(req: Request, res: Response) {
    res.json({ status: 'ok' });
  }
}
