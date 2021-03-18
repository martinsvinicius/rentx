import { Router } from 'express';
import CategoriesRepository from '../repositories/CategoriesRepository';
import CreateCategoryService from '../services/CreateCategoryService';

const categoriesRoutes = Router();

// Repositories
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get('/', (_, res) => {
  const categories = categoriesRepository.index();

  return res.json(categories);
});

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  try {
    const createCategoryService = new CreateCategoryService(categoriesRepository);

    const category = createCategoryService.execute({ name, description });

    return res.status(201).json(category);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

export { categoriesRoutes };
