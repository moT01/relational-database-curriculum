FROM ubuntu:20.04

ARG USERNAME=camper
ARG REPO_NAME=relational-database-curriculum

RUN mkdir /workspace

ARG HOMEDIR=/workspace/$REPO_NAME

RUN mkdir /workspace/${REPO_NAME}

ENV TZ="America/New_York"

RUN apt-get update && apt-get install -y sudo

# Unminimize Ubuntu to restore man pages
RUN yes | unminimize

# Set up timezone
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Set up user, disable pw, and add to sudo group
RUN adduser --disabled-password \
  --gecos '' ${USERNAME}

RUN adduser ${USERNAME} sudo

RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> \
  /etc/sudoers

# Install packages for projects
RUN sudo apt-get install -y curl git bash-completion man-db nano vim git postgresql-12

# Install Node LTS
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
RUN sudo apt-get install -y nodejs

# Add PostgreSQL repository and install version 12
# RUN echo "deb http://apt.postgresql.org/pub/repos/apt/ focal-pgdg main" | tee -a /etc/apt/sources.list.d/pgdg.list
# RUN wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo gpg --dearmor -o /usr/share/keyrings/postgresql-archive-keyring.gpg
# RUN echo "deb [signed-by=/usr/share/keyrings/postgresql-archive-keyring.gpg] http://apt.postgresql.org/pub/repos/apt focal-pgdg main" | tee -a /etc/apt/sources.list.d/pgdg.list > /dev/null
# RUN apt-get update && apt-get install -y postgresql-12

# /usr/lib/node_modules is owned by root, so this creates a folder ${USERNAME} 
# can use for npm install --global
WORKDIR ${HOMEDIR}
RUN mkdir ~/.npm-global
RUN npm config set prefix '~/.npm-global'

# Configure course-specific environment
COPY . .
WORKDIR ${HOMEDIR}

RUN cd ${HOMEDIR} && npm install