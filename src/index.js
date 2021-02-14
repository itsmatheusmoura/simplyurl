import express from 'express';
import cors from 'cors';


const app = express();
import './database';

import routes from './app/routes';

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000 );
