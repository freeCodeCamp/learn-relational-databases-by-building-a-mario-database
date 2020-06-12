# This is run when reset is pressed to rebuild a database

psql -U postgres < ./.freeCodeCamp/db.sql
