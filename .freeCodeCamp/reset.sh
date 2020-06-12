# Commands to set up tutorial
sudo cp ./.freeCodeCamp/.bashrc ..
touch ../.bash_history
sudo touch ../pg.log
sudo chmod 777 ../pg.log
sudo touch ../queryResults.log
sudo chmod 777 ../queryResults.log
sudo cp ./.freeCodeCamp/.psqlrc ..
sudo cp ./.freeCodeCamp/postgresql.conf /etc/postgresql/12/main/postgresql.conf
sudo cp ./.freeCodeCamp/pg_hba.conf /etc/postgresql/12/main/pg_hba.conf
sudo chown -R postgres:postgres /var/lib/postgresql/12/main
sudo service postgresql stop
sudo service postgresql start
echo "SELECT 'CREATE USER freecodecamp WITH CREATEDB' WHERE NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname='freecodecamp')\gexec" | psql -U postgres -X

# Rebuild database
psql -U postgres < ./.freeCodeCamp/db.sql
