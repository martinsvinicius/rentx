import express from 'express';
import 'express-async-errors';

import '@shared/infra/typeorm';
import '@shared/container';

import swaggerUi from 'swagger-ui-express';
import swaggerConfig from '@src/swagger.json';

import { router } from '@shared/infra/http/routes/index.routes';
import { globalErrorHandler } from '@shared/errors/globalErrorHandler';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.use(router);

app.use(globalErrorHandler);

app.listen(3333, () => {
  console.log('Server is running 🚀');
});
