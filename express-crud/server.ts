import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

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
      throw new ClientError(
        400,
        'gradeId must be an integer or greater than 0.'
      );
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

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
