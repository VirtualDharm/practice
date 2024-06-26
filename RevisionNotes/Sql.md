# Top 50 sql questions: 
# types of SQL statements?
* Definition (DDL): creating, altering, and dropping database.
* Manipulation (DML): querying, inserting, updating, and deleting data.
* Control (DCL): controlling access to the database, granting or revoking privileges.

# Primary key: Unique identifier for each record in a table, ensuring data integrity and enabling efficient retrieval.
# Foreign key: Column(s) in a table referencing the primary key of another table, establishing a relationship.
# Composite key: Primary key made up of multiple columns, uniquely identifying records in a table together.
# DELETE to remove specific rows from a table, whereas TRUNCATE to remove all rows from a table.
# Self-join : is useful when you want to compare rows within the same table.

# types of JOIN operations :
* INNER JOIN: Returns only the matching rows from both tables.
* LEFT JOIN: Returns all rows from the left table and matching rows from the right table.
* RIGHT JOIN: Returns all rows from the right table and matching rows from the left table.
* FULL JOIN: Returns all rows from both tables.

# Normalization : 
It is the process of organizing data in a database to eliminate redundancy and dependency issues. It involves splitting tables into smaller, more manageable entities.

The different normal forms are:
* First Normal Form (1NF): Eliminates duplicate rows and ensures atomicity of values.
* Second Normal Form (2NF): Ensures that each non-key column depends on the entire primary key.
* Third Normal Form (3NF): Ensures that each non-key column depends only on the primary key and not on other non-key columns.
* Fourth Normal Form (4NF): Eliminates multi-valued dependencies.
* Fifth Normal Form (5NF): Eliminates join dependencies.

# Index : 
it is a database structure that improves the speed of data retrieval operations on database tables. It allows faster searching, sorting, and filtering of data.
# clustered index :
It determines the physical order of data in a table. Each table can have only one clustered index, and it is generally created on the primary key column(s).
# Non-clustered index :
It is a separate structure from the table that contains a sorted list of selected columns. It enhances the performance of searching and filtering operations.

* unique key vs primary key : allows NULL values and enforces uniqueness but does not automatically define the
primary identifier of a table.
* UNION vs UNION ALL combines the result sets without removing duplicates.
* View : is a virtual table derived from one or more tables. It does not store data but provides a way to present data in a customized or simplified manner.
* stored procedure : is a precompiled set of SQL statements that performs a specific task. It can be called and executed multiple times with different parameters.
* trigger is a set of SQL statements that are automatically executed in response to a specific event, such as INSERT, UPDATE, or DELETE operations on a table.
* transaction : is a logical unit of work that consists of one or more database operations. It ensures that all operations within the transaction are treated as a single unit, either all succeeding or all failing.
* deadlock : is a situation where two or more transactions are unable to proceed because each is waiting for a resource held by another transaction. This can result in a perpetual wait state.
* A function in SQL returns a value and can be invoked within SQL statements, whereas a stored procedure does not directly return a value but can execute multiple actions.
# Database Vs Schema
A database is a collection of related data that is stored and organized. A schema, on the other hand, is a logical container within a database that holds objects like tables, views, and procedures.
* A data warehouse is a large repository of data collected from various sources, structured and organized to support business intelligence and reporting.
* OLTP (Online Transaction Processing) is used for day-to-day transactional operations and focuses on real-time processing. OLAP (Online Analytical Processing) is used for complex analytical queries and focuses on historical data analysis.
* A temporary table is a physical table that is created and used temporarily within a session or a specific scope, whereas a table variable is a variable with a structure similar to a table and exists only within the scope of a user-defined function or a stored procedure.
* UNION combines rows from two or more tables vertically, while JOIN combines columns from two or more tables horizontally based on related columns.
* A primary key is a chosen candidate key from many that becomes the main identifier for the table.
* A recursive SQL query is a query that refers to its own output in order to perform additional operations. It is commonly used for hierarchical or tree-like data structures.
* A correlated subquery is a subquery that references columns from the outer query, while a nested subquery is a subquery that is independent of the outer query.

Regex in sql:
SELECT name FROM student_tbl WHERE name REGEXP '^sa';
Gives all the names starting with ‘sa’.Example- sam,samarth.
REGEXP 'on$';Gives all the names ending with ‘on’.Example – norton,merton.
REGEXP 'com ?'; Gives all the titles containing ‘com’.Example – comedy , romantic comedy.
REGEXP 'be|ae' ; Gives all the names containing ‘be’ or ‘ae’.Example – Abel, Baer.
REGEXP '[jz]' ;  Gives all the names containing ‘j’ or ‘z’.Example – Lorentz, Rajs.
REGEXP '[b-g].[a]' ; Retrieve all names that contain a letter in the range of ‘b’ and ‘g’, followed by any character, followed by the letter ‘a’.Example – Tobias, sewall. Matches any single character(.)
REGEXP '^[^jz]*$';  Gives all the names not containing ‘j’ or ‘z’. Example – nerton, sewall.
REGEXP 'ack[[:>:]]';  Gives all the titles ending with character “ack”. Example – Black.
REGEXP '[[:<:]]for'; Gives all the titles starting with character “for”. Example – Forgetting Sarah Marshal.
REGEXP '[:alpha:]' ; i.e [:lower:]- lowercase character ,[:digit:] – digit characters etc. Gives all the titles containing alphabetic character only. Example – stranger things, Avengers.
REGEXP '^[ns]' ; Gives all the names starting with ‘n’ or ‘s’. Example – nerton, sewall.


link: https://learnsql.com/blog/25-advanced-sql-query-examples/
RANK() OVER (ORDER BY salary DESC) as ranking  
where Ranking = 2 
ORDER BY ranking;
{to get rank/row_number() of some data}

PARTITION BY dept_id
{to get data of one dept then another dept}

NTILE(2) OVER (ORDER BY salary) AS someData
where someData = 2
{to divide data and see}

CROSS JOIN , bc machood de joins ki

agr values ko next column ke different row ke value se map krna ho toh self join

Subquery by using in operator

