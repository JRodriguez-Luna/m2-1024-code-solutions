# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?

  > For interacting with your PostgreSQL database.

- How do you tell `pg` which database to connect to?

  > You create a database connection object with the database you are connecting to.

- How do you send SQL to PostgreSQL from your Express server?

  > using the query() method. You will have a variable
  > containing the sql in a string.

- How do you access the rows that get returned from the SQL query?

  > use the .rows parameter

- What must you always remember to put around your asynchronous route handlers? Why?

  > try/catch blocks, this ensures that errors don't crash the server and get passed to the error-handling middleware.

- What is a SQL Injection Attack and how do you avoid it in `pg`?
  > It’s when malicious SQL is injected into queries. Avoid it by using parameterized queries with placeholders like $1.

## Notes
