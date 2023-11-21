import express from 'express';

import { testController } from '../controllers';

const testRouter = express.Router();

testRouter.post(
    '/store',
    testController.store
);

testRouter.post(
    '/retrieve',
    testController.retrieve
)

export default testRouter;