import express from 'express';

const applicationRouter = express.Router();

applicationRouter.post('/apply/:id');
applicationRouter.get('/get/:id');
applicationRouter.get('/all');
applicationRouter.delete('/withdraw/:id');
applicationRouter.put('/statusUpdate/:id');

export default applicationRouter;