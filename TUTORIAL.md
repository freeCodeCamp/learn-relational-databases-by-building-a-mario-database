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
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged before that

## 100. Create `first_table`

### 100.1

Similar to how you created a database, you can create a table with `CREATE TABLE table_name();`. Note that the parenthesis are needed for this one. It will create the table in the database you are connected to. Create a table named `first_table` in `second_database`.

#### HINTS

- Enter `CREATE TABLE first_table();` into the prompt
- Don't forget the semi-colon
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 110. View `second_database` Tables

### 110.1

View the tables in `second_database` again with the **d**isplay command. You should see your new table there with a little meta data about it.

#### HINTS

- A shortcut command starts with `\`
- Try entering `\d` into the prompt
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
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
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 130. View `second_database` Tables

### 130.1

There should be two tables in this database now. Take another look at the tables to make sure.

#### HINTS

- Use the **display** shortcut command
- Enter `\d` into the prompt
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 140. View `second_table` Details

### 140.1

You can view more details about a table by adding the table name after the **d**isplay command like this: `\d table_name`. View more details about your `second_table`.

#### HINTS

- Enter `\d second_table` into the prompt
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
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
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 160. View `second_table` Details

### 160.1

Success! **D**isplay the details of `second_table` again to see your new column.

#### HINTS

- Use the **d**isplay shortcut command
- Put the table name at the end of the command
- Here's an example: `\d table_name`
- Try entering `\d second_table`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 170. Add `id` Column

### 170.1

Your column is there :smile: Try adding another column. Use `ALTER TABLE` and `ADD COLUMN` to add another column to `second_table` named `id` that's a type of `INT`. 

#### HINTS

- Don't forget the semi-colon :wink:
- Here's the example again: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE;`
- You added the last column with: `ALTER TABLE second_table ADD COLUMN first_column INT;`
- Try entering `ALTER TABLE second_table ADD COLUMN id INT;`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 180. View `second_table` Details

### 180.1

Your table should have an `id` column added. View the details of `second_table` to make sure.

#### HINTS

- Use the **d**isplay command
- Add a table name after the **d**isplay command to view details
- Here's an example: `\d table_name`
- Try entering `\d second_table`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 190. Add `age` Column

### 190.1

The table has two columns now. Add another column to `second_table` named `age`. Give it a data type of `INT`.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- Here's the example again: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE;`
- You added the last column with: `ALTER TABLE second_table ADD COLUMN id INT;`
- Try using `ALTER TABLE second_table ADD COLUMN age INT;`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 200. View `second_table` Details

### 200.1

Take look at the details of `second_table` again.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the shortcut command to see details
- Here's an example: `\d table_name`
- Enter `\d second_table`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 210. Drop `age` Column

### 210.1

Look at all those columns. You will probably need to know how to remove them at some point. You can use `DROP COLUMN` instead of `ADD COLUMN` to do it. Here's an example:

```sql
ALTER TABLE table_name DROP COLUMN column_name;
```

Drop your `age` column.

#### HINTS

- Try entering `ALTER TABLE second_table DROP COLUMN age;`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 220. View `second_table` Details

### 220.1

View the details of `second_table` to see if it's gone.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the shortcut command to see details
- Here's an example: `\d table_name`
- Enter `\d second_table`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 230. Drop `first_column` Column

### 230.1

It's gone. Use the `ALTER TABLE` and `DROP COLUMN` keywords again to drop `first_column`.

#### HINTS

- Here's the example again: `ALTER TABLE table_name DROP COLUMN column_name;`
- You dropped the last column with: `ALTER TABLE second_table DROP COLUMN age;`
- Try entering `ALTER TABLE second_table DROP COLUMN first_column;`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 240. Add `name` Column

### 240.1

A common data type is `VARCHAR`. It is just a short string of characters. You need to give it a maximum length when using it like this: `VARCHAR(20)`.

Add a new column to `second_table`, give it a name of `name` and a data type of `VARCHAR(30)`.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE;`
- You added the last column like this: `ALTER TABLE second_table ADD COLUMN age INT;`
- Try entering `ALTER TABLE second_table ADD COLUMN name VARCHAR(30);`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 250. View `second_table` Details

### 250.1

Take look at the details of `second_table` to see all your columns.

#### HINTS

- Use the **d**isplay shortcut command
- Here's an example: `\d table_name`
- Try entering `\d second_table`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 260. Rename `name` Column

### 260.1

You can see the `VARCHAR` type there. You named that column `name`, I wanted it to be `username`. You can use the `RENAME COLUMN` and `TO` keywords to change it. Here's an example:

```sql
ALTER TABLE table_name RENAME COLUMN column_name TO new_name;
```

Rename the `name` column to `username`.

#### HINTS

- Use `second_table` as the table name, `name` as the column name, and `username` as the new name for the column
- Try entering `ALTER TABLE second_table RENAME COLUMN name TO username;`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 270. View `second_table` Details

### 270.1

Take look at the details of `second_table` again to see if it got renamed.

#### HINTS

- Use the **d**isplay shortcut command
- Here's an example: `\d table_name`
- Enter `\d second_table`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

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
- If you missed a matching single quote, try entering `');` to finish the command
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 290. View `second_table` Data

### 290.1

You should have one row in your table. How can you see it? Introducing, the `SELECT` statement. Here's how it looks:

```sql
SELECT columns FROM table_name;
```

Use a `SELECT` statement to view **all** the columns in `second_table`. Use an asterisk (`*`) to denote that you want to see all the columns.

#### HINTS

- Replace `columns` in the example with the all(`*`) symbol
- Don't forget the semi-colon
- Enter `SELECT * FROM second_table;`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 300. Insert Mario Row

### 300.1

**Insert** another row **into** `second_table`. Fill in the `id` and `username` columns with the **values** `2` and `'Mario'`.

#### HINTS

- Here's an example: `INSERT INTO table_name(column_1, column_2) VALUES(value1, value2);`
- Did you make `Mario` a string?
- Don't forget the semi-colon
- If you missed a matching single quote, try entering `');` to finish the command
- You added the last row with `INSERT INTO second_table(id, username) VALUES(1, 'Samus');`
- Try entering `INSERT INTO second_table(id, username) VALUES(2, 'Mario');`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 310. View `second_table` Data

### 310.1

You should now have two rows in the table. Use `SELECT` again to view **all** the columns and rows **from** `second_table`.

#### HINTS

- Here's the example: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try entering `SELECT * FROM second_table;`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 320. Insert Luigi Row

### 320.1

**Insert** another row **into** `second_table`. Use `3` as the `id`, and `Luigi` as the `username` this time.

#### HINTS
 
- Did you put `Luigi` in single quotes?
- Here's the example: `INSERT INTO table_name(column_1, column_2) VALUES(value1, value2);`
- If you missed a matching single quote, try entering `');` to finish the command
- You added the last row with `INSERT INTO second_table(id, username) VALUES(2, 'Mario');`
- Try entering `INSERT INTO second_table(id, username) VALUES(3, 'Luigi');`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 330. View `second_table` Data

### 330.1

You should now have three rows. Use `SELECT` again to see **all** the data you entered.

#### HINTS

- Here's the example again: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try entering `SELECT * FROM second_table;`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 340. Delete Luigi Row

### 340.1

That gives me an idea :smiley: You can help me make a database of characters from the Mario video games. That sounds like fun. It's best to start from scratch for this. Why don't you delete the record you just entered. Here's an example of how to delete a row:

```sql
DELETE FROM table_name WHERE condition;
```

Remove Luigi from your table. The condition you want to use is `username='Luigi'`.

#### HINTS

- Check your table name and condition closely
- Try entering `DELETE FROM second_table WHERE username='Luigi';`
- If you missed a matching single quote, try entering `');` to finish the command
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 350. View `second_table` Data

### 350.1

Luigi should be gone. Use `SELECT` again to see all the data and make sure he's not there.

#### HINTS

- Here's the example: `SELECT columns FROM table_name;`
- Use `*` to see all the columns
- Try `SELECT * FROM second_table;`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 360. Delete Mario Row

### 360.1

Yea, I really want to start from scratch for the Mario database so you can **delete** Mario **from** `second_table`. Use the same command as before, except make the **where** condition `username='Mario'` this time.

#### HINTS

- Use the `DELETE FROM` and `WHERE` keywords
- Here's the example: `DELETE FROM table_name WHERE condition;`
- You deleted Luigi with `DELETE FROM second_table WHERE username='Luigi';`
- Try entering `DELETE FROM second_table WHERE username='Mario';`
- If you missed a matching single quote, try entering `');` to finish the command
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 370. Delete Samus Row

### 370.1

Only one more row should remain. **Delete** Samus **from** `second_table`.

#### HINTS

- Here's the example: `DELETE FROM table_name WHERE condition;`
- You deleted Mario with `DELETE FROM second_table WHERE username='Mario';`
- Use `username='Samus'` as the condition
- Try entering `DELETE FROM second_table WHERE username='Samus';`
- If you missed a matching single quote, try entering `');` to finish the command
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 380. View `second_table` Data

### 380.1

Use `SELECT` to verify that **all** the rows in `second_table` are gone.

#### HINTS
 
- Here's the example `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Enter `SELECT * FROM second_table;`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 390. View `second_table` Details

### 390.1

Looks like they're all gone. Remind me what columns you have in `second_table` by looking at its **d**etails.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name after the shortcut command
- Here's an example: `\d table_name`
- Try `\d second_table`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 400. Drop `username` Column

### 400.1

You won't need any of these for the Mario database. **Drop** the `username` **column** from `second_table`.

#### HINTS

- Use the `ALTER TABLE` and `DROP COLUMN` keywords
- Don't forget the semi-colon
- Here's an example: `ALTER TABLE table_name DROP COLUMN column_name;`
- You dropped a column before with  `ALTER TABLE second_table DROP COLUMN age;`
- Try `ALTER TABLE second_table DROP COLUMN username;`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 410. Drop `id` Column

### 410.1

Next, drop the `id` column.

#### HINTS

- Keywords used are `ALTER TABLE` and `DROP COLUMN`
- Here's an example: `ALTER TABLE table_name DROP COLUMN column_name;`
- You previously dropped a column with `ALTER TABLE second_table DROP COLUMN username;`
- Try `ALTER TABLE second_table DROP COLUMN id;`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 420. View `second_database` Tables

### 420.1

Okay, the table has no rows or columns left. Remind me what tables are in this database by displaying them.

#### HINTS

- Use the **d**isplay shortcut command
- You don't need a table name with the command
- Try entering `\d`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 430. Drop `second_table`

### 430.1

You won't need any of these tables for the Mario database either. Drop `second_table` with the `DROP TABLE` command.

#### HINTS
 
- Here's an example: `DROP TABLE table_name;`
- Try `DROP TABLE second_table;`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 440. Drop `first_table`

### 440.1

Next, drop `first_table`.

#### HINTS

- Here's an example: `DROP TABLE table_name;`
- Enter `DROP TABLE first_table;`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 450. View Databases

### 450.1

All the tables are gone now, too. Remind me what databases you have by using the command to **l**ist them.

#### HINTS

- Use the **l**ist shortcut command
- Enter `\l`
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 460. Try Dropping `second_database`

### 460.1

It looks like you still have the two there that you created. Use the `DROP DATABASE` keywords to delete `second_database`. I don't think it will work.

#### HINTS

- Here's an example: `DROP DATABASE database_name;`
- Enter `DROP DATABASE second_database;`
- If you aren't connected to `second_database`, type `\c second_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 470. Connect to `first_database`

### 470.1

Nope, didn't work. It says you cannot drop the currently open database. Use the **c**onnect shortcut command to connect to `first_database`.

#### HINTS
 
- Use the `\c` command to connect to a database
- Add the database name after the command
- Here's an example: `\c database_name`
- Enter `\c first_database`
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 480. Drop `second_database`

### 480.1

Now that you aren't connected to `second_database`, try to drop it again.

#### HINTS

- Use the `DROP DATABASE` keywords
- Here's an example: `DROP DATABASE database_name;`
- Enter `DROP DATABASE second_database;`
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 490. Try Renaming `first_database`

### 490.1

Okay, your finally ready to start creating the Mario database. Instead of dropping `first_database`, you can just rename it. Use the `ALTER DATABASE` and `RENAME TO` keywords to rename `first_database` to `mario_database`. Be sure to put the groups of words in the right order. Hopefully it works.

#### HINTS

- Here's an example: `ALTER DATABASE database_name RENAME TO newname;`
- Try entering `ALTER DATABASE first_database RENAME TO mario_database;`
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in first

## 500. Connect to `postgres`

### 500.1

Now what? Cannot drop currently opened database. :triumph: I remember starting on a database named `postgres`. Connect to that one quick so you can rename this one.

#### HINTS

- Use the **c**onnect shortcut command
- Here's an example: `\c database_name`
- Try `\c postgres`
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in first

## 510. Rename `first_database`

### 510.1

Now you should be able to rename `first_database` to `mario_database`. Hopefully it works this time. Give it a try. As a reminder, you use the `ALTER DATABASE` and `RENAME TO` keywords.

#### HINTS

- Here's an example: `ALTER DATABASE database_name RENAME TO newdatabase_name;`
- Try entering `ALTER DATABASE first_database RENAME TO mario_database;`
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in first

## 520. Connect to `mario_database`

### 520.1

Yay! :smiley: Now that it has the right name, you can connect back to that one and start. Do that now.

#### HINTS

- Use the **c**onnect shortcut command
- Here's an example: `\c database_name`
- Try entering `\c mario_database`
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in first

## 530. Display `mario_database` Tables

### 530.1

I don't think you created any tables here, take a look to make sure.

#### HINTS

- Use the **d**isplay shortcut command
- Try entering `\d`
- Try entering `\c mario_database`
- If you aren't connected to `mario_database`, type `\c mario_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 540. Create `characters` Table

### 540.1

No tables. You have a clean slate now. Create a new table name `characters`, it will hold some basic information about Mario characters.

#### HINTS

- Use the `CREATE TABLE` keywords
- Here's an example: `CREAT TABLE table_name();`
- Try entering `CREATE TABLE characters();`
- If you aren't connected to `mario_database`, type `\c mario_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 550. Create `characters` Table

### 550.1

No tables. You have a clean slate now. Create a new table name `characters`, it will hold some basic information about Mario characters.

#### HINTS

- Use the `CREATE TABLE` keywords
- Here's an example: `CREAT TABLE table_name();`
- Try entering `CREATE TABLE characters();`
- If you aren't connected to `mario_database`, type `\c mario_database` into the prompt first
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in before that

## 560. View `characters` Details

### 560.1

Constraints are additional features of a column. `NOT NULL` means the data entered cannot be null.

View the details of `characters` to see the additional properties the `SERIAL` type gave your column.

#### HINTS

- Use the **d**isplay shortcut command
- Here's an example: `\d table_name`
- Try entering `\d characters`

## 570. Add `name` Column

### 570.1

What columns can you add to describe Mario characters? They all have a name... I think anyway :confused:

Add a column to `characters` called `name`. Give it a data type of `VARCHAR(30)`, and a constraint of `NOT NULL`. Add a constraint by putting it right after the data type.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE CONSTRAINTS;`
- Try entering `ALTER TABLE characters ADD COLUMN name VARCHAR(30) NOT NULL;`

## 580. Add `homeland` Column

### 580.1

Video game characters are usually from fantasy worlds. You can make a column for that. Add another column to `characters` named `homeland`. Give it a data type of `VARCHAR` that has a max length of `60`.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE;`
- Try entering `ALTER TABLE characters ADD COLUMN homeland VARCHAR(60);`

## 590. Add `favorite_color` Column

### 590.1

Video game characters are quite colorful. Add one more column named `favorite_color`. Make it a `VARCHAR` with a max length of `30`.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE;`
- Try entering `ALTER TABLE characters ADD COLUMN favorite_color VARCHAR(30);`

## 600. View `characters` Details

### 600.1

You should have four columns in `characters`. Take a look at the details of it to see how things are going.

#### HINTS

- Use the **d**isplay shortcut command
- Add a table name to the shortcut command to see details
- Here's an example: `\d table_name`
- Try entering `\d characters`

## 610. Insert Mario Row

### 610.1

You are ready to start adding some rows. First is Mario. Earlier, you used this command to add a row:

```sql
INSERT INTO second_table(id, username) VALUES(1, 'Samus');
```

The first parenthesis are the column names, you can put as many columns as you want. The second parenthesis are values for those columns. Add a row to your table, give it a `name` of `Mario`, a `homeland` of `Mushroom Kingdom`, and a `favorite_color` of `Red`. Make sure to use single quotes where needed.

#### HINTS

- Here's an example: `INSERT INTO table_name(column1, column2, column3) VALUES(value1, value2, value3);`
- Try using `INSERT INTO characters(name, homeland, favorite_color) VALUES('Mario', 'Mushroom Kingdom', 'Red');`
- If you missed a matching single quote, try entering `');` to finish the command

## 620. View `characters` Data

### 620.1

Mario should have a row now and his `character_id` should have been automatically added. View **all** the data in your `characters` table with `SELECT` to see.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try entering `SELECT * FROM characters;`

## 630. Insert Luigi Row

### 630.1

You can see the `character_id` was added automatically. Add another row for Luigi. Give it a `name` of `Luigi`, a `homeland` of `Mushroom Kingdom`, and a `favorite_color` of `Green`.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column1, column2, column3) VALUES(value1, value2, value3);`
- Don't forget the quotes and semi-colon
- Try using `INSERT INTO characters(name, homeland, favorite_color) VALUES('Luigi', 'Mushroom Kingdom', 'Green');`
- If you missed a matching single quote, try entering `');` to finish the command

## 640. View `characters` Data

### 640.1

View all the data in your `characters` table with `SELECT` again.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try entering `SELECT * FROM characters;`

## 650. Insert Peach Row

### 650.1

Okay, it looks like it's all working. Add another row for Peach. Give her the values: `Peach`, `Mushroom Kingdom`, and `Pink`.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column1, column2, column3) VALUES(value1, value2, value3);`
- Don't forget the quotes and semi-colon
- Try using `INSERT INTO characters(name, homeland, favorite_color) VALUES('Peach', 'Mushroom Kingdom', 'Pink');`
- If you missed a matching single quote, try entering `');` to finish the command

## 660. Add Toadstool and Bowser Rows

### 660.1

Adding rows one at a time is quite tedious. You can add many rows with one command by adding a comma and another group of parenthesis with more values. Here's an example of how you could have added the previous three rows at once:

```sql
INSERT INTO characters(name, homeland, favorite_color) VALUES('Mario', 'Mushroom Kingdom', 'Red'), ('Luigi', 'Mushroom Kingdom', 'Green'), ('Peach', 'Mushroom Kingdom', 'Pink');
```

Add two rows at once. Give the first one values of: `Toadstool`, `Mushroom Kingdom`, and `Red`. Give the second one: `Bowser`, `Mushroom Kingdom`, and `Green`.

#### HINTS

- Make sure you added commas and quotes where needed
- Try entering `INSERT INTO characters(name, homeland, favorite_color) VALUE('Toadstool', 'Mushroom Kingdom', 'Red'), ('Bowser', 'Mushroom Kingdom', 'Green');`
- If you missed a matching single quote, try entering `');` to finish the command

## 670. Add Yoshi and Daisy Rows

### 670.1

Hmm, "INSERT 0 2". That `2` must mean you added two rows. I mentioned earlier that if you don't get a message after a command, it is incomplete. This is because you can put a command on multiple lines. Here's an example:

```sql
INSERT INTO characters(name, homeland, favorite_color) VALUES
('Toadstool', 'Mushroom Kingdom', 'Red'), 
('Bowser', 'Mushroom Kingdom', 'Green');
```

That's much easier to read :sunglasses:. Add two more rows. Give the first one values of: `Daisy`, `Sarasaland`, and `Yellow`. The second: `Yoshi`, `Dinosaur Land`, and `Green`. Try to do it with one command.

#### HINTS

- Don't forget the semi-colon
- Make sure you added commas and quotes where needed
- You previously used `INSERT INTO characters(name, homeland, favorite_color) VALUES('Toadstool', 'Mushroom Kingdom', 'Red'), ('Bowser', 'Mushroom Kingdom', 'Green');`
- Try entering `INSERT INTO characters(name, homeland, favorite_color) VALUES('Daisy', 'Sarasaland', 'Yellow'), ('Yoshi', 'Dinosaur Land', 'Green');`
- If you missed a matching single quote, try entering `');` to finish the command

## 680. View `characters` Data

### 680.1

Take a look all the data in your table with `SELECT` to see where you stand.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try `SELECT * FROM characters;`

## 690. Update Daisy's `favorite_color`

### 690.1

I see several mistakes. I got the favorite color wrong for three characters, the name wrong for one, and the homeland wrong for one. You can use `UPDATE` with `SET` and `WHERE` to update rows. Here's an example:

```sql
UPDATE table_name SET column_name=newvalue WHERE condition;
```

You used `username='Samus'` as a condition ealier. `SET` Daisy's `favorite_color` to `Orange` by using the condition `name='Daisy'`.

#### HINTS

- There should be two sets of single quotes in this command
- Without the keywords, it looks like this: `characters favorite_color='Orange' name='Daisy';`
- Try `UPDATE characters SET favorite_color='Orange' WHERE name='Daisy';`

## 700. View `characters` Data

### 700.1

The command you just used does exactly what it sounds like. It finds the row where `name` is `Daisy`, and sets her `favorite_color` to `Orange`.

Take a look all the data in your table again to see if she got updated.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try `SELECT * FROM characters;`

## 710. Update Toadstool's `name`

### 710.1

Yes, it changed to Orange. I got Toadstool's name wrong as well, it's actually Toad. Use `UPDATE` to `SET` his `name` to `Toad` where `favorite_color='Red'`.

#### HINTS

- Here's an example: `UPDATE table_name SET column_name=newvalue WHERE condition;`
- Here's the second part of the command: `SET name='Toad' WHERE favorite_color='red'`
- Try entering `UPDATE characters SET name='Toad' WHERE favorite_color='red'`

## 720. View `characters` Data

### 720.1

UPDATE 2?! :open_mouth: What happened. Take a look all the data in your table to find out.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try `SELECT * FROM characters;`

## 730. Update Mario's `name`

### 730.1

I see, using `favorite_color='Red'` was not a good idea. Mario's name changed to Toad because he likes red, and now there's two rows that are the same. Well, almost. Only the `character_id` is different. You will have to use that to change it back to `Mario`. Use `UPDATE` to set the `name` to `Mario` for the row where `character_id=1`.

#### HINTS

- Don't forget the table name in there
- Use the `UPDATE`, `SET`, and `WHERE` keywords and strings where needed
- Here's an example: `UPDATE table_name SET column_name=newvalue WHERE condition;`
- Try entering `UPDATE characters SET name='Mario' WHERE character_id=1;`

## 740. View `characters` Data

### 740.1

Take a look all the data in your table again to see if Mario's name got changed back.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try `SELECT * FROM characters;`

## 750. Update Toad's `favorite_color`

### 750.1

Looks like it worked. I got Toad's favorite color wrong, too. He likes blue. Change Toad's favorite color to `Blue`. Use whatever condition you want, but don't change any of the other rows.

#### HINTS

- Use the `UPDATE`, `SET`, and `WHERE` keywords
- Here's an example: `UPDATE table_name SET column_name=newvalue WHERE condition;`
- I recommend using `character_id=4` as the condition
- Try entering `UPDATE characters SET favorite_color='Blue' WHERE character_id=4;`

## 760. Update Bowser's `favorite_color`

### 760.1

Bowser's `favorite_color` is wrong too. He likes `Yellow`. Why don't you update it without changing any of the other rows.

#### HINTS

- Use the `UPDATE`, `SET`, and `WHERE` keywords
- Here's an example: `UPDATE table_name SET column_name=newvalue WHERE condition;`
- I recommand using `character_id=5` as the condition
- Try entering `UPDATE characters SET favorite_color='yellow' WHERE character_id=5;`

## 770. Update Bowser's `homeland`

### 770.1

Bowser's `homeland` is wrong as well. He's from the `Koopa Kingdom`. Why don't you change it to that without changing any other rows.

#### HINTS

- Use the `UPDATE`, `SET`, and `WHERE` keywords
- Here's an example: `UPDATE table_name SET column_name=newvalue WHERE condition;`
- I recommand using `character_id=5` as the condition
- Try entering `UPDATE characters SET favorite_color='yellow' WHERE character_id=5;`

## 780. View `characters` Data

### 780.1

Take a look all the data in your table again so I can make sure there's no more issues.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example; `SELECT rows FROM table_name;`
- Try entering `SELECT * FROM characters;`

## 790. View Sorted `characters` Data

### 790.1

Umm, actually can you put that in order for me? Here's an example:

```sql
SELECT columns FROM table_name ORDER BY column_name;
```

View all the data again, but put it in order by `character_id`.

#### HINTS

- Try entering `SELECT * FROM characters ORDER BY character_id;`

## 800. Add `name` Primary Key

### 800.1

It looks good. Next, you are going to add a **primary key**. It is a column that uniquely identifies each row and can be used to relate tables to each other. Here's an example of how to set a `PRIMARY KEY`:

```sql
ALTER TABLE table_name ADD PRIMARY KEY(column_name);
```

The `name` column is pretty unique, why don't you set that as the primary key for this table.

#### HINTS

- You don't need quotes, but you do need a semi-colon :smile:
- Try entering `ALTER TABLE characters ADD PRIMARY KEY(name);`

## 810. View `characters` Details

### 810.1

You should set a primary key on every table and there can only be one per table.

Take a look at the details of your `characters` table to see the primary key at the bottom.

#### HINTS

- Use the **d**isplay shortcut command
- Here's an example: `\d table_name`
- Try entering `\d characters`

## 820. Drop `name` Primary Key

### 820.1

It's possible a character comes along with the same name as an existing character. I think it would have been better to use `character_id` for the primary key. Here's an example of how to drop a constraint:

```sql
ALTER TABLE table_name DROP CONSTRAINT constraint_name;
```

Drop the primary key on the `name` column. You can see the **constraint name** is `characters_pkey`.

#### HINTS

- Try using `ALTER TABLE characters DROP CONSTRAIN characters_pkey;`

## 830. View `character` Details

### 830.1

View the details of the `characters` table to make sure it's gone.

#### HINTS

- Use the **d**isplay shortcut command
- Here's an example: `\d table_name`
- Try entering `\d characters`

## 840. Add `character_id` Primary Key

### 840.1

I still see the `NOT NULL` that was added when you set the primary key. It's fine to leave that, since you don't want a row without a name.

Set the primary key again, but use the `character_id` column this time.

#### HINTS

- Here's the example: `ALTER TABLE table_name ADD PRIMARY KEY(column_name);`
- Try entering `ALTER TABLE characters ADD PRIMARY KEY(character_id);`

## 850. View `character` Details

### 850.1

View the details of the `characters` table to see the new primary key.

#### HINTS

- Use the **d**isplay shortcut command
- Here's an example: `\d table_name`
- Try entering `\d characters`

## 860. Create `more_info` Table

### 860.1

I think that table is complete for now. Next, you will make a `more_info` table that has some extra info about the characters. As a reminder, here's how you created the `characters` table:

```sql
CREATE TABLE characters();
```

Create a new table in your `mario_database` named `more_info`.

#### HINTS

- Try entering `CREATE TABLE more_info();`

## 870. View `mario_database` Tables

### 870.1

View the tables in `mario_database` again with the **d**isplay command. You should have two tables now.

#### HINTS

- Enter the `\d` command

## 880. View `characters` Details

### 880.1

Hmm, I wonder what that third one is. It says "characters_character_id_seq". Ahh, I think I have a clue. View the details of the `characters` table.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name after the command
- You previously used `\d second_table`
- Enter `\d characters`

## 890. Create `more_info_id` Column

### 890.1

Yes, I think that is what finds the next value for the `character_id` column. Moving along...

You usually want to create the primary key right away. You previously added a column like this:

```sql
ALTER TABLE characters ADD COLUMN character_id SERIAL;
```

Add a column to `more_info` named `more_info_id`. Give it a type of `SERIAL`, and make it the `PRIMARY KEY`. You can set the primary key constraint right away if you just add it after `SERIAL`.

#### HINTS

- Separate `SERIAL` and `PRIMARY KEY` constraints with a space
- Try entering `ALTER TABLE more_info ADD COLUMN more_info_id SERIAL PRIMARY KEY;`

## 900. View `mario_database` Tables

### 900.1

View the tables in `mario_database` again with the **d**isplay command. If my theory is correct, there should be another sequence there for the `more_info_id`.

#### HINTS

- Enter the `\d` command

## 910. Add `birthday` Column 

### 910.1

Yup, there it is. Add another column to `more_info` named `birthday`. Give it a data type of `DATE`.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE;`
- Try entering `ALTER TABLE more_info ADD COLUMN birthday DATE;`

## 920. Add `height` Column

### 920.1

Add a `height` column to `more_info`. Give it type of `SMALLINT`. `SMALLINT` is just an integer that uses less space.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE;`
- Try entering `ALTER TABLE more_info ADD COLUMN height SMALLINT;`

## 930. Add `weight` Columns

### 930.1

Add a `weight` column. Give it a type of `NUMERIC(4, 1)`.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE;`
- Try entering `ALTER TABLE more_info ADD COLUMN weight NUMERIC(4, 1);`

## 940. View `more_info` Details

### 940.1

The `NUMERIC` type is for decimals. `NUMERIC(4, 1)` has up to four digits and one of them has to be right of the decimal.

Take a look at the details of `more_info` to see all your columns.

#### HINTS

- Use the **d**isplay shortcut command
- Here's an example: `\d table_name`
- Try entering `\d more_info`

## 950. Add `character_id` Foreign Key

### 950.1

How would you know what character a row here is for since there's no name? You need to set a **foreign key** so you can relate rows from this table to rows from your `characters` table. A foreign key needs to **reference** a primary key from a different table. Here's an example that creates a column as a foreign key:

```sql
ALTER TABLE table_name ADD COLUMN column_name DATATYPE REFERENCES referenced_table_name(referenced_column_name);
```

That's quite the command. Create a `character_id` column in `more_info`. Make it an `INT` and a foreign key that references the `character_id` column from the `characters` table. Good luck.

#### HINTS

- You can do this!
- Give it one more try, take a close look at all those values and keywords
- Without the keywords, it looks like this: `more_info character_id characters(character_id);`
- Don't forget the data type
- Try this `ALTER TABLE more_info ADD COLUMN character_id INT REFERENCES characters(character_id);`

## 960. View `more_info` Details

### 960.1

The values of your foreign key column will match the values of the primary key column it is referencing. To set a row in `more_info` for Mario, you just need to set the `character_id` value as `1`, since that's what his `character_id` is in `characters`.

Take a look at the details of `more_info` to see your foreign key.

#### HINTS

- Use the **d**isplay shortcut command
- Here's an example: `\d table_name`
- Try entering `\d more_info`

## 970. Add `UNIQUE`

### 970.1

I want your tables to have a "one-to-one" relationship. **One** row in the `characters` table will be related to exactly **one** row in `more_info` and vice versa. I want to help enforce that by adding the `UNIQUE` constraint to your foreign key. Here's an example:

```sql
ALTER TABLE table_name ADD UNIQUE(column_name);
```

Add the `UNIQUE` constraint to the column you just added.

#### HINTS

- It's the `character_id` column in `more_info`
- Try `ALTER TABLE more_info ADD UNIQUE(character_id);`

## 980. Add `NOT NULL`

### 980.1

The column should also be `NOT NULL` since you don't want to have a row that is for nobody. Here's an example:

```sql
ALTER TABLE table_name ALTER COLUMN column_name SET NOT NULL;
```

Add the `NOT NULL` constraint to your foreign key column.

#### HINTS
 
- The foreign key column is `character_id`
- Try `ALTER TABLE more_info ALTER COLUMN character_id SET NOT NULL;`

## 990. View `more_info` Details

### 990.1

Take a look at the details of your `more_info` table to see all the keys and constraints you added.

#### HINTS

- Use the **d**isplay shortcut command
- Here's an example: `\d table_name`
- Try entering `\d more_info`

## 1000. Select `character_id`

### 1000.1

I think the structure is set, now you can add some rows. First, you need to know what `character_id` you need for the foreign key column. You have viewed all columns in a table with `*`. What if you only want some of them? You can pick columns by putting in the name instead of `*`. Use `SELECT` to view the `character_id` column **from** the `characters` table.

#### HINTS

- Here's an example: `SELECT column FROM table_name;`
- Try `SELECT character_id FROM characters;`

## 1010. Select `character_id` and `name`

### 1010.1

That list of numbers doesn't really help. Use `SELECT` again to display both the `character_id` and `name` columns from the `characters` table. You can separate the column names with a comma to view both.

#### HINTS

- Here's an example: `SELECT column1, column2 FROM table_name;`
- Try entering `SELECT character_id, name FROM characters;`

## 1020. Add `more_info` for Mario

### 1020.1

That's better. You can see Mario's id there. Here's some more info for him:

| birthday   | height | weight | character_id |
| ---------- | ------ | ------ | ------------ |
| 1981-07-09 | 155    | 64.5   | 1            |

Add a row with the above info for Mario using the `INSERT INTO` and `VALUES` keywords. You should know that `DATE` values need a string with the format: `'YYYY-MM-DD'`.

#### HINTS
 
- Here's an example: `INSERT INTO table_name(columns) VALUE(values);`
- You previously used `INSERT INTO characters(name, homeland, favorite_color) VALUES('Luigi', 'Mushroom Kingdom', 'Green');`
- Try `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1981-07-09', 155, 64.5, 1);`

## 1030. View `more_info` Data

### 1030.1

View all the data in `more_info` to make sure it's looking good.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try entering `SELECT * FROM more_info;`

## 1040. Select `character_id` and `name`

### 1040.1

Next, you are going to add some info for Luigi. Use `SELECT` again to view the `character_id` and `name` columns **from** the `characters` table to find his id.

#### HINTS

- Here's an example: `SELECT column1, column2 FROM table_name;`
- Try entering `SELECT character_id, name FROM characters;`

## 1050. Add `more_info` for Luigi

### 1050.1

You can see Luigi's id there. Here's his info:

| birthday   | height | weight |
| ---------- | ------ | ------ |
| 1983-07-14 | 175    | 48.8   |

Add a row for Luigi using the above info. Be sure to add his `character_id` as well.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Be sure to put `DATE` values in quotes with the format: `'YYYY-MM-DD'`
- You previously used `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1981-07-09', 155, 64.5, 1);`
- Luigi's `character_id` is `2`
- Try `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1983-07-14', 175, 48.8, 2);`

## 1060. View `more_info` Data

### 1060.1

View all the data in `more_info` to see more info for Luigi.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try entering `SELECT * FROM more_info;`

## 1070. Select `character_id` and `name`

### 1070.1

Peach is next. View the `character_id` and `name` columns from the `characters` table again so you can find out her id.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT column1, column2 FROM table_name;`
- Try entering `SELECT character_id, name FROM characters;`

## 1080. Add `more_info` for Peach

### 1080.1

Here's the additional info for Peach:

| birthday   | height | weight |
| ---------- | ------ | ------ |
| 1985-10-18 | 173    | 52.2   |

Add a row for Peach using the above info. Be sure to add her `character_id` as well.

#### HINTS

- Her `character_id` is `3`
- Be sure to put `DATE` values in quotes with the format: `'YYYY-MM-DD'`
- You previously used `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1983-07-14', 175, 48.8, 2);`
- Try `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1983-07-14', 173, 52.2, 3);`

## 1090. Select Toad's `character_id` and `name`

### 1090.1

Toad is next. Instead of viewing all the rows to find his id, you can just view his row with a `WHERE` condition. You used several earlier to delete and update rows, you can use it to view rows as well. Here's an example:

```sql
SELECT columns FROM table_name WHERE condition;
```

A condition you used before was `username='Samus'`. Find Toad's id by viewing the `character_id` and `name` columns from `characters` where `name='Toad'`. 

#### HINTS

- Don't forget the semi-colon :smile:
- Try entering `SELECT character_id, name FROM characters WHERE name='Toad';`

## 1100. Add `more_info` for Toad

### 1100.1

Here's what Toad's info looks like:

| birthday   | height | weight |
| ---------- | ------ | ------ |
| 1950-01-10 | 66     | 35.6   |

Add the above info for Toad. Be sure to add his `character_id`.

#### HINTS

- Put `DATE` values in quotes
- You previously used `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1985-10-18', 173, 52.2, 3);`
- Toad's `character_id` is `4`
- Try `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1950-01-10', 66, 35.6, 4);`

## 1110. View `more_info` Data

### 1110.1

View all the data in `more_info` to see the rows you added.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try entering `SELECT * FROM more_info;`

## 1120. Select Bowser's Row

### 1120.1

Bowser is next. Find his id by viewing his row in the `characters` table. You can view whatever columns you want as long as you include the id column, but only view his row.

#### HINTS

- Use the `SELECT`, `FROM`, and `WHERE` keywords
- Here's an example: `SELECT columns FROM table_name WHERE condition;`
- I recommend `name='Bowser'` as the condition
- Try entering `SELECT * FROM characters WHERE name='Bowser';`

## 1130. Add `more_info` for Bowser

### 1130.1

Here's what Bowser's info looks like:

| birthday   | height | weight |
| ---------- | ------ | ------ |
| 1990-10-29 | 258    | 300    |

Add the above info for Bowser. Don't forget to add his `character_id`.

#### HINTS

- Be sure to put `DATE` values in quotes with the format: `'YYYY-MM-DD'`
- You previously used `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1950-01-10', 66, 35.6, 4);`
- Bowser's `character_id` is `5`
- Try `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1990-10-29', 173, 300, 5);`

## 1140. Select Daisy's Row

### 1140.1

Daisy is next. Find her id by viewing **all** the columns in **only Daisy's row** of the `characters` table.

#### HINTS

- Use the `SELECT`, `FROM`, and `WHERE` keywords
- View **all** the columns this time
- Here's an example: `SELECT columns FROM table_name WHERE condition;`
- Use `name='Daisy'` as the condition
- Try entering `SELECT * FROM characters WHERE name='Daisy';`

## 1150. Add `more_info` for Daisy

### 1150.1

The info for Daisy looks like this:

| birthday   | height | weight |
| ---------- | ------ | ------ |
| 1989-07-31 | NULL   | NULL   |

Add the above info for Daisy to `more_info`. Be sure to add her `character_id` as well, and note that `NULL` values don't need quotes.

#### HINTS

- You previously used `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1990-10-29', 173, 300, 5);`
- Daisy's `character_id` is `6`
- Try `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1989-07-31', NULL, NULL, 6);`

## 1160. View `more_info` Data

### 1160.1

View all the data in `more_info` to see the rows you added.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try entering `SELECT * FROM more_info;`

## 1170. Select Yoshi's `character_id` and `name`

### 1170.1

I guess null values just show up as blank in the database. Yoshi is last. View only the `character_id` column from `characters` for only Yoshi's row to find his id.

#### HINTS

- Use the `SELECT`, `FROM` and `WHERE` keywords
- Here's an example: `SELECT columns FROM table_name WHERE condition;`
- You saw all Daisy's columns with `SELECT * FROM characters WHERE name='Daisy';`
- Only view the `character_id` column
- Try entering `SELECT character_id FROM characters WHERE name='Yoshi';`

## 1180. Add `more_info` for Yoshi

### 1180.1

The info for Yoshi looks like this:

| birthday   | height | weight |
| ---------- | ------ | ------ |
| 1990-04-13 | 162    | 59.1   |

Add the above info for Yoshi to `more_info`. Be sure to include his `character_id`.

#### HINTS

- You got this one!
- Yoshi's `character_id` is `7`
- You previously used `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1989-07-31', NULL, NULL, 6);`
- Try `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1990-04-13', 162, 59.1, 7);`

## 1190. View all `more_info` Data

### 1190.1

There should be a lot of data in `more_info` now. Take a look at **all** the rows and columns in it.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Try `SELECT * FROM more_info;`

## 1200. Rename `height` Column

### 1200.1

It looks good, I don't think there's any mistakes this time... Actually, I do see something. The `height` and `weight` columns; what units do they use? It's centimeters and kilograms, but nobody will know.

Rename the `height` column to `height_in_cm`.

#### HINTS

- Use the `ALTER TABLE`, `RENAME COLUMN` and `TO` keywords
- Here's an example: `ALTER TABLE table_name RENAME COLUMN column_name TO new_name;`
- Try `ALTER TABLE more_info RENAME COLUMN height TO height_in_cm;`

## 1210. Rename `weight` Column

### 1210.1

Rename the `weight` column to `weight_in_kg`.

#### HINTS

- Use the `ALTER TABLE`, `RENAME COLUMN` and `TO` keywords
- Here's an example: `ALTER TABLE table_name RENAME COLUMN column_name TO new_name;`
- Try `ALTER TABLE more_info RENAME COLUMN weight TO weight_in_kg;`

## 1230. View all `more_info` Data

### 1230.1

Take a quick look at all the data in `more_info` to see the new column names.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Try `SELECT * FROM more_info;`

## 1240. Create `sounds` Table

### 1240.1

Next, you will make a `sounds` table that holds filenames of sounds the characters make. You created your other tables similar to this:

```sql
CREATE TABLE table_name();
```

Inside those parenthesis you can put columns for a table so you don't need to add them with a separate command, like this:

```sql
CREATE TABLE table_name(column_name DATATYPE CONSTRAINTS);
```

Create a new table named `sounds`. Give it a column named `sound_id` of type `SERIAL` and a contraint of `PRIMARY KEY`.

#### HINTS

- Try entering `CREATE TABLE sounds(sound_id SERIAL PRIMARY KEY);`

## L1260 View `mario_database` Tables

### 1260.1

View the tables in `mario_database` to make sure it worked.

#### HINTS

- Use the **l**ist command
- Try entering `\l`

## 1270. Add `filename` Column

### 1270.1

There's your `sounds` table. Add a column to it named `filename`. Make it a `VARCHAR` that has a max length of `40` and with constraints of `NOT NULL` and `UNIQUE`.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- Give it three properties: `VARCHAR(40) NOT NULL UNIQUE`
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE CONSTRAINTS;`
- Try entering `ALTER TABLE sounds ADD COLUMN filename VARCHAR(40) NOT NULL UNIQUE;`

## 1280. Add `sounds` Foreign Key

### 1280.1

You want to use `character_id` as a foreign key again. This will be a "one-to-many" relationship because **one** character will have **many** sounds, but no sound will have have more than one character. Here's the example again:

```sql
ALTER TABLE table_name ADD COLUMN column_name DATATYPE CONSTRAINT REFERENCES referenced_table_name(referenced_column_name);
```

Add a column to `sounds` named `character_id`. Give it the properties `INT`, `NOT NULL`, and set it as a foreign key that references `character_id` from `characters`.

#### HINTS

- You can do this!
- Give it one more try, take a close look at all those values and keywords
- Without the keywords, it looks like this: `sounds character_id characters(character_id);`
- Try using `ALTER TABLE sounds ADD COLUMN character_id INT NOT NULL REFERENCES characters(character_id);`

## 1290. View `sounds ` Details

### 1290.1

Take a look at the details of the `sounds` table to see all the columns.

#### HINTS

- Use the **d**isplay shortcut command
- Here's an example: `\d table_name`
- Try entering `\d sounds`

## 1300. View `characters` Data

### 1300.1

Next you will add some rows. But first, view all the data in `characters` so you can find the correct id's again. **Order** them **by** `character_id` like you did earlier.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name ORDER BY column;`
- Use `*` to select all the columns
- Try entering `SELECT * FROM characters ORDER BY character_id;`

## 1310. Insert `its-a-me.wav`

### 1310.1

The first file is named `its-a-me.wav`. Insert it into the `sounds` table. Use that for the `filename` and Mario's id as the `character_id`.

#### HINTS

- Don't for get the quotes
- Use `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column_1, column_2) VALUE(value_1, value_2);`
- Try `INSERT INTO sounds(filename, character_id) VALUES('its-a-me.wav', 1);`

## 1320. Insert `yippee.wav`

### 1320.1

Add another row with a `filename` of `yipee.wav`. Use Mario's `character_id` again for the foreign key value.

#### HINTS

- His `character_id` is `1`
- Don't forget the quotes
- You previously used: `INSERT INTO sounds(filename, character_id) VALUES('its-a-me.wav', 1);`
- Try entering `INSERT INTO sounds(filename, character_id) VALUES('yipee.wav', 1);`

## 1330. Insert `ha-ha.wav`

### 1330.1

Add another row to `sounds` for Luigi named `ha-ha.wav`. Use his `character_id` this time. Take a look at the data in `characters` to find his id if you need to.

#### HINTS

- His `character_id` is `2`
- You previously used: `INSERT INTO sounds(filename, character_id) VALUES('its-a-me.wav', 1);`
- Try entering `INSERT INTO sounds(filename, character_id) VALUES('ha-ha.wav', 2);`

## 1340. Insert `oh-yeah.wav`

### 1340.1

Add another row with a filename of `oh-yeah.wav`. This one is for Luigi as well so use his `character_id` again.

#### HINTS

- His `character_id` is `2`
- Try `INSERT INTO sounds(filename, character_id) VALUES('oh-yeah.wav', 2);`

## 1350. Insert Sounds for Peach

### 1350.1

Add two more rows for Peach sounds. The filenames are `yay.wav` and `woo-hoo.wav`. Don't forget her `character_id`. Try to do it with one command.

#### HINTS

- Here's an example: `INSERT INTO table_name(column_1, column_2) VALUES(value_1, value_2), (value_1, value_2);`
- Find her `character_id` by viewing data in the `characters` table
- Her `character_id` is `3`
- Try `INSERT INTO sounds(filename, character_id) VALUES('yay.wav', 3), ('woo-hoo.wav', 3);`

## 1360. Insert Two More Sounds

### 1360.1

Add two more rows. The filenames are `mm-hmm.wav` and `yahoo.wav`. The first one is for Peach again, the second is for Mario, so use the correct foreign key values. Try to do it with one command.

#### HINTS

- Here's an example: `INSERT INTO table_name(column_1, column_2) VALUES(value_1, value_2), (value_1, value_2);`
- Find their `character_id` by viewing data in the `characters` table
- Peach's `character_id` is `3`, Mario is `1`
- Try `INSERT INTO sounds(filename, character_id) VALUES('mm-hmm.wav', 3), ('yahoo.wav', 1);`

## 1370. View `sounds` Data

### 1370.1

View all the data in the `sounds`. You should be able to see the "one-to-many" relationship better. One character has many sounds.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to select all the columns
- Try entering `SELECT * FROM characters;`

## 1380. Create `actions` Table

### 1380.1

The sounds are looking good I think. Create another new table called `actions`. It will have the chacters abilities. Give it a column named `action_id` that's a type of `SERIAL`, and make it the `PRIMARY KEY`. As a reminder, you can add a column right away by putting in the parenthesis of the command.

#### HINTS

- Use `CREATE TABLE`, `SERIAL`, and `PRIMARY KEY`
- You previously used `CREATE TABLE sounds(sound_id SERIAL PRIMARY KEY);`
- Try entering `CREATE TABLE actions(action_id SERIAL PRIMARY KEY);`

## 1390. Add `action` Column

### 1390.1

Add a column named `action` to your new table. Give it a type of `VARCHAR` that is a max length of `20` and has `UNIQUE` and `NOT NULL` constraints.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- You previously used `ALTER TABLE sounds ADD COLUMN filename VARCHAR(40) NOT NULL UNIQUE;`
- Try entering `ALTER TABLE actions ADD COLUMN action VARCHAR(20) UNIQUE NOT NULL;`

## 1400. Insert `run`

### 1400.1

The actions table won't have any foreign keys. It's going to have a "many-to-many" relationship with the characters table. This is because **many** of the characters can perform **many** actions. You will see why you don't need a foreign key later.

Insert a row into the `actions` table. Give it an `action` of `run`.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Don't forget the single quotes
- Here's an example `INSERT INTO table(column) VALUES(value);`
- Try entering `INSERT INTO actions(action) VALUES('run');`

## 1410. Insert `jump`

### 1410.1

Insert another row into the `actions` table. Give it an `action` of `jump`.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Don't forget the single quotes
- You previously used `INSERT INTO actions(action) VALUES('run');`
- Try entering `INSERT INTO actions(action) VALUES('jump');`

## 1420. Insert `duck`

### 1420.1

Add another action row with an `action` of `duck`.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Don't forget the single quotes
- You previously used `INSERT INTO actions(action) VALUES('jump');`
- Try entering `INSERT INTO actions(action) VALUES('jump');`

## 1430. View `actions` Data

### 1430.1

View all the data in `actions` to make sure there's no mistakes.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to select all the columns
- Try entering `SELECT * FROM actions;`

## 1440. Create Junction Table

### 1440.1

It look good. "Many-to-many" relationships usually use a **junction** table to link two tables together, forming two "one-to-many" relationships. Your `characters` and `actions` table will be linked using a junction table. Create a new table called `character_actions`. It will describe what actions each character can perform.

#### HINTS

- Use the `CREATE TABLE` keywords
- You previously used `CREATE TABLE more_info();`
- Try entering `CREATE TABLE character_actions;`

## 1450. Add `character_id` Column

### 1450.1

Your junction table will use the primary keys from the `characters` and `actions` tables as foreign keys to create the relationship.

Add a column named `character_id` to your junction table. Give it the type of `INT` and constraint of `NOT NULL`.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- You previously used: `ALTER TABLE actions ADD COLUMN name VARCHAR(20) UNIQUE NOT NULL;`
- Try entering `ALTER TABLE character_actions ADD COLUMN action_id INT NOT NULL;`

## 1460. Add `character_id` as Foreign Key

### 1460.1

The foreign keys you set before were added when you created the column. You can set an existing column as a foreign key like this:

```sql
ALTER TABLE table_name ADD CONSTRAINT constraint_name FOREIGN KEY(column_name) REFERENCES referenced_table(referenced_column);
```

Hmm, that doesn't seem any easier :disappointed: Set the `character_id` column you just added as a foreign key that references the `character_id` from the `characters` table. Use `character_actions_character_id_fkey` as the constraint name.

#### HINTS

- Without the keywords, it looks like this: `character_actions character_actions_character_id_fkey character_id characters(character_id);`
- All the info you need is there, read it closely
- This is a tough one, give it one more try
- Try this: `ALTER TABLE characters_actions ADD CONSTRAINT character_actions_character_id_fkey FOREIGN KEY(character_id) REFERENCES characters(character_id);`

## 1470. View `character_actions` Details

### 1470.1

View the details of the `character_actions` table to see the foreign key constraint you added.

#### HINTS

- Use the **d**isplay command
- Add the table name after the command
- Enter `\d character_actions`

## 1480. Add `action_id` Column

### 1480.1

Add another column to `character_actions` named `action_id`. Give it a type of `INT` and constraint of `NOT NULL`.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- You previously used: `ALTER TABLE character_actions ADD COLUMN character_id INT NOT NULL;`
- Try entering `ALTER TABLE character_actions ADD COLUMN action_id INT NOT NULL;`

## 1500. Add `action_id` as Foreign Key

### 1500.1

You're going to need to set that column as a foreign key as well. Here's the example again:

```sql
ALTER TABLE table_name ADD CONSTRAINT constraint_name FOREIGN KEY(column_name) REFERENCES referenced_table(referenced_column);
```

Set the `action_id` column you just added as a foreign key that references the `action_id` from the `actions` table. Use `character_actions_action_id_fkey` as the constraint name.

#### HINTS

- Without the keywords, it looks like this: `character_actions character_actions_action_id_fkey action_id actions(action_id);`
- You previously used: `ALTER TABLE characters_actions ADD CONSTRAINT character_actions_character_id_fkey FOREIGN KEY(character_id) REFERENCES characters(character_id);`
- Here it is `ALTER TABLE characters_actions ADD CONSTRAINT character_actions_action_id_fkey FOREIGN KEY(action_id) REFERENCES actions(action_id);`

## 1510. View `character_actions` Details

### 1510.1

View the details of the `character_actions` table to see your keys.

#### HINTS

- Use the **d**isplay command
- Add the table name after the command
- Enter `\d character_actions`

## 1520. Create Composite Primary Key

### 1520.1

I mentioned earlier that every table should have a primary key. Your previous tables had a single column as a primary key. This one will be different. You can create a primary key from two columns known as a **composite** primary key. Here's an example:

```sql
ALTER TABLE table_name ADD PRIMARY KEY(column1, column2);
```

Use `character_id` and `action_id` to create a composite primary key for this table.

#### HINTS
 
- Try `ALTER TABLE character_actions ADD PRIMARY KEY(character_id, action_id);`

## 1530. View `character_actions` Details

### 1530.1

This table will have multiple rows with the same `character_id`, and multiple rows the the same `action_id`. So neither of them are unique. But you will never have the same `character_id` and `action_id` in a single row. So the two columns together can be used to uniquely identify each row.

View the details of the `character_actions` table to see your composite key.

#### HINTS

- Use the **d**isplay command
- Add the table name after the command
- Enter `\d character_actions`

## 1540. Insert Yoshi Actions

### 1540.1

Insert three rows into `character_actions` for all the actions Yoshi can perform. His `character_id` is `7` so use that on each row, and the `action_id` values are `1`, `2`, and `3`. Try to add them all with one command.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column_1, column_2) VALUES(value_1, value_2), (value_1, value_2);`
- You previously used `INSERT INTO sounds(filename, character_id) VALUES('yay.wav', 3), ('woo-hoo.wav', 3);`
- Try `INSERT INTO character_actions(character_id, action_id) VALUES(7, 1), (7, 2), (7, 3);`

## 1550. View `character_actions` Data

### 1550.1

View all the data in `character_actions` to see your rows.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to select all the columns
- Try entering `SELECT * FROM character_actions;`

## 1560. Insert Daisy Actions

### 1560.1

Add three more rows into `character_actions` for all of Daisy's actions. Her `character_id` is `6` so use that on each row, and the `action_id` values are `1`, `2`, and `3`. Try to add them all with one command.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column_1, column_2) VALUES(value_1, value_2), (value_1, value_2);`
- You previously used `INSERT INTO character_actions(character_id, action_id) VALUES(7, 1), (7, 2), (7, 3);`
- Try `INSERT INTO character_actions(character_id, action_id) VALUES(6, 1), (6, 2), (6, 3);`

## 1570. Insert Bowser Actions

### 1570.1

Add three more rows for Bowser's actions. His `character_id` is `5`. He can perform all the actions as well.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Use `1`, `2`, and `3` for the `action_id` values 
- Here's an example: `INSERT INTO table_name(column_1, column_2) VALUES(value_1, value_2), (value_1, value_2);`
- You previously used `INSERT INTO character_actions(character_id, action_id) VALUES(6, 1), (6, 2), (6, 3);`
- Try `INSERT INTO character_actions(character_id, action_id) VALUES(5, 1), (5, 2), (5, 3);`

## 1580. Insert Toad Actions

### 1580.1

Add three more rows for Toad's actions. His `character_id` is `4`.

#### HINTS

- Add a row for each action
- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column_1, column_2) VALUES(value_1, value_2), (value_1, value_2);`
- You previously used `INSERT INTO character_actions(character_id, action_id) VALUES(5, 1), (5, 2), (5, 3)`
- Try `INSERT INTO character_actions(character_id, action_id) VALUES(4, 1), (4, 2), (4, 3);`

## 1590. Insert Peach Actions

### 1590.1

Peach's `character_id` is `3`. She can perform all the actions as well, so add three more rows for those.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column_1, column_2) VALUES(value_1, value_2), (value_1, value_2);`
- You previously used `INSERT INTO character_actions(character_id, action_id) VALUES(4, 1), (4, 2), (4, 3)`
- Try `INSERT INTO character_actions(character_id, action_id) VALUES(3, 1), (3, 2), (3, 3);`

## 1600. Insert Luigi Actions

### 1600.1

Add three more rows for Luigi's actions.

#### HINTS

- He can do all the actions as well
- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column_1, column_2) VALUES(value_1, value_2), (value_1, value_2);`
- You previously used `INSERT INTO character_actions(character_id, action_id) VALUES(3, 1), (3, 2), (3, 3)`
- Try `INSERT INTO character_actions(character_id, action_id) VALUES(2, 1), (2, 2), (2, 3);`

## 1610. Insert Mario Actions

### 1610.1

Last is Mario, add three rows for his actions.

#### HINTS

- He can do all the actions
- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column_1, column_2) VALUES(value_1, value_2), (value_1, value_2);`
- You previously used `INSERT INTO character_actions(character_id, action_id) VALUES(2, 1), (2, 2), (2, 3)`
- Try `INSERT INTO character_actions(character_id, action_id) VALUES(1, 1), (1, 2), (1, 3);`

## 1620. View `character_actions` Data

### 1620.1

View all the data in `character_actions` to see your rows. If it doesn't fit on the screen, press enter to continue viewing the data.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to select all the columns
- Try entering `SELECT * FROM character_actions;`

## 1630. Display Tables

### 1630.1

Congratulations :tada: I think you've added enough data into the database. I love it! Take a look around to see what you ended up with. First, display all the tables you created.

#### HINTS

- Use the **d**isplay command
- Enter `\d`

## 1640. View `characters` Data

### 1640.1

There's five tables there. Nice job. Next, take a look at all the data in the `characters` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to select all the columns
- Try entering `SELECT * FROM characters;`

## 1650. View `more_info` Data

### 1650.1

Those are some lovely characters. Next, view all the data in `more_info`.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to select all the columns
- Try entering `SELECT * FROM more_info;`

## 1660. Full Join `characters` on `more_info`

### 1660.1

You can see the `character_id` there so you just need to find the matching id in the `characters` table to find out who it's for. Or...

You added that as a foreign key, that means you can get all the data from both tables together. Introducing the `JOIN` command. Here's an example:

```sql
SELECT columns FROM table_1 FULL JOIN table_2 ON table_1.primary_key_column = table_2.foreign_key_column;
```

Enter a join command to see **all** the info from both tables. The two tables are `characters` and `more_info`. The columns are the `character_id` column from both tables since those are the keys.

#### HINTS

- Use `*` to see all the columns
- Give it one more try, read closely
- Without the keywords, it looks like this: `characters more_info characters.character_id = more_info.character_id`
- Try entering `SELECT * FROM characters FULL JOIN more_info ON characters.character_id = more_info.character_id;`

## 1670. Full Join `characters` on `sounds`

### 1670.1

Now you can see all the info from both tables. If you recall, that's a "one-to-one" relationship. So there's one row in each table that matches a row from the other.

Here's the example again:

```sql
SELECT columns FROM table_1 FULL JOIN table_2 ON table_1.primary_key_column = table_2.foreign_key_column;
```

Use another join command to view the `characters` and `sounds` tables together. They both use the `character_id` column for their keys as well.

#### HINTS

- Use `*` to see all the columns
- You previously used `SELECT * FROM characters FULL JOIN more_info ON characters.character_id = more_info.character_id;`
- Try entering `SELECT * FROM characters FULL JOIN sounds ON characters.character_id = sounds.character_id;`

## 1680. Join `character_actions` with `characters` and `actions`

### 1680.1 

This shows the "one-to-many" relationship. You can see that some of the characters have more than one row because they have **many** sounds. Looks like we never got around to adding sounds for a few of the characters.

Lastly, how can you see all the info from the `characters`, `actions`, and `character_actions` tables? Here's an example that joins three tables:

```sql
SELECT columns FROM junction_table
FULL JOIN table_1 ON junction_table.foreign_key_column = table_1.primary_key_column 
FULL JOIN table_2 ON junction_table.foreign_key_column = table_2.primary_key_column;
```

View all the data from `characters`, `actions`, and `character_actions`. Use the correct keys.

#### HINTS

- Use the `character_id` column to join `character_actions` and `characters`
- Use the `action_id` column to join `character_actions` and `actions`
- Without the keywords, it looks like this: `character_actions characters character_actions.character_id = characters.character_id actions character_actions.action_id = actions.action_id;`
- Try entering `SELECT * FROM character_actions FULL JOIN characters ON character_actions.character_id = characters.character_id FULL JOIN actions ON character_actions.action_id = actions.action_id;`
