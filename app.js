import express from 'express';
import { ENV_KEY } from './constants/env.constants.js';

const app = express();
const port = 3306;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(ENV_KEY.PORT, () => {
  console.log(`Example app listening on port ${ENV_KEY.PORT}`);
});
