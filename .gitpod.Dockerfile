FROM gitpod/workspace-postgres:2024-01-24-09-19-42

ARG HOMEDIR=/workspace/project

WORKDIR ${HOMEDIR}

RUN sudo apt-get update && sudo apt-get upgrade -y

ENV CODEROAD_TUTORIAL_URL=https://raw.githubusercontent.com/freeCodeCamp/learn-relational-databases-by-building-a-mario-database/main/tutorial.json
