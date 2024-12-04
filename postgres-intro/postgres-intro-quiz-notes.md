# postgres-into-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we use databases in Web development?

  > Helps with storing files directly that are managed by application but are able to quickly retrieve or store
  > complex data in an organized fashion.

- What is PostgreSQL and what are some alternative relational databases?

  > A powerful, free, open-source Relational Databse Management System (RDBMS).
  > Alternative:

  - MongoDB
  - Redis
  - Neo4j
  - DynamoDB

- What are some advantages of learning a relational database?

  > Supports data integrity with ACID compliance.
  > Widely used and versatile for managing relational data.
  > SQL skills are highly portable across various RDBMS systems.
  > Ideal for structured data with clear relationships, such as in web applications.

- What is one way to see if PostgreSQL is running?
  > Run a commands: sudo service postgresql status

## Notes

### Introduction to PostgreSQL

- **PostgreSQL**: A free, powerful relational database (RDBMS).
- Used to store and manage large amounts of data efficiently.
- Popular in web development for its reliability and features.

---

### Why Use Databases?

- **Centralized data**: Allows multiple users to share and access the same data.
- **Organized storage**: Better than storing data in files.
- **Scalability**: Can handle Gigabytes or Terabytes of data.

---

### Relational vs. NoSQL Databases

- **Relational Databases (SQL)**: Use structured tables and relationships (e.g., PostgreSQL, MySQL).
- **NoSQL Databases**: Store data in other formats (e.g., MongoDB, Redis).
- **Why Relational?**: Best for structured, related data (e.g., students, courses, teachers).

---

### Benefits of Relational Databases

- **Data Integrity**: Prevents bad or incomplete data.
- **SQL Skills**: Widely applicable across many systems.
- **ACID Properties**: Ensures accurate and reliable data handling.

---

### PostgreSQL in Development

- Installed in LearningFuze environment.
- Access via command-line tool `psql`.

---

### Commands to Manage PostgreSQL

- **Start PostgreSQL**:
  ```bash
  sudo service postgresql start
  ```
- **Stop PostgreSQL**:
  ```bash
  sudo service postgresql stop
  ```
- **Check Status**:
  ```bash
  sudo service postgresql status
  ```
- **List Databases**:
  ```bash
  psql -c '\l'
  ```
