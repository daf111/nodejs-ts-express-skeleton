import express from 'express';
import { registerRoutes } from './routes';

const app = express();
const port = 3000;

app.use(express.json());
const router = express.Router();
app.use(router);
registerRoutes(router);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
