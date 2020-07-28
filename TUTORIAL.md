# Learn Relational Databases by Building a Mario Database

> Welcome to the Relational Database Lessons! You will be using PostgreSQL for this section. It's an extremely popular open source relational database management systems (RDBMS). My goal is to teach you everything I can about it and relatational databases.

## 20. Login

### 20.1

Your virtual machine comes with PostgreSQL (psql) installed. In order to interact with it, you need to log in. You can do that by typing `psql -U freecodecamp postgres` into the terminal and pressing enter. The `-U` stand for `username`. This will log you in as `freecodecamp`.

#### HINTS

- Capitalization matters
- If the terminal isn't open, find the "hamburger" menu at the top left of the window, navigate to the "Terminal" tab, and click "New Terminal"
- Type `psql -U freecodecamp postgres` into the terminal and press enter

## 30. View Databases

### 30.1

First thing to do is see what databases are here. Type `\l` into the prompt to **l**ist them.

#### HINTS

- Type `\l` into the psql prompt and press enter
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in first

## 40. Create `first_database`

### 40.1

The databases you see come with psql. You want to make your own. The command to create a new database is:

```sql
CREATE DATABASE database_name;
```

The capitalized words are keywords telling psql what to do. The name of the database is the lowercase word. Note that **all commands need a semi-colon at the end.**

Create a new database named `first_database`.

#### HINTS

- Don't forget the semi-colon
- Type `CREATE DATABASE first_database;` into the psql prompt and press enter
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in first

## 50. View `first_database`

### 50.1

Use the **l**ist shortcut command again to make sure your new database is there.

#### HINTS

- Enter `\l` into the psql prompt and press enter
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in first

## 60. Create `second_database`

### 60.1

It worked. If you don't get a message after entering a command, it means it's incomplete and you likely forgot the semi-colon. You can just add it on the next line and press enter to finish the command. Create another database named `second_database`.

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
- Try entering `\l`
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
- Type `psql -U freecodecamp postgres` into the terminal to log in to psql if you aren't logged in first
