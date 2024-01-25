FROM gitpod/workspace-postgres:2024-01-24-09-19-42
# FROM gitpod/workspace-full:2023-08-29-11-00-25

ARG REPO_NAME=learn-relational-databases-by-building-a-mario-database
ARG HOMEDIR=/workspace/$REPO_NAME

WORKDIR ${HOMEDIR}

RUN bash -c 'VERSION="18" \
    && source $HOME/.nvm/nvm.sh && nvm install $VERSION \
    && nvm use $VERSION && nvm alias default $VERSION'

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix

RUN sudo apt-get update && sudo apt-get upgrade -y

# Install PostgreSQL
# RUN sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list' && \
#     wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add - && \
#     sudo install-packages postgresql-12 postgresql-contrib-12
