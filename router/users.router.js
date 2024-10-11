import express from 'express';
import * as usersController from '../controller/users.controller.js';

const usersRouter = express();

//회원가입
/**
 * @swagger
 * paths:
 *  /sign-up:
 *    post:
 *      summary: "User Sign-Up"
 *      description: "Allows a new user to sign up by providing the required information in the request body."
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  example: "user@example.com"
 *                password:
 *                  type: string
 *                  example: "password123"
 *                name:
 *                  type: string
 *                  example: "John Doe"
 *                confirmPassword:
 *                  type: string
 *                  example: "password123"
 *      responses:
 *        "200":
 *          description: "Sign-up successful"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: "정상적으로 회원가입이 완료되었습니다."
 *                  data:
 *                    type: object
 *                    example: { "id": 1, "email": "user@example.com", "name": "John Doe" }
 */
usersRouter.post('/sign-up', usersController.signUp);

export { usersRouter };
