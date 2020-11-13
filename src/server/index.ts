import express from 'express';
import loadApp from './loadApp';

const app = express();
const port = 8080;

loadApp(app);

app.listen(port, () => console.log(`App is listening on http://localhost:8080/`));
