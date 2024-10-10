import express from 'express';
import { ENV_KEY } from './constants/env.constants.js';

const app = express();

app.get('/api', (req, res) => {
  res.status(200).send({ message: '테스트에 성공하셧습니다.' });
});

app.listen(ENV_KEY.PORT, () => {
  console.log(`Example app listening on port ${ENV_KEY.PORT}`);
});
