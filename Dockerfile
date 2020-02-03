FROM node:12.13.0-slim AS build

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build
RUN mv node_modules/ dist/node_modules

FROM node:12.13.0-slim AS deploy

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist/ .

ENTRYPOINT node server.js