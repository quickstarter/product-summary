FROM node:8.11-alpine

RUN mkdir -p src/app

WORKDIR /src/app

COPY . /src/app

RUN yarn install

EXPOSE 3001

CMD ["npm", "run", "serverD"]
