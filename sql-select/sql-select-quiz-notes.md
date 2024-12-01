# sql-select-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is SQL and how is it different from languages like JavaScript?

  > SQL (Structured Query Language) is the primary way of interacting with the relational databases, a powerful way of
  > retrieving, creating, and manipulating data in a relational database.

  > Its different because SQL is a 'declarative' programming language, meaning programmers describe the results they want and the programming
  > environment comes up with its own plan for getting those results.

- How do you retrieve specific columns from a database table?

  > use 'select' keyword > a comma-separated list of column names > followed by 'from' keyword clause specifying which table > end with semicolon
  > SQL keywords like 'select' and 'from' are not case-sensitive.
  > Does not have to be indented, but should be done anyway.

- How do you filter rows based on some specific criteria?

  > using the 'where' clause after the 'from' clause

  > ex: ... where "category" = 'cleaning';
  > Text value wrapped in '', not ""
  > PostgreSQL value comparisons are case-sensitive

- What are the benefits of formatting your SQL?

  > Making it easier to read and help with debugging.

- What are four comparison operators that can be used in a `where` clause?

  > =, <, >, !=

- How do you limit the number of rows returned in a result set?

  > using the 'limit' keyword to limit the number of rows included in a result set.

  > 'limit' comes last.
  > Includes literal integer number

- How do you retrieve all columns from a database table?

  > using the asterisk '\*' in 'select'

- How do you control the sort order of a result set?
  > using the 'oder by' keyword, followed by a column name,
  > default sort order is ascending order

## Notes
