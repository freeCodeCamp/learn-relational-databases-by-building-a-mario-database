# Introduction

> Welcome to the Relational Database Lessons! You will be using PostgreSQL for this section. It's an extremely popular open source relational database management systems (RDBMS). My goal is to teach you everything I can about it and relatational databases.

## 10. Start PostgreSQL

The first thing to do is start the database service so you can log in and play around with it. Your virtual machine comes with PostgreSQL (psql) installed. In order to start it, type this command into the terminal:

```bash
sudo service postgresql start
```

### 10.1

Start the PostgreSQL service

## 20. Login

The psql service is now running. In order to interact with it, you need to log in. Use this command to do so:

```bash
psql -U freecodecamp postgres
```

The `-U` stand for `username`. This will log you in as `freecodecamp`, a user I created for you.

### 20.1

Log in to psql

## 30. View Databases

I noticed the prompt changed to `postgres=#`. That must mean you are connected to the service. First thing to do is see what databases are here.

Type `\l` into the prompt to **l**ist them.

If you don't see the prompt at the bottom after listing, it means there wasn't enough room to display all the information. Press `Enter` until you see the prompt again.

### 30.1

List the databases

## 40. Create `first_database`

The databases you see come with psql. You want to make your own. The command to create a new database is:

```sql
CREATE DATABASE database_name;
```

The capitalized words are keywords telling psql what to do. The name of the database is the lowercase word. Note that **all commands need a semi-colon at the end.**

Create a new database named `first_database`.

### 40.1

Create `first_database`

## 50. View `first_database`

Use the **l**ist command again to make sure your new database is there.

### 50.1

View the databases

#### HINTS

- Enter the `\l` command

## 60. Create `second_database`

It worked. If you don't get a message after entering a command, it means it's incomplete and you likely forgot the semi-colon. You can just add it on the next line and press enter to finish the command.

Create another database named `second_database`.

### 60.1

Create `second_database`

#### HINTS

- Here's the example again: `CREATE DATABASE database_name;`
- Try entering `CREATE DATABASE second_database;`

## 70. View Databases

You should have two new databases. Take another look at them to make sure.

### 70.1

View the databases

#### HINTS

- Use the **l**ist shortcut command
- Try entering `\l`

## 80. Connect to `second_database`

You can **c**onnect to a database by entering `\c database_name`. You need to connect to add information to it.

Connect to your `second_database`.

### 80.1

Connect to `second_database`

#### HINTS

- Enter `\c second_database` to connect

## 90. View `second_database` Tables

### 90.1

You should see a message that you are connected. I noticed the prompt changed to `second_database=#`. So the `postgres=#` prompt before must have meant that you were connected to that database. A database is made of tables that hold your data. Enter `\d` to **d**isplay the tables.

#### HINTS

- Type `\d` in the prompt and press enter
- Hint2
