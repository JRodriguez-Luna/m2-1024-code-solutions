import 'dotenv/config';
import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "products"
        order by "productId";
    `;
    const result = await db.query(sql);
    res.status(200).json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    if (
      Number.isNaN(productId) ||
      !Number.isInteger(+productId) ||
      Number(productId) < 1
    ) {
      throw new ClientError(400, `productId invalid.`);
    }
    const sql = `
      select *
      from "products"
      where "productId" = $1;
    `;

    const params = [productId];
    const result = await db.query(sql, params);
    const [product] = result.rows;
    if (!product) {
      throw new ClientError(404, `productId ${productId} does not exist.`);
    }

    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
