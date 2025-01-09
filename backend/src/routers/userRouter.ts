import express from 'express';

const userRouter = express.Router();

userRouter.post('/signup')
userRouter.post('/login')
userRouter.get('/profile')
userRouter.put('/profile/:id')

export default userRouter;