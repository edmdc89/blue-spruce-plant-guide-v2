import path from 'path';
import express from 'express';
import renderer from './renderer';

export default function loadApp(app: express.Application): void {
  app.use(express.static(path.join(__dirname)));
  app.get('/*', (req, res) => {
    renderer(req, res).then((html) => res.send(html));
  });
}
