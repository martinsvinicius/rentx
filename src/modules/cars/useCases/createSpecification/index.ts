import SpecificationsRepository from '../../repositories/implementations/SpecificationsRepository';
import CreateSpecificationController from './createSpecificationController';
import CreateSpecificationUseCase from './CreateSpecificationUseCase';

const specificationsRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export default createSpecificationController;
