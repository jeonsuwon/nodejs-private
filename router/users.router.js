import express from 'express';
import * as usersController from '../controller/users.controller.js';

const usersRouter = express();

//회원가입
usersRouter.post('/sign-up', usersController.signUp);

export { usersRouter };
