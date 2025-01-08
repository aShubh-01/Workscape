import express from 'express';
import cors from 'cors';

const mainRouter = express();

mainRouter.use(cors());
mainRouter.use(express.json());

mainRouter.get('Workscape API working');

mainRouter.use('/user');
mainRouter.use('/jobs');
mainRouter.use('/application');