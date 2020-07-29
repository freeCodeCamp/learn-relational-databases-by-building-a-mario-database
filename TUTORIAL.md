# Learn Relational Databases by Building a Mario Database

> Welcome to the Relational Database Lessons! You will be using PostgreSQL for this section. It's an extremely popular open source relational database management systems (RDBMS). My goal is to teach you everything I can about it and relatational databases.

## 20. Login

### 20.1

Your virtual machine comes with PostgreSQL installed. You can use psql to interact with it. Log in by typing `psql -U freecodecamp postgres` into the terminal and pressing enter.

#### HINTS

- Capitalization matters
- If the terminal isn't open, find the "hamburger" menu at the top left of the window, navigate to the "Terminal" tab, and click "New Terminal"
- Type `psql -U freecodecamp postgres` into the terminal and press enter

## 30. View Databases

### 30.1

Notice that the prompt changed to let you know that you are now interacting with PostgreSQL. First thing to do is see what databases are here. Type `\l` into the prompt to **l**ist them.

#### HINTS

- Type `\l` into the psql prompt and press enter
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in first

## 40. Create `first_database`

### 40.1

The databases you see are there by default. You can make your own with `CREATE DATABASE database_name;` The capitalized words are keywords telling PostgreSQL what to do. The name of the database is the lowercase word. Note that **all commands need a semi-colon at the end.** Create a new database named `first_database`.

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

It worked. Do you see your new database? If you don't get a message after entering a command, it means it's incomplete and you likely forgot the semi-colon. You can just add it on the next line and press enter to finish the command. Create another database named `second_database`.

#### HINTS

- Use the "CREATE DATABASE" keywords
- Here's the example again: `CREATE DATABASE database_name;`
- Don't forget the semi-colon
- Try entering `CREATE DATABASE second_database;`
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in first

## 70. View Databases

### 70.1

You should have another new database now. Take another look at them to make sure.

#### HINTS

- Use the **l**ist shortcut command
- Try entering `\l` into the prompt
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in first

## 80. Connect to `second_database`

### 80.1

You can **c**onnect to a database by entering `\c database_name`. You need to connect to add information. Connect to your `second_database`.

#### HINTS

- Enter `\c second_database` into the psql prompt to connect
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in first

## 90. View `second_database` Tables

### 90.1

You should see a message that you are connected. I noticed the prompt changed to `second_database=#`. So the `postgres=#` prompt before must have meant that you were connected to that database. A database is made of tables that hold your data. Enter `\d` to **d**isplay the tables.

#### HINTS

- Type `\d` in the prompt and press enter
- If you aren't connected to `second_database`, type `\c second_database` into the terminal first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged before that

## 100. Create `first_table`

### 100.1

Similar to how you created a database, you can create a table with `CREATE TABLE table_name();`. Note that the parenthesis are needed for this one. It will create the table in the database you are connected to. Create a table named `first_table` in `second_database`.

#### HINTS

- Enter `CREATE TABLE first_table();` into the prompt
- Don't forget the semi-colon
- If you aren't connected to `second_database`, type `\c second_database` into the terminal first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 110. View `second_database` Tables

### 110.1

View the tables in `second_database` again with the **d**isplay command. You should see your new table there with a little meta data about it.

#### HINTS

- A shortcut command starts with `\`
- Try entering `\d` into the prompt
- If you aren't connected to `second_database`, type `\c second_database` into the terminal first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 120. Create `second_table`

### 120.1

Create another new table in this database. Give it a name of `second_table`.

#### HINTS

- Use the "CREATE TABLE" keywords
- Don't forget the semi-colon at the end
- It needs parenthesis at the end as well
- Here's an example: `CREATE TABLE table_name();`
- Enter `CREATE TABLE second_table();` into the prompt
- If you aren't connected to `second_database`, type `\c second_database` into the terminal first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 130. View `second_database` Tables

### 130.1

There should be two tables in this database now. Take another look at the tables to make sure.

#### HINTS

- Use the **display** shortcut command
- Enter `\d` into the prompt
- If you aren't connected to `second_database`, type `\c second_database` into the terminal first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 140. View `second_table` Details

### 140.1

You can view more details about a table by adding the table name after the **d**isplay command like this: `\d table_name`. View more details about your `second_table`.

#### HINTS

- Enter `\d second_table` into the prompt
- If you aren't connected to `second_database`, type `\c second_database` into the terminal first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 150. Create `first_column`

### 150.1

Tables need **columns** to describe the data in them, yours doesn't have any yet. Here's an example of how to add one:

```sql
ALTER TABLE table_name ADD COLUMN column_name DATATYPE;
```

Add a column to `second_table` named `first_column`. Give it a data type of `INT`. `INT` stands for integer. Don't forget the semi-colon. :smile:

#### HINTS

- Try entering `ALTER TABLE second_table ADD COLUMN first_column INT;`
- If you aren't connected to `second_database`, type `\c second_database` into the terminal first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that
