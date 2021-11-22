FROM node:14

WORKDIR /app
COPY ./package.json ./
COPY ./yarn.lock ./


# Install nodejs global packages
RUN yarn global add gatsby-cli

RUN yarn install

COPY . .