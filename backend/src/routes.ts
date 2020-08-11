import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();

routes.get('/', (request, response) => {
  return response
    .status(200)
    .json({ version: 1, date: '04/08/2020', message: 'API proffy' });
});

routes.get('/classes/all', classesControllers.all);
routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.store);

routes.get('/connections', connectionsControllers.index);
routes.post('/connections', connectionsControllers.store);

export default routes;
