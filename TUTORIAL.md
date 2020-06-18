# Introduction

> Welcome to the Relational Database Lessons! You will be using PostgreSQL for this section. It's an extremely popular open source relational database management systems (RDBMS). My goal is to teach you everything I can about it and relatational databases.

## L10 Start PostgreSQL

The first thing to do is start the database service so you can log in and play around with it. Your virtual machine comes with PostgreSQL (psql) installed. In order to start it, type this command into the terminal:

```bash
sudo service postgresql start
```

### L10S1

Start the PostgreSQL service

## L20 Login

The psql service is now running. In order to interact with it, you need to log in. Use this command to do so:

```bash
sudo -u postgres psql
```

The `-u` stand for `username`. This will log you in as `postgres`.

### L20S1

Log in to psql

## L30 View Databases

I noticed the prompt changed to `postgres=#`. That must mean you are connected to the service. First thing to do is see what databases are here.

Type `\l` into the prompt to **l**ist them.

If you don't see the prompt at the bottom after listing, it means there wasn't enough room to display all the information. Press `Enter` until you see the prompt again.

### L30S1

List the databases

## L40 Create `first_database`

The databases you see come with psql. You want to make your own. The command to create a new database is:

```sql
CREATE DATABASE database_name;
```

The capitalized words are keywords telling psql what to do. The name of the database is the lowercase word. Note that **all commands need a semi-colon at the end.**

Create a new database named `first_database`.

### L40S1

Create `first_database`

## L50 View `first_database`

Use the **l**ist command again to make sure your new database is there.

### L50S1

View the databases

#### HINTS

- Enter the `\l` command

## L60 Create `second_database`

It worked. If you don't get a message after entering a command, it means it's incomplete and you likely forgot the semi-colon. You can just add it on the next line and press enter to finish the command.

Create another database named `second_database`.

### L60S1

Create `second_database`

#### HINTS

- Here's the example again: `CREATE DATABASE database_name;`
- Try entering `CREATE DATABASE second_database;`

## L70 View Databases

You should have two new databases. Take another look at them to make sure.

### L70S1

View the databases

#### HINTS

- Use the **l**ist shortcut command
- Try entering `\l`

## L80 Connect to `second_database`

You can **c**onnect to a database by entering `\c database_name`. You need to connect to add information to it.

Connect to your `second_database`.

### L80S1

Connect to `second_database`

#### HINTS

- Enter `\c second_database` to connect

## L90 View `second_database` Tables

You should see a message that you are connected. I noticed the prompt changed to `second_database=#`. So the `postgres=#` prompt before must have meant that you were connected to that database.

A database is made of tables that hold your data. You can enter `\d` to **d**isplay the tables.

Take a look at what tables are in this database.

### L90S1

View tables in `second_database`

#### HINTS

- Try entering `\d`
