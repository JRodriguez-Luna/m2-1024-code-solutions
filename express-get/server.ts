import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
      select
        "title",
        "description",
        "filmId",
        "replacementCost"
      from "films"
      order by "replacementCost" desc
      limit 2;
    `;
    const result = await db.query(sql);
    const films = result.rows;
    if (!films) {
      throw new ClientError(404, 'films not found.');
    }
    res.json(films);
  } catch (err) {
    next(err);
  }
});

app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    if (
      Number.isNaN(filmId) ||
      !Number.isInteger(+filmId) ||
      Number(filmId) < 1
    ) {
      throw new ClientError(400, 'filmId is required.');
    }
    const sql = `
      select
        "title",
        "description",
        "filmId",
        "replacementCost"
      from "films"
      where "filmId" = $1;
    `;

    const params = [filmId];
    const result = await db.query(sql, params);
    const [film] = result.rows;
    if (!film) {
      throw new ClientError(404, `filmId ${filmId} not found.`);
    }
    res.json(film);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
