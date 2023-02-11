
FROM node:16-alpine as builder

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

FROM node:16-alpine

WORKDIR /usr/src/app
COPY --from=builder /usr/src/app ./

EXPOSE 3000
CMD ["npm", "run", "start:prod"]