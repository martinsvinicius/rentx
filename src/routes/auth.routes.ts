import { Router } from 'express';
import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController';

const authRoutes = Router();

authRoutes.post('/sessions', AuthenticateUserController.handle);

export { authRoutes };
