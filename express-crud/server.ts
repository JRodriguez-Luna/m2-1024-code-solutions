import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

type Grade = {
  gradeId?: number;
  name: string;
  course: string;
  score: number; // A number between 0 and 100
};

const app = express();
app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
      from "grades";
    `;

    const result = await db.query(sql);
    const grades = result.rows;

    res.status(200).json(grades);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (
      Number.isNaN(gradeId) ||
      !Number.isInteger(+gradeId) ||
      Number(gradeId) < 1
    ) {
      throw new ClientError(400, 'Invalid gradeId.');
    }
    const sql = `
      select *
      from "grades"
      where "gradeId" = $1;
    `;

    const params = [gradeId];
    const result = await db.query(sql, params);
    const [grade] = result.rows;
    if (!grade) {
      throw new ClientError(404, `gradeId ${gradeId} does not exists.`);
    }

    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score }: Grade = req.body;

    if (!name || !course || !score || score < 0 || score > 100) {
      throw new ClientError(
        400,
        'name, course, score is required or score (0-100) are required.'
      );
    }

    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *;
    `;

    const params = [name, course, score];
    const result = await db.query(sql, params);
    const [grade] = result.rows;
    if (!grade) {
      throw new ClientError(404, `name, course, and score required.`);
    }

    res.status(201).json(grade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    const { name, course, score }: Grade = req.body;

    if (
      !name ||
      !course ||
      !Number.isInteger(score) ||
      score < 0 ||
      score > 100
    ) {
      throw new ClientError(
        400,
        'name, course, score is required or score (0-100) are required.'
      );
    }

    const sql = `
      update "grades"
        set
          "name" = $1,
          "course" = $2,
          "score" = $3
      where "gradeId" = $4
      returning *;
    `;

    const params = [name, course, score, Number(gradeId)];
    const result = await db.query(sql, params);
    const [grade] = result.rows;
    if (!grade) {
      throw new ClientError(404, `gradeId ${gradeId} does not exist.`);
    }
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (
      Number.isNaN(gradeId) ||
      !Number.isInteger(+gradeId) ||
      Number(gradeId) < 1
    ) {
      throw new ClientError(400, `Invalid gradeId.`);
    }
    const sql = `
      delete
        from "grades"
        where "gradeId" = $1
        returning *;
    `;

    const params = [gradeId];
    const result = await db.query(sql, params);
    const [grade] = result.rows;
    if (!grade) {
      throw new ClientError(404, `gradeId ${gradeId} does not exist.`);
    }

    res.status(204).json(grade);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
