Top 50 sql questions:    

types of SQL statements?     
Definition (DDL)   
Manipulation (DML)   
Control (DCL)          

Primary key:(not null and unique) Unique identifier for each record in a table, enabling efficient retrieval.    
Composite key: Primary key made up of multiple columns, uniquely identifying records in a table together.     
Foreign key: Column(s) in a table referencing the primary key of another table, establishing a relationship.         
DELETE vs DROP: DELETE FROM table_name WHERE condition(rollback); Drop table;

Regex in sql:    
REGEXP 'be|ae' ; Gives all the names containing ‘be’ or ‘ae’.Example – Abel, Baer.    
REGEXP '[jz]' ;  Gives all the names containing ‘j’ or ‘z’.Example – Lorentz, Rajs.    
REGEXP '[b-g].[a]' ; Retrieve all names that contain a letter in the range of ‘b’ and ‘g’, followed by any character, followed by the letter ‘a’.Example – Tobias, sewall. Matches any single character(.).   
REGEXP '^[^jz]*$';  Gives all the names not containing ‘j’ or ‘z’. Example – nerton, sewall.    
REGEXP '[:alpha:]' ; i.e [:lower:]- lowercase character ,[:digit:] – digit characters etc. Gives all the titles containing alphabetic character only. Example – stranger things, Avengers.   
       
types of JOIN operations :   
INNER JOIN: Returns only the matching rows from both tables.     
LEFT JOIN: Returns all rows from the left table and matching rows from the right table.       
RIGHT JOIN: Returns all rows from the right table and matching rows from the left table.       
FULL JOIN: Returns all rows from both tables.       
SELF JOIN: agr values ko next column ke different row ke value se map krna ho toh self join. it is useful when you want to compare rows within the same table.         

UNION(removing duplicates) vs UNION ALL. 
UNION combines rows from two or more tables vertically, while JOIN combines columns from two or more tables horizontally based on related columns.  

Normalization :    
It is the process of organizing data in a database to eliminate redundancy and dependency issues. It involves splitting tables into smaller, more manageable entities.

The different normal forms are:
First Normal Form (1NF): Eliminates duplicate rows and ensures atomicity of values.
Second Normal Form (2NF): Ensures that each non-key column depends on the entire primary key.
Third Normal Form (3NF): Ensures that each non-key column depends only on the primary key and not on other non-key columns.
Fourth Normal Form (4NF): Eliminates multi-valued dependencies.
Fifth Normal Form (5NF): Eliminates join dependencies.
    
Stored procedure : SQL statements. It can be called and executed multiple times with different parameters.     
CREATE PROCEDURE procedure_name
AS
sql_statement
GO;
EXEC procedure_name;

ex:
CREATE PROCEDURE SelectAllCustomers @City nvarchar(30), @PostalCode nvarchar(10)
AS
SELECT * FROM Customers WHERE City = @City AND PostalCode = @PostalCode
GO;
EXEC SelectAllCustomers @City = 'London', @PostalCode = 'WA1 1DP';

A function in SQL returns a value and can be invoked within SQL statements, whereas a stored procedure does not directly return a value but can execute multiple actions.          
View : is a virtual table derived from one or more tables. It does not store data but provides a way to present data in a customized or simplified manner.    
Temporary table : is a physical table that is created and used temporarily within a session or a specific scope, whereas a table variable is a variable with a structure similar to a table and exists only within the scope of a user-defined function or a stored procedure.       
Trigger : is a set of SQL statements that are automatically executed in response to a specific event, such as INSERT, UPDATE, or DELETE operations on a table.       
Transaction : is a logical unit of work that consists of one or more database operations. It ensures that all operations within the transaction are treated as a single unit, either all succeeding or all failing.       
Deadlock : is a situation where two or more transactions are unable to proceed because each is waiting for a resource held by another transaction. This can result in a perpetual wait state.    

Subquery by using in operator.    
group_concat().  
CASE
    WHEN condition1 THEN result1
    WHEN City IS NULL THEN resultN
    ELSE result
END as final_result;   

The BACKUP DATABASE statement is used in SQL Server to create a full back up of an existing SQL database.   
BACKUP DATABASE databasename    
TO DISK = 'filepath';      


A differential back up only backs up the parts of the database that have changed since the last full database backup.      
BACKUP DATABASE databasename      
TO DISK = 'filepath'    
WITH DIFFERENTIAL;        

CREATE TABLE Persons (
    PersonID int,
    FirstName varchar(255)
);

The ALTER TABLE statement is used to add, delete, or modify columns in an existing table.
ALTER TABLE Customers
ADD/DROP/RENAME Email varchar(255);


Constraints:
FOREIGN KEY - Prevents actions that would destroy links between tables
A FOREIGN KEY is a field (or collection of fields) in one table, that refers to the PRIMARY KEY in another table.
FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
do practice of foreign key tbhi aayega: https://www.w3schools.com/sql/sql_foreignkey.asp


CHECK - Ensures that the values in a column satisfies a specific condition
CREATE TABLE Persons (
    ID int NOT NULL,
    Age int,
    CHECK (Age>=18)
);
ALTER TABLE Persons
ADD CONSTRAINT CHK_PersonAge CHECK (Age>=18 AND ID='23');


CREATE INDEX - Used to create and retrieve data from the database very quickly
CREATE UNIQUE INDEX index_name
ON table_name (column1, column2, ...);


CONSTRAINT UC_Person UNIQUE (ID,LastName)
ALTER TABLE Persons
ADD UNIQUE (ID);


a view is used when only a SELECT statement is needed. Views should be used to store commonly-used JOIN queries and specific columns to build virtual tables of an exact set of data we want to see. Stored procedures hold the more complex logic, such as INSERT, DELETE, and UPDATE statements to automate large SQL workflows. parameters ka diff. 

CREATE VIEW [Brazil Customers] AS
SELECT CustomerName, ContactName
FROM Customers
WHERE Country = 'Brazil';

SELECT * FROM [Brazil Customers];

SQL injection is a code injection technique that might destroy your database.

SELECT * FROM Users WHERE UserId = 105 OR 1=1;
Name ="John Doe" AND Pass ="myPass"
Name ="" or ""="" AND Pass ="" or ""=""
105; DROP TABLE Suppliers;


BLOB(size) :For BLOBs (Binary Large Objects). Holds up to 65,535 bytes of data

Examples:
WITH RECURSIVE EmployeeHierarchy AS (
    SELECT EmployeeID, Name, ManagerID, 1 AS Level
    FROM Employees
    WHERE ManagerID IS NULL
    UNION ALL
    SELECT e.EmployeeID, e.Name, e.ManagerID, eh.Level + 1
    FROM Employees e
    INNER JOIN EmployeeHierarchy eh ON e.ManagerID = eh.EmployeeID
)
SELECT EmployeeID, Name, ManagerID, Level
FROM EmployeeHierarchy
ORDER BY Level, EmployeeID;

OLTP (Online Transaction Processing) is used for day-to-day transactional operations and focuses on real-time processing.    
OLAP (Online Analytical Processing) is used for complex analytical queries and focuses on historical data analysis.     

Database Vs Schema : database is a collection of related data that is stored and organized. A schema, on the other hand, is a logical container within a database that holds objects like tables, views, and procedures.        
A data warehouse is a large repository of data collected from various sources, structured and organized to support business intelligence and reporting.              

  
A recursive SQL query is a query that refers to its own output in order to perform additional operations. It is commonly used for hierarchical or tree-like data structures.      
A correlated subquery is a subquery that references columns from the outer query, while a nested subquery is a subquery that is independent of the outer query.     


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


prod:

-- get common columns in 2 tables 

select A.COLUMN_NAME from INFORMATION_SCHEMA.COLUMNS A  join INFORMATION_SCHEMA.COLUMNS B on A.COLUMN_NAME = B.COLUMN_NAME 
where A.TABLE_NAME = 'customer_master' and B.TABLE_NAME = 'customer_updates'; 

-- get tables containing specific column name

SELECT TABLE_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE COLUMN_NAME = 'project_id';  

--  regex implimentation

SELECT * FROM wf_executions WHERE instance_id REGEXP '^77'; 

-- length(trim()) example

SELECT * FROM customer_notes WHERE LENGTH(TRIM(notes)) > 0 AND user_id IS NOT NULL group by user_id order by created_at desc;
  
-- example of self join

SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City FROM Customers A, Customers B 
WHERE A.CustomerID <> B.CustomerID AND A.City = B.City ORDER BY A.City; 

--  UNION is to combine the result-set of two or more SELECT statements.

SELECT 'Customer' AS Type, ContactName, City, Country FROM Customers UNION SELECT 'Supplier', ContactName, City, Country FROM Suppliers;

-- Orderby 1 column asc, 1 desc

SELECT * FROM Customers ORDER BY Country ASC, CustomerName DESC;=

IFNULL() is same as COALESCE()


