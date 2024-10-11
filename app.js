import express from 'express';
import cors from 'cors';
import { ENV_KEY } from './constants/env.constants.js';
import { usersRouter } from './router/users.router.js';
import { swaggerUi, specs } from './swagger/swagger.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use([usersRouter]);

app.get('/api', (req, res) => {
  res.status(200).send({ message: '테스트에 성공하셧습니다.' });
});

app.listen(ENV_KEY.PORT, () => {
  console.log(`Example app listening on port ${ENV_KEY.PORT}`);
});
