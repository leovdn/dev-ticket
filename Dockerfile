FROM node:21-slim

# WORKDIR /home/node/app

# USER node

# CMD tail -f /dev/null

WORKDIR /home/node/app

RUN chown -R node:node /home/node/app

COPY --chown=node:node package.json .

RUN apt update && apt install -y openssl procps

RUN npm install

COPY --chown=node:node . .

CMD tail -f /dev/null

USER node