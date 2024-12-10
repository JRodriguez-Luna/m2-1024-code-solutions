# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?

  > It's where a column specifically refers to values in one table columns from another table.

- How do you join two SQL tables? (Provide at least two syntaxes.)

  > 1. select \* from "samples1" join "samples2" using ("sampleId");
  > 2. select "s1"."name" as "s1", "s2"."name" as "s2" from "samples1" join "samples2" using ("sampleId");

- How do you temporarily rename columns or tables in a SQL statement?

  > using the "as" keyword

- How do you create a one-to-many relationship between two tables?

  > A foreign key in one table pointing to a primary key in another table.

- How do you create a many-to-many relationship between two tables?
  > Using 3 tables; one foreign key to one of the tables and another foreign key to the other table.
  > Also referred to as "join table".

## Notes
