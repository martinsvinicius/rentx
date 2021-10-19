import { Router } from 'express';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';

const usersRouter = Router();

usersRouter.post('/', CreateUserController.handle);

export { usersRouter };
