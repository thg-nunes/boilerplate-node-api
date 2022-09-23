import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import createConnection from '../typeorm';

import '../../container';

createConnection();

import { AppError } from '../../errors/AppError';
const app = express();

app.use(express.json());

app.use((err: Error, req: Request, res: Response, next: NextFunction): Response => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  if (err instanceof AppError === false) {
    return res.status(500).json({
      status: 'error',
      message: `Internal server error ${err.message}`,
    });
  }

  next();
});

app.listen(3333, () => console.log('server runing on port 3333'));
