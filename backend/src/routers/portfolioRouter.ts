import express from 'express';

const portfolioRouter = express.Router();

portfolioRouter.post('/create');
portfolioRouter.get('/get/:id');
portfolioRouter.get('/all');
portfolioRouter.put('/update/:id');
portfolioRouter.delete('/delete/:id');

export default portfolioRouter;