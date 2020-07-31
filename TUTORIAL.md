# Learn Relational Databases by Building a Mario Database

> Welcome to the Relational Database Lessons! You will be using PostgreSQL for this section. It's an extremely popular open source relational database management systems (RDBMS).

## 20. Login

### 20.1

Your virtual machine comes with PostgreSQL installed. You will use Psql to interact with it. Log in by typing `psql -U freecodecamp postgres` into the terminal and pressing enter.

#### HINTS

- Capitalization matters
- Type `psql -U freecodecamp postgres` into the terminal and press enter
- If the terminal isn't open, find the "hamburger" menu at the top left of the window, navigate to the "Terminal" tab, and click "New Terminal"

## 30. View Databases

### 30.1

Notice that the prompt changed to let you know that you are now interacting with PostgreSQL. First thing to do is see what databases are here. Type `\l` into the prompt to **l**ist them.

#### HINTS

- Type `\l` into the psql prompt and press enter
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in first

## 40. Create `first_database`

### 40.1

The databases you see are there by default. You can make your own like this:

```sql
CREATE DATABASE database_name;
```

The capitalized words are keywords telling PostgreSQL what to do. The name of the database is the lowercase word. Note that **all commands need a semi-colon at the end.** Create a new database named `first_database`.

#### HINTS

- Don't forget the semi-colon at the end
- Type `CREATE DATABASE first_database;` into the psql prompt and press enter
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in first

## 50. View `first_database`

### 50.1

Use the **l**ist shortcut command again to make sure your new database is there.

#### HINTS

- Type `\` followed by the "list" shortcut letter
- Enter `\l` into the psql prompt and press enter
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in first

## 60. Create `second_database`

### 60.1

It worked. Your new database is there. If you don't get a message after entering a command, it means it's incomplete and you likely forgot the semi-colon. You can just add it on the next line and press enter to finish the command. Create another database named `second_database`.

#### HINTS

- Use the "CREATE DATABASE" keywords
- Here's the example again: `CREATE DATABASE database_name;`
- Don't forget the semi-colon
- Try entering `CREATE DATABASE second_database;`
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in first

## 70. View Databases

### 70.1

You should have another new database now. **L**ist the databases to make sure.

#### HINTS

- Use the **l**ist shortcut command
- Enter `\l` into the prompt
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in first

## 80. Connect to `second_database`

### 80.1

You can **c**onnect to a database by entering `\c database_name`. You need to connect to add information. Connect to your `second_database`.

#### HINTS

- Enter `\c second_database` into the psql prompt to connect
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in first

## 90. View `second_database` Tables

### 90.1

You should see a message that you are connected. I noticed the prompt changed to `second_database=#`. So the `postgres=#` prompt before must have meant you were connected to that database. A database is made of tables that hold your data. Enter `\d` to **d**isplay the tables.

#### HINTS

- Type `\d` in the prompt and press enter
- Enter `psql -U freecodecamp second_database` into the terminal to log in if you aren't already

## 100. Create `first_table`

### 100.1

Similar to how you created a database, you can create a table like this:

```sql
CREATE TABLE table_name();
```

Note that the parenthesis are needed for this one. It will create the table in the database you are connected to. Create a table named `first_table` in `second_database`.

#### HINTS

- Enter `CREATE TABLE first_table();` into the prompt
- Don't forget the semi-colon
- Enter `psql -U freecodecamp second_database` into the terminal to log in if you aren't already

## 110. View `second_database` Tables

### 110.1

View the tables in `second_database` again with the **d**isplay command. You should see your new table there with a little meta data about it.

#### HINTS

- Use the **d**isplay shortcut command
- Try entering `\d` into the prompt
- Enter `psql -U freecodecamp second_database` into the terminal to log in if you aren't already

## 120. Create `second_table`

### 120.1

Create another new table in this database. Give it a name of `second_table`.

#### HINTS

- Use the "CREATE TABLE" keywords
- Don't forget the parenthesis and semi-colon at the end
- Here's an example: `CREATE TABLE table_name();`
- Enter `CREATE TABLE second_table();` into the prompt
- Enter `psql -U freecodecamp second_database` into the terminal to log in if you aren't already

## 130. View `second_database` Tables

### 130.1

There should be two tables in this database now. **D**isplay them again for me to make sure.

#### HINTS

- Use the **display** shortcut command
- Enter `\d` into the prompt
- Enter `psql -U freecodecamp second_database` into the terminal to log in if you aren't already

## 140. View `second_table` Details

### 140.1

You can view more details about a table by adding the table name after the **d**isplay command like this: `\d table_name`. View more details about your `second_table`.

#### HINTS

- Enter `\d second_table` into the prompt
- Enter `psql -U freecodecamp second_database` into the terminal to log in if you aren't already

## 150. Create `first_column`

### 150.1

Tables need **columns** to describe the data in them, yours doesn't have any yet. Here's an example of how to add one:

```sql
ALTER TABLE table_name ADD COLUMN column_name DATATYPE;
```

Add a column to `second_table` named `first_column`. Give it a data type of `INT`. `INT` stands for integer. Don't forget the semi-colon. :smile:

#### HINTS

- Try entering `ALTER TABLE second_table ADD COLUMN first_column INT;`
- Enter `psql -U freecodecamp second_database` into the terminal to log in if you aren't already

## 160. View `second_table` Details

### 160.1

I think it worked. **D**isplay the details of `second_table` again to see if your new column is there.

#### HINTS

- Use the **d**isplay shortcut command
- Put the table name after the command
- Here's an example: `\d table_name`
- Try entering `\d second_table`
- Enter `psql -U freecodecamp second_database` into the terminal to log in if you aren't already

## 170. Add `id` Column

### 170.1

Your column is there :smile: Use `ALTER TABLE` and `ADD COLUMN` to add another column to `second_table` named `id` that's a type of `INT`. 

#### HINTS

- Here's the example again: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE;`
- Don't forget the semi-colon :wink:
- You added the last column with: `ALTER TABLE second_table ADD COLUMN first_column INT;`
- Try entering `ALTER TABLE second_table ADD COLUMN id INT;`
- Enter `psql -U freecodecamp second_database` into the terminal to log in if you aren't already

## 180. View `second_table` Details

### 180.1

Your table should have an `id` column added. View the details of `second_table` to make sure.

#### HINTS

- Use the **d**isplay command
- Add a table name after the **d**isplay command to view details
- Here's an example: `\d table_name`
- Try entering `\d second_table`
- Enter `psql -U freecodecamp second_database` into the terminal to log in if you aren't already

## 190. Add `age` Column

### 190.1

Add another column to `second_table` named `age`. Give it a data type of `INT`.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- Here's the example again: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE;`
- You added the last column with: `ALTER TABLE second_table ADD COLUMN id INT;`
- Try using `ALTER TABLE second_table ADD COLUMN age INT;`
- Enter `psql -U freecodecamp second_database` into the terminal to log in if you aren't already

## 200. View `second_table` Details

### 200.1

Take look at the details of `second_table` again.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the shortcut command to see details
- Here's an example: `\d table_name`
- Enter `\d second_table`
- Enter `psql -U freecodecamp second_database` into the terminal to log in if you aren't already

## 210. Drop `age` Column

### 210.1

Those are some good looking columns. You will probably need to know how to remove them at some point. Here's an example:

```sql
ALTER TABLE table_name DROP COLUMN column_name;
```

Drop your `age` column.

#### HINTS

- Try entering `ALTER TABLE second_table DROP COLUMN age;`
- Enter `psql -U freecodecamp second_database` into the terminal to log in if you aren't already

## 220. View `second_table` Details

### 220.1

View the details of `second_table` to see if it's gone.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the shortcut command to see details
- Here's an example: `\d table_name`
- Enter `\d second_table`
- Enter `psql -U freecodecamp second_database` into the terminal to log in if you aren't already

## 230. Drop `first_column` Column

### 230.1

It's gone. Use the `ALTER TABLE` and `DROP COLUMN` keywords again to drop `first_column`.

#### HINTS

- Here's the example again: `ALTER TABLE table_name DROP COLUMN column_name;`
- You dropped the last column with: `ALTER TABLE second_table DROP COLUMN age;`
- Try entering `ALTER TABLE second_table DROP COLUMN first_column;`
- Enter `psql -U freecodecamp second_database` into the terminal to log in if you aren't already

## 240. Add `name` Column

### 240.1

A common data type is `VARCHAR`. It is just a short string of characters. You need to give it a maximum length when using it like this: `VARCHAR(20)`.

Add a new column to `second_table`, give it a name of `name` and a data type of `VARCHAR(30)`.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE;`
- You added the last column like this: `ALTER TABLE second_table ADD COLUMN age INT;`
- Try entering `ALTER TABLE second_table ADD COLUMN name VARCHAR(30);`
- Enter `psql -U freecodecamp second_database` into the terminal to log in if you aren't already

## 250. View `second_table` Details

### 250.1

Take look at the details of `second_table` to see your columns.

#### HINTS

- Use the **d**isplay shortcut command
- Here's an example: `\d table_name`
- Try entering `\d second_table`
- Enter `psql -U freecodecamp second_database` into the terminal to log in if you aren't already

## 260. Rename `name` Column

### 260.1

You can see the `VARCHAR` type there. You named that column `name`, I wanted it to be `username`. Here's how you can rename a column:

```sql
ALTER TABLE table_name RENAME COLUMN column_name TO new_name;
```

Rename the `name` column to `username`.

#### HINTS

- Use `second_table` as the table name, `name` as the column name, and `username` as the new name for the column
- Try entering `ALTER TABLE second_table RENAME COLUMN name TO username;`
- Enter `psql -U freecodecamp second_database` into the terminal to log in if you aren't already

## 270. View `second_table` Details

### 270.1

Take look at the details of `second_table` again to see if it got renamed.

#### HINTS

- Use the **d**isplay shortcut command
- Here's an example: `\d table_name`
- Enter `\d second_table`
- Enter `psql -U freecodecamp second_database` into the terminal to log in if you aren't already

## 280. Insert Samus Row

### 280.1

It worked. You can add a row to a table like this:

```sql
INSERT INTO table_name(column_1, column_2) VALUES(value1, value2);
```

Insert a row into `second_table`. Give it an `id` of `1`, and a `username` of `Samus`. The username column expects a `VARCHAR`, so you need to put Samus in single quotes like this: `'Samus'`.

#### HINTS

- The table is `second_table`, the column names are `id` and `username`, and the values to add are `1` and `'Samus'`
- Don't forget the semi-colon
- Try entering `INSERT INTO second_table(id, username) VALUES(1, 'Samus');`
- If you missed a matching single quote, try entering `');` to finish the command and try again
- Enter `psql -U freecodecamp second_database` into the terminal to log in if you aren't already

## 290. View `second_table` Data

### 290.1

You should have one row in your table. How can you see it? Introducing, the `SELECT` statement. Here's how it looks:

```sql
SELECT columns FROM table_name;
```

Use a `SELECT` statement to view **all** the columns in `second_table`. Use an asterisk (`*`) to denote that you want to see all the columns.

#### HINTS

- Replace `columns` in the example with the all (`*`) symbol
- Use `second_table` as the table name
- Enter `SELECT * FROM second_table;`
- Enter `psql -U freecodecamp second_database` into the terminal to log in if you aren't already

## 300. Insert Mario Row

### 300.1

**Insert** another row **into** `second_table`. Fill in the `id` and `username` columns with the **values** `2` and `'Mario'`.

#### HINTS

- Here's the example: `INSERT INTO table_name(column_1, column_2) VALUES(value1, value2);`
- Did you make `Mario` a string?
- You added the last row with `INSERT INTO second_table(id, username) VALUES(1, 'Samus');`
- Try entering `INSERT INTO second_table(id, username) VALUES(2, 'Mario');`
- If you missed a matching single quote, try entering `');` to finish the command
- Enter `psql -U freecodecamp second_database` into the terminal to log in if you aren't already
