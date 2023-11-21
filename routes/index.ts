import express from 'express';
import testRouter from './test.router';

const appRoutes = express.Router();

appRoutes.use('/test', testRouter);

export default appRoutes;