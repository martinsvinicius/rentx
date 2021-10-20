import { Router } from 'express';
import multer from 'multer';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';

import uploadConfig from '../config/upload';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

usersRouter.post('/', CreateUserController.handle);

usersRouter.use(ensureAuthenticated);

usersRouter.patch(
  '/avatar',
  uploadAvatar.single('avatar'),
  UpdateUserAvatarController.handle
);

export { usersRouter };
