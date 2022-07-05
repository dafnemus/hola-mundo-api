import express from 'express';
import compression from 'compression';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(compression());

app.use('/', (re, res) => {
  res.send('Bienvenido, esta API usa GraphQL');
});

const PORT = 5300;

app.listen({ port: PORT }, () =>
  console.log(`Hola mundo API GraphQL http://localhost:${PORT}`)
);
