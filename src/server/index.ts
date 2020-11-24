import express from 'express';
import cors from 'cors';
import loadApp from './loadApp';
import cookiesMiddleware from 'universal-cookie-express';

const app = express();
const port = 8080;

app.use(cors()).use(cookiesMiddleware());

loadApp(app);

app.listen(port, () => console.log(`App is listening on http://localhost:8080/`));
