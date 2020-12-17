import * as dotenv from 'dotenv';
dotenv.config()

import express from 'express';
import path from 'path';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json()); //Plugin para entender o request em json
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(errors());

app.listen(process.env.PORT || '0.0.0.0');
console.log(`App listening on PORT: ${process.env.PORT}`)