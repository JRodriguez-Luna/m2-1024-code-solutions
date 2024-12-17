import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
      select *
      from "films"
      order by "replacementCost" desc;
    `;
    const result = await db.query(sql);
    const films = result.rows;
    res.send(films);
  } catch (err) {
    next(err);
  }
});

app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    if (!filmId || isNaN(Number(filmId)) || Number(filmId) < 1) {
      throw new ClientError(400, 'filmsId is required!');
    }
    const sql = `
      select
        *
      from "films"
      where "filmId" = $1;
    `;

    const params = [filmId];
    const result = await db.query(sql, params);
    const [film] = result.rows;
    if (!film) {
      throw new ClientError(404, `filmId ${filmId} not found!`);
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.put('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    const { title } = req.query;
    if (!filmId || isNaN(Number(filmId)) || Number(filmId) < 1) {
      throw new ClientError(400, 'filmId is required!');
    }
    if (!title) {
      throw new ClientError(400, 'title is required!');
    }
    const sql = `
      update "films"
        set "title" = $1
      where "filmId" = $2
      returning *;
    `;
    const params = [title, Number(filmId)];
    const result = await db.query(sql, params);
    const [film] = result.rows;
    if (!film) {
      throw new ClientError(404, `filmId ${filmId} not found!`);
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
