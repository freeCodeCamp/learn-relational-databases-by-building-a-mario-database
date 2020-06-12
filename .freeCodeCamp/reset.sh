# Commands to set up tutorial
sudo cp /workspace/project/.freeCodeCamp/.bashrc ~/.bashrc
sudo cp /workspace/project/.freeCodeCamp/.psqlrc ~/.psqlrc
sudo cp /workspace/project/.freeCodeCamp/postgresql.conf /etc/postgresql/12/main/postgresql.conf
sudo cp /workspace/project/.freeCodeCamp/pg_hba.conf /etc/postgresql/12/main/pg_hba.conf
sudo touch /workspace/.bash_history
sudo touch /workspace/pg.log
sudo touch /workspace/queryResults.log
sudo chmod 777 /workspace/.bash_history
sudo chmod 777 /workspace/pg.log
sudo chmod 777 /workspace/queryResults.log
sudo chown -R postgres:postgres /var/lib/postgresql/12/main
sudo service postgresql stop && sudo service postgresql start && echo "SELECT 'CREATE USER freecodecamp WITH CREATEDB' WHERE NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname='freecodecamp')\gexec" | psql -U postgres -X

# Rebuild database
psql -U postgres < ./.freeCodeCamp/db.sql
