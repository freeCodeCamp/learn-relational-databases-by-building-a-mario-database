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
