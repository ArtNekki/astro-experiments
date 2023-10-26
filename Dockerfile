FROM node:18

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci
RUN npm run build

COPY . .

ENV HOST=0.0.0.0
ENV PORT=4321

EXPOSE 4321

CMD node ./dist/server/entry.mjs
