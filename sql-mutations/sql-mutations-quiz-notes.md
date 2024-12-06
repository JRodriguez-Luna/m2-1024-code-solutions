# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?

  > C: Create | Insert
  > R: Read | Select
  > U: Update
  > D: Delete

- How do you add a row to a SQL table?

  > Using the 'insert into' + 'values'

- How do you add multiple rows to a SQL table at once?

  > Using split-commas after the parentheses on values

- How do you update rows in a database table?

  > Use 'update', 'set', 'where'

- How do you delete rows from a database table?

  > Use 'delete', 'from', 'where' to specify

- Why is it important to include a `where` clause in your `update` and `delete` statements?

  > Delete: will delete everything
  > Update: Will update everything

- How do you accidentally delete or update all rows in a table?

  > By not putting 'where'

- How do you get back the modified row without a separate `select` statement?

  > Use returning \*;

- Why did you get an error when trying to delete certain films?
  > The specified filmId is referenced from another data table.

## Notes
