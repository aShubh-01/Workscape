import express from 'express';

const jobsRouter = express.Router();

jobsRouter.post('/create');
jobsRouter.get('/job/:id');
jobsRouter.put('/update/:id');
jobsRouter.delete('/delete/:id');

export default jobsRouter;