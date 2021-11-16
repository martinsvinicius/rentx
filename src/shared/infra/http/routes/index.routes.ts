import { Router } from 'express';
import { authRoutes } from './auth.routes';
import { carsRoutes } from './cars.routes';
import { categoriesRoutes } from './categories.routes';
import { specificationsRouter } from './specifications.routes';
import { usersRouter } from './users.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRouter);
router.use('/cars', carsRoutes);

router.use('/users', usersRouter);
router.use('/auth', authRoutes);

export { router };
