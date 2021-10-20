import express from 'express';
import 'express-async-errors';

import './database';
import './shared/container';

import swaggerUi from 'swagger-ui-express';
import router from './routes/index.routes';
import swaggerConfig from './swagger.json';
import { globalErrorHandler } from './errors/globalErrorHandler';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.use(router);

app.use(globalErrorHandler);

app.listen(3333, () => {
  console.log('Server is running 🚀');
});
