import 'dotenv/config';
import { json as bodyParserJSON } from 'body-parser';
import express, { Express } from 'express';
import cors from 'cors';

import appRoutes from '../routes';

const port = process.env.PORT || 3000;

const backendSetup = (app: Express) => {
    app.use(express.json());
    app.use(cors());
    app.use(bodyParserJSON());
    app.use('/health', (req, res) => res.send("OK"));
    app.use('/api', appRoutes);
    app.listen(port, () => {
        console.info(`Server is running on port ${port}`);
    });
};

export default backendSetup;