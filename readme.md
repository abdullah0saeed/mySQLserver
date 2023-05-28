Sure! Here's a list of commonly used MySQL commands:

1. Database Operations:

   - Create a database: `CREATE DATABASE database_name;`
   - Show databases: `SHOW DATABASES;`
   - Use a database: `USE database_name;`
   - Drop a database: `DROP DATABASE database_name;`

2. Table Operations:

   - Create a table: `CREATE TABLE table_name (column1 datatype1, column2 datatype2, ...);`
   - Show tables: `SHOW TABLES;`
   - Describe a table: `DESCRIBE table_name;`
   - Drop a table: `DROP TABLE table_name;`
   - Truncate a table (remove all data): `TRUNCATE TABLE table_name;`

3. Data Manipulation:

   - Insert data into a table: `INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);`
   - Update data in a table: `UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;`
   - Delete data from a table: `DELETE FROM table_name WHERE condition;`
   - Select data from a table: `SELECT column1, column2, ... FROM table_name WHERE condition;`

4. Data Retrieval:

   - Select all data from a table: `SELECT * FROM table_name;`
   - Limit the number of rows returned: `SELECT * FROM table_name LIMIT n;`
   - Sort data: `SELECT * FROM table_name ORDER BY column_name ASC|DESC;`
   - Join multiple tables: `SELECT * FROM table1 JOIN table2 ON table1.column = table2.column;`

5. Data Definition:

   - Add a new column to a table: `ALTER TABLE table_name ADD column_name datatype;`
   - Modify a column in a table: `ALTER TABLE table_name MODIFY column_name datatype;`
   - Rename a column in a table: `ALTER TABLE table_name RENAME COLUMN old_column TO new_column;`
   - Add a primary key to a table: `ALTER TABLE table_name ADD PRIMARY KEY (column_name);`
   - Add a foreign key to a table: `ALTER TABLE table_name ADD FOREIGN KEY (column_name) REFERENCES other_table(column_name);`

6. Indexing:
   - Create an index: `CREATE INDEX index_name ON table_name (column1, column2, ...);`
   - Remove an index: `DROP INDEX index_name ON table_name;`

These are just some of the commonly used MySQL commands. There are many more advanced commands and options available depending on your specific needs.
