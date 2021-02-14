import { response, Router} from 'express';
import SessionController from './controllers/SessionController';
import UserController from './controllers/UserController';
import UrlController from './controllers/UrlController';

import authMiddleware from '../app/middlewares/auth';   

const routes = Router();

routes.get('/:id', UrlController.show);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.post('/shrink', UrlController.store);
routes.get('/urls/list', UrlController.index);

export default routes;
