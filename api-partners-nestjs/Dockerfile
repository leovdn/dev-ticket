FROM node:18.19.1

WORKDIR /home/node/app

RUN chown -R node:node /home/node/app

COPY --chown=node:node package.json .

RUN apt update && apt install -y openssl procps

RUN npm install

COPY --chown=node:node . .

USER node

CMD tail -f /dev/null